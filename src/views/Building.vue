<template>
    <div class="root-container">
        <div class="has-bg-blue data-grandparent-container" v-if="loaded">
            <div class="title-container"><h1 class="title easy-font has-text-left">
                {{buildingInfo.name}}</h1></div>
            <div class="data-parent-container">
                <div class="heatmap-container">
                    <heatmap :data="heatmap_data" :min="min" :max="max" :progress="20" :left_arrow="send_alert"
                             :right_arrow="send_alert" :floor="parseInt(this.floor)"/>
                    <div class="busyness-navigation-grandparent">
                        <div class="busyness-navigation-parent">
                            <button class="busyness-navigation-button button-left easy-font">Heatmap</button>
                            <button class="busyness-navigation-button button-right easy-font">Overview</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        <div class="lds-ellipsis" v-if="loading">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
        <div class="has-text-centered" v-else-if="error"> Something went wrong.. Try again later.</div>
    </div>
</template>

<script>
    import Heatmap from "../components/heatmap";


    export default {
        name: "Building",
        components: {Heatmap},
        computed: {
            chosen_building: function () {

                return this.$store.state.chosen_building

            },
            floor: function () {

                return this.buildingInfo.floorstart

            }


        },
        data() {
            return {
                heatmap_data: [{x: 50, y: 50, value: 90}, {x: 200, y: 142, value: 90}],
                min: 0,
                max: 100,
                loading: false,
                error: null,
                loaded: false,
                buildingInfo: null,
                websocket: null,
                progress: 20


            }

        },

        created() {
            this.fetchInfo()


        },
        destroyed() {

        },

        methods: {
            send_alert: function () {
                alert("yes")

            },
            fetchInfo() {
                this.loading = true

                this.axios.get(`https://api.happypoint.works/heatmap/${this.$route.params.building}`)
                    .then(response => {
                        this.buildingInfo = response.data;
                        this.loading = false;
                        this.loaded = true;
                    })
                    .catch(() => {
                        this.error = true;
                    })


            }


        },
        mounted() {


        }
    }
</script>

<style scoped>
    .busyness-navigation-grandparent {
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 10px;
        margin-top: 20px;
        margin-bottom: 20px;
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

    .graph-container {
        padding: 2rem;
    }

    .data-parent-container {
        max-width: 700px;
        padding: 15px;
        display: flex;
        align-items: center;
    }

    .data-grandparent-container {
        min-height: 80vh;
        padding: 20px;
        width: 1200px;
        display: flex;
        flex-direction: column;
        align-items: center;
        border-radius: 10px;
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


</style>