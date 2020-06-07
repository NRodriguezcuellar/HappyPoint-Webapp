<template>
    <div class="root-container">
        <div class="parent-container has-bg-blue">
            <building-chooser></building-chooser>
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
            return {}


        }
    }
</script>

<style scoped>

    .parent-container {
        min-height: 80vh;
        padding: 20px;
        width: 1200px;

        display: flex;
        flex-direction: column;
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