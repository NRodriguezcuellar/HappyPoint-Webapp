import Vue from "vue";
import Vuex from "vuex";


Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        chosen_building: null,
        buildings: ['Heidelberglaan 15', 'Padualaan', 'Bibliotheek uithof'],
        floor: 1,
        socket: {
            isConnected: false,
            message: '',
            reconnectError: false,
        }
    },

    mutations: {
        select_building(state, input) {
            state.chosen_building = input
        },
        SOCKET_ONOPEN(state, event) {
            Vue.prototype.$socket = event.currentTarget
            state.socket.isConnected = true
        },
        SOCKET_ONCLOSE(state) {
            state.socket.isConnected = false
        },
        SOCKET_ONERROR(state, event) {
            console.error(event)
        },
        // default handler called for all methods
        SOCKET_ONMESSAGE(state, message) {
            state.socket.message = message
        },
        // mutations for reconnect methods
        SOCKET_RECONNECT(state, count) {
            console.info(count)
        },
        SOCKET_RECONNECT_ERROR(state) {
            state.socket.reconnectError = true;
        },

    },

    actions: {},
    modules: {},
    plugins: []
});
