<template>
    <div>
       <building-chooser v-if="!this.$store.state.chosen_building"></building-chooser>

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

            }


        }


    }
</script>

<style scoped>
    .buildings-container {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .buildings-input {
        min-width: 350px;
    }
    .buildings-title {
        font-size: 40px;
        text-align: center;
    }

</style>