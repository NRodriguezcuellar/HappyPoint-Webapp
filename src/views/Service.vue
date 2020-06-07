<template>
    <div class="root-container">
        <div class="parent-container has-bg-blue">
            <building-chooser :buildings="buildings"></building-chooser>
        </div>
    </div>

</template>

<script>
    import 'vue-select/dist/vue-select.css';
    import BuildingChooser from "../components/buildingChooser";


    export default {
        name: "Service",
        components: {BuildingChooser},
        data: function () {
            return {
                buildings: ['Heidelberglaan 15'],
            }


        }
    }
</script>

<style scoped>

    .parent-container {
        min-height: 60vh;
        padding: 20px;
        width: 700px;
        margin-top: 15px;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-radius: 10px;
    }

    .root-container {
        display: flex;
        justify-content: center;
        padding: 2rem;
    }

    @media all and (max-width: 768px) {
        .parent-container {
            border-radius: 0;
            height: 600px;
        }

        .root-container {
            padding: 0;
        }
    }

</style>