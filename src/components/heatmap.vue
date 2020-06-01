<template>
    <div class="root-container-heatmap">
        <div class="parent-white-container">
            <button class="heatmap-prev fas fa-arrow-left fa-lg" @click="left_arrow"></button>
            <div class="white-container">
                <heatmapjs-vue class="parent-container" :data="data" :min="min"
                               :max="max">
                    <img src="~@/assets/floor_0.png" alt="floor plan for floor 0 " class="floor-plan"/>
                </heatmapjs-vue>
            </div>
            <button class="heatmap-next fas fa-arrow-right fa-lg" @click="right_arrow"></button>
        </div>
    </div>

</template>

<script>
    import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'


    export default {
        name: "heatmap",
        data: function () {
            return {

            }

        },
        props: {
            data: Array,
            min: Number,
            max:Number,
            left_arrow:Function,
            right_arrow:Function
        }


    }
</script>

<style scoped>


    .heatmap-next, .heatmap-prev {
        top: 50%;
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
        width: 220px;
        border: rgba(142, 155, 149, 0.50) 1px solid;
        border-radius: 13px;
    }

    .white-container {
        background-color: white;
        padding: 25px;
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
    }

    @media all and (max-width: 768px) {

    }

</style>