<template>
    <div id="progress-bar-root">
        <div class="progress-bar-parent-container">
            <div class="progress-container">
                <div class="progress-element" v-for="floors of this.floorPercentageInfo" v-bind:key="floors.index">
                    <h2 class="progress-floor-name">Floor {{ floors.floor }}</h2>
                    <progress class="progress is-primary" :value="floors.percentage" max="100"></progress>
                    <div class="progress-percentage"> {{ floors.percentage }}%</div>
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


    progress {
        -webkit-appearance: none;
        appearance: none;
    }

    progress[value]::-webkit-progress-bar {
        border-radius: 2px;
        color: #7ED321 !important;
    }


    .progress-percentage {
        padding-left: 10px;
    }

    .progress-floor-name {
        min-width: 80px;
        padding-left: 10px;
        padding-right: 10px;
    }

    .progress-element {
        background-color: white;
        border-radius: 10px;
        display: flex;
        align-items: center;
        margin-bottom: 30px;
        padding: 10px;
    }

    .progress-bar-parent-container {
        display: flex;
        flex-direction: column;
        align-items: center;

        padding: 1rem;
        border-radius: 10px;

    }


    .progress-container {
        display: flex;
        flex-direction: column;
        padding: 0.5rem;
        overflow: auto;
    }

    .progress {
        margin-bottom: 0;
        min-width: 250px;
    }

    @media all and (max-width: 768px) {


        .progress-floor-name, .progress-bar-parent-container {
            padding: 0 5px 0 0;
            min-width: 0;
            margin-bottom: 0 !important;
        }

        .progress-element {
            margin-bottom: 20px;
        }

        .progress-percentage {
            padding-bottom: 0;
            padding-left: 5px;
        }

        .progress {
            margin-bottom: 5px;
        }


    }

    @media all and (max-width: 420px) {

        .progress {
            min-width: 0;
            width: 200px;
        }
    }
</style>