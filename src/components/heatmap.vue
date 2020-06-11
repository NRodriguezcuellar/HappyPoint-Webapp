<template>
    <div class="root-container-heatmap">
        <div class="parent-white-container">
            <button class="arrow-btn heatmap-prev" @click="left_arrow"><i class=" fas fa-arrow-left fa-lg"></i></button>
            <div class="white-container">
                <heatmapjs-vue class="parent-container" :data="data" :min="min"
                               :max="max" ref="heatmap" :options="config">
                    <img :src="pictureSource" alt="floor plan for floor 0 "  class="floor-plan"/>
                </heatmapjs-vue>
            </div>
            <button class="arrow-btn heatmap-next" @click="right_arrow"><i class=" fas fa-arrow-right fa-lg"></i>
            </button>
        </div>

        <div class="has-text-centered has-text-white floor-title easy-font">
            <div class="progress-container">
                <progress class="progress is-success" v-bind:value="progress" max="100">60%</progress>
            </div>
            <div class="sub-content-container">
                <div class="arrow-btn" @click="left_arrow"><i class="fas fa-arrow-left fa-sm heatmap-small-prev"></i>
                </div>
                <div><h2> Floor {{floor}}</h2></div>
                <div class="arrow-btn" @click="right_arrow"><i class="fas fa-arrow-right fa-sm heatmap-small-next"></i>
                </div>
            </div>
        </div>

    </div>

</template>

<script>
    import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'


    export default {
        name: "heatmap",
        data: function () {
            return {
                config: {
                    radius: 40,
                    opacity: 0.4,
                    blur: 0.3,

                }
            }

        },
        props: {
            data: Array,
            min: Number,
            max: Number,
            left_arrow: Function,
            right_arrow: Function,
            floor: Number,
            progress: Number,
            pictureSource: String
        }


    }
</script>

<style scoped>
    .arrow-btn {
        border: none;
        background-color: rgba(255, 255, 255, 0);
        border-radius: 0;
    }

    .progress-container {
        display: flex;
        justify-content: center;
    }

    .progress {
        width: 280px;

    }

    .sub-content-container {
        display: flex;
        justify-content: space-around;
        padding: 10px;
    }


    .floor-title {
        font-size: 20px;
        padding: 10px;
    }


    .heatmap-next, .heatmap-prev {
        top: 300px;
        height: auto;
        margin: 30px;
        color: white;
    }


    .parent-white-container {
        display: flex;
        justify-content: center;
    }

    .root-container-heatmap {
        width: 320px;
    }

    .parent-container {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 240px;
        border: rgba(142, 155, 149, 0.50) 1px solid;
        border-radius: 10px;
    }

    .white-container {
        background-color: white;
        padding: 20px;
        border-radius: 10px;
        max-width: 280px;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;


    }

    .floor-plan {
        height: 500px;
        border-radius: 10px;
        width: 260px;
    }

    .heatmap-small-prev, .heatmap-small-next {
        display: none;

    }

    @media all and (max-width: 380px) {
        .heatmap-prev, .heatmap-next {
            display: none;

        }

        .heatmap-small-prev, .heatmap-small-next {
            display: block;

        }


    }

</style>