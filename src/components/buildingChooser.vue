<template>
    <div>
        <div class="buildings-container section">
            <div class="buildings-title section"> Search your building</div>
            <div class="buildings-input section">
                <v-select :value="$store.state.chosen_building" @input="select_building"
                          :options="$store.state.buildings"></v-select>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "buildingChooser",
        methods: {
            select_building(val) {
                this.$store.commit('select_building', val)
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