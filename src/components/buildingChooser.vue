<template>
    <div>
        <div class="buildings-container">
            <div class="buildings-title section has-text-white is-title"> Search your building</div>
            <div class="section select-container">
                <div class="buildings-input">
                    <v-select :value="$store.state.chosen_building" @input="select_building"
                              :options="buildings" class="select-bar"></v-select>
                </div>
                <div class="section button-container">
                    <button class="button is-hp-green-button" @click="confirm_building">Choose</button>
                    <small class="has-text-white p-md  hidden" id="warning">Please choose a building</small>
                </div>
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
            },
            confirm_building() {
                if (this.$store.state.chosen_building) {
                    this.$router.push(`/service/${this.$store.state.chosen_building}`)
                } else {
                    const warning = document.getElementById('warning')
                    warning.classList.toggle('hidden')
                }
            }
        },
        props: {
            buildings: Array
        }
    }
</script>

<style scoped>
    .is-hp-green-button {
        width: 80px;
    }
    .button-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .select-container {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    .select-bar {
        background-color: #ffffff;
        border-radius: 5px;
        min-width: 300px;


    }

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
        display: flex;
        justify-content: center;
    }

    .buildings-title {
        font-size: 40px;
        text-align: center;

    }
    @media all and (max-width: 430px){
        .section {
            padding: 3rem 0;
        }

    }

</style>