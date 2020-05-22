<template>
    <div class="root-container">
        <div class="has-bg-blue data-grandparent-container" v-if="this.$store.state.chosen_building">
            <div class="title-container"><h1 class="title easy-font has-text-left">
                {{this.$store.state.chosen_building}}</h1></div>
            <div class="data-parent-container">
                <div class="heatmap-container">
                    <heatmap></heatmap>
                </div>
                <div class="graph-container">
                    <div><bar-chart></bar-chart></div>
                </div>
            </div>
        </div>
        <div class="has-text-centered" v-else> Please choose a building</div>

    </div>

</template>

<script>
    import Heatmap from "../components/heatmap";
    import BarChart from "../components/barChart";

    export default {
        name: "Service_heatmap",
        components: {BarChart, Heatmap}
    }
</script>

<style scoped>
    .heatmap-container {
        padding: 2rem;
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
        padding: 3rem;
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
            padding: 0.25rem;
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