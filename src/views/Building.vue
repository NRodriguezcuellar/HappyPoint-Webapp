<template>

    <div class="root-container">

        <div class="has-bg-blue data-grandparent-container" v-if="loaded">

            <div class="title-container"><h1 class="title easy-font has-text-left">
                {{buildingInfo.name}}</h1></div>
            <div class="data-parent-container">

                <div class="heatmap-container" v-if="!overviewToggled">

                    <heatmap
                            :data="floorData" :min="min" :max="max"
                            :progress="parseInt(this.currentFloorPercentage[0].percentage)"
                            :left_arrow="previousFloor"
                            :right_arrow="nextFloor"
                            :floor="parseInt(this.currentFloorPercentage[0].floor)"
                            :picture-source="picture_source"
                            v-if="overviewLoaded && this.currentFloorPercentage">

                    </heatmap>


                </div>


                <div class="overview-parent-container" v-if="overviewToggled">

                    <progress-bar :floor-percentage-info="this.overviewData" v-if="overviewLoaded"></progress-bar>

                </div>

            </div>

            <div class="busyness-navigation-grandparent">

                <div class="busyness-navigation-parent">
                    <button class="busyness-navigation-button button-left easy-font" @click="toggleHeatmap">Heatmap
                    </button>
                    <button class="busyness-navigation-button button-right easy-font" @click="toggleOverview">Overview
                    </button>
                </div>

            </div>

        </div>

        <div class="lds-ellipsis" v-if="loading">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>

        <div class="has-text-centered" v-if="error"> Something went wrong with fetching the data.. Try again later.</div>

    </div>

</template>

<script>
    import Heatmap from "../components/heatmap";
    import ProgressBar from "../components/progressBar";
    import {HubConnectionBuilder, LogLevel, HubConnectionState} from '@aspnet/signalr';

    const client = new HubConnectionBuilder()
        .configureLogging(LogLevel.Warning)
        .withUrl('http://localhost:8080/heatmap/data')
        .build();


    export default {
        name: "Building",
        components: {ProgressBar, Heatmap},
        computed: {
            floor: function () {

                return this.$store.state.currentFloor

            },

            overviewToggled: function () {
                return this.$store.state.overviewToggled

            },

            loading: function () {
                return !(this.loaded === true || this.error === true);

            },

            picture_source: function () {
                return `${this.$store.state.baseUrl}/heatmap/${this.$route.params.building}/${this.$store.state.currentFloor}/img`

            },

            buildingWidth: function () {
                return this.buildingInfo.width
            },

            buildingLength: function () {
                return this.buildingInfo.length
            },

            currentFloorPercentage: function () {

                return this.overviewData.filter(items => {
                    return parseInt(items.floor) === parseInt(this.floor)
                })
            }

        },

        data() {
            return {
                min: 0,
                max: 100,
                error: null,
                loaded: false,
                buildingInfo: null,
                floorData: null,
                heatmapLoaded: false,
                overviewLoaded: false,
                floorplanWidth: 240,
                floorplanHeight: 500,
                overviewData: null
            }

        },

        methods: {

            // change to previous floor
            previousFloor: function () {
                if (this.floor > this.buildingInfo.floorstart) {

                    this.$store.commit('previousFloor')

                    this.changeFloor()


                }

            },

            // change to next floor
            nextFloor: function () {
                if (this.floor < this.buildingInfo.height) {

                    this.$store.commit('nextFloor')

                    this.changeFloor()
                }

            },

            // Function that requests all the building info and also makes the websockets connection to the signalR hub
            fetchInfo() {

                this.axios.get(`${this.$store.state.baseUrl}/heatmap/${this.$route.params.building}`)
                    .then(response => {

                        this.buildingInfo = response.data;

                        // check if connection is already made otherwise connect
                        if (client.state === HubConnectionState.Connected) {

                            this.changeFloor()
                            this.changeBuilding()

                        } else {

                            this.start()
                                .then(() => this.changeFloor())
                                .then(() => this.changeBuilding())

                        }

                        this.loaded = true;

                    })
                    .catch(() => {
                        this.error = true;

                    });


                // receives updates and initial info for the heatmap
                client.on('ReceiveUpdate', res => {

                    this.heatmapLoaded = false

                    this.heatmapParse(res)
                    this.heatmapLoaded = true

                });


                // receives updates and inital info for the overview
                client.on('ReceiveBuildingUpdate', res => {

                    this.overviewLoaded = false

                    this.overviewParse(res)
                    this.overviewLoaded = true


                })


            },
            // show the overview
            toggleOverview() {
                this.$store.commit('toggleOverview', true)
            },

            //show the heatmap

            toggleHeatmap() {
                this.$store.commit('toggleOverview', false)
            },

            changeFloor() {
                client.invoke('ChangeFloor', this.$route.params.building, this.floor).catch(err => console.log(err))

            },

            changeBuilding() {
                client.invoke('changeBuilding', this.$route.params.building).catch(err => console.log(err))

            },

            // converts the device points into an array with the values adjusted for the width and height of the heatmap
            // then saves the parsed points to floorData to use for the Heatmap
            heatmapParse(points) {
                let parsedPoints = []
                const heatmapScaleX = this.floorplanWidth / parseInt(this.buildingWidth)
                const heatmapScaleZ = this.floorplanHeight / parseInt(this.buildingLength)

                for (let point of points) {
                    point = point.trim().split(',')
                    let parsedPointX = parseInt(point[0]) * heatmapScaleX
                    let parsedPointZ = parseInt(point[1]) * heatmapScaleZ
                    parsedPoints.push({x: parsedPointX, y: parsedPointZ, value: 20})
                }

                this.floorData = parsedPoints


            },

            // creates an array of percentage objects for the Overview menu
            overviewParse(percentages) {
                let parsedPercentages = []

                for (let items of percentages) {
                    items = items.trim().split(',')
                    let floorNumber = items[0]
                    let floorPercentage = items[1]
                    let parsed = {
                        floor: floorNumber,
                        percentage: floorPercentage
                    }
                    parsedPercentages.push(parsed)
                }
                this.overviewData = parsedPercentages


            },

            // Starts the signalR client
            start: async function () {
                try {
                    await client.start();
                    console.log("connected");
                } catch (err) {
                    console.log(err);
                    setTimeout(() => this.start(), 5000);
                }

                client.onclose(async () => {
                    await this.start();
                });
            }

        },

        created() {
            this.fetchInfo()
        }


    }
</script>

<style scoped>
    .busyness-navigation-grandparent {
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 10px;
        margin-top: 5px;
        margin-bottom: 30px;
    }

    .busyness-navigation-button {
        padding: 0.8rem;
        border: none;
        display: inline-block;
        color: #ffffff;
        background-color: #7ED321;
    }

    .busyness-navigation-button:hover {
        background-color: rgba(126, 211, 33, 0.85);

    }

    .button-right {
        border-radius: 0 10px 10px 0;
        border-left: 1px solid #ffffff;

    }

    .button-left {
        border-radius: 10px 0 0 10px;
    }

    .busyness-navigation-parent {
        border-radius: 10px;
    }


    .heatmap-container {

    }


    .data-parent-container {
        max-width: 700px;
        padding: 15px;
        display: flex;
        align-items: center;
        height: 670px;
    }

    .data-grandparent-container {
        padding: 50px;
        width: 1200px;
        display: flex;
        flex-direction: column;
        align-items: center;
        border-radius: 10px;
        overflow: hidden;
    }

    .root-container {
        padding: 2rem;
        display: flex;
        justify-content: center;
    }

    .title {
        font-size: 25px;
        color: white;
        padding: 0.5rem;
    }

    @media all and (max-width: 768px) {

        .data-grandparent-container {
            border-radius: 0;
            padding: 0;
        }

        .root-container {
            padding: 0;
            margin-top: 1rem;
        }

        .heatmap-container {
            padding: 0;
        }

        .title {
            padding-bottom: 1rem;
        }

        .data-parent-container {
            flex-direction: column;
        }


    }

    @media all and (max-width: 430px) {
        .busyness-navigation-grandparent {
            z-index: 1;
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            margin-bottom: 10px;
        }

        .busyness-navigation-button {
            padding: 15px;
        }

        .data-grandparent-container {
            min-height: 0;
        }

    }


</style>