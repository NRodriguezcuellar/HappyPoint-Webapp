<template>
    <div id="progress-bar-root">
        <div class="progress-bar-parent-container">
            <div class="progress-container">
                <div class="progress-element" v-for="floors of this.floorPercentageInfo" v-bind:key="floors.index">
                    <h2 class="progress-floor-name">Floor {{ floors.floor }}</h2>
                    <progress class="progress is-primary" :value="floors.percentage" max="100"></progress>
                    <div class="progress-percentage" > {{ floors.percentage }}%</div>
                </div>



            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "progressBar",
        props: {floorPercentageInfo: Array}
    }
</script>

<style scoped>


    .progress-percentage {
        padding-bottom: 35px;
        padding-left: 10px;
        color: white;
    }

    .progress-floor-name {
        min-width: 80px;
        padding-bottom: 35px;
        padding-left: 10px;
        padding-right: 10px;
        color: white;
    }

    .progress-element {
        display: flex;
    }

    .progress-bar-parent-container {
        display: flex;
        flex-direction: column;
        align-items: center;

        padding: 1rem;
        border-radius: 10px;
    }

    .progress-title {
        padding: 1rem;
    }

    .progress-container {
        display: flex;
        flex-direction: column;
        padding: 0.5rem;


    }

    .progress {
        min-width: 250px;
    }

    @media all and (max-width: 768px) {
        .progress-element {
            flex-direction: column;
            align-items: center;
            margin-bottom: 10px;
        }

        .progress-floor-name, .progress-bar-parent-container {
            padding: 0 ;
            min-width: 0 ;
            margin-bottom: 0 !important;
        }

        .progress-percentage {
            padding-bottom: 20px !important;
            padding-left: 0;
        }
        .progress {
            margin-bottom: 5px;
        }


    }
</style>