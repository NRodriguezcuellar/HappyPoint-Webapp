import Vue from "vue";
import Vuex from "vuex";



Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        chosen_building: null,
        currentFloor: 0,
        overviewToggled: false,
        baseUrl: "http://localhost:8080"
    },

    mutations: {
        select_building(state, input) {
            state.chosen_building = input
        },

        toggleOverview(state, boolean) {
            state.overviewToggled = boolean
        },

        nextFloor(state) {
            state.currentFloor++

        },
        previousFloor(state) {
            state.currentFloor--
        }

    },

    actions: {},
    modules: {},
    plugins: []
});
