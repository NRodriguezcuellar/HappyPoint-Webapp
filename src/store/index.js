import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    chosen_building: null,
    buildings: ['Heidelberglaan', 'Padualaan', 'Bibliotheek uithof']

  },
  mutations: {
    select_building(state, input) {
      state.chosen_building = input
    }
  },
  actions: {},
  modules: {}
});
