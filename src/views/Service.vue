<template>
    <div class="root-container">

        <div class="parent-container has-bg-blue">

            <building-chooser :buildings="buildings" class="buildings-chooser"></building-chooser>

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


        },
        mounted() {

        }
    }
</script>

<style scoped>


    .parent-container {
        min-height: 40vh;
        padding: 20px;
        min-width: 330px;
        max-width: 600px;
        margin-top: 40px;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-radius: 10px;
        overflow: hidden;
    }

    .root-container {
        display: flex;
        justify-content: center;
        padding: 2rem;
    }

    @media all and (max-width: 768px) {
        .parent-container {
            border-radius: 10px;
            height: 600px;
        }

        .root-container {
            padding: 0;
        }
    }

    @media all and (max-width: 430px) {
        .parent-container {
            width: 400px;
            border-radius: 0;
        }

    }

</style>