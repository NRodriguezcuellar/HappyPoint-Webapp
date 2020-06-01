<template>
    <div>
        <div class="buildings-container section">
            <div class="buildings-title section"> Search your building</div>
            <div class="buildings-input section">
                <v-select :value="$store.state.chosen_building" @input="select_building"
                          :options="$store.state.buildings"></v-select>
            </div>

            <button class="button has-bg-blue has-text-white" @click="confirm_building">Choose</button>
            <small class="has-text-danger p-md button-warning hidden" id="warning">Please choose a building</small>

        </div>

    </div>
</template>

<script>
    export default {
        name: "buildingChooser",
        methods: {
            select_building(val) {
                this.$store.commit('select_building', val)
            },
            confirm_building() {
                if (this.$store.state.chosen_building) {
                    this.$router.push(`/service/${this.$store.state.chosen_building}`)
                } else {
                    const warning = document.getElementById('warning')
                    warning.classList.toggle('hidden')
                }
            }
        }
    }
</script>

<style scoped>
    .button {
        border: none;
    }

    .hidden {
        display: none;
    }

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