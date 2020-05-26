<template>
    <div>
        <building-chooser></building-chooser>
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

</style>