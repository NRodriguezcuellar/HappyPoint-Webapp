<template>
    <div class="root-container-heatmap">
        <div class="parent-white-container">
            <div class="white-container">
                <heatmapjs-vue class="parent-container" :data="data" :min="min"
                               :max="max">
                    <img src="~@/assets/floor_0.png" alt="floor plan for floor 0 " class="floor-plan"/>
                </heatmapjs-vue>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        name: "heatmap",
        data: function () {
            return {
                data: [{x: 50, y: 50, value: 90}, {x: 200, y: 142, value: 90}],
                min: 0,
                max: 100
            }

        }
    }
</script>

<style scoped>
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


    }

    .floor-plan {
        height: 500px;
        border-radius: 10px;
    }

    @media all and (max-width: 768px) {

    }

</style>