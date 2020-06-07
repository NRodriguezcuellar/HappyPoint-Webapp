import Vue from "vue";
import Vuex from "vuex";



Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        chosen_building: null,
        buildings: ['Heidelberglaan 15'],
        connected: false,
        error: null,
        chatMessages: [],
        limit: 5
    },

    mutations: {
        select_building(state, input) {
            state.chosen_building = input
        },
        ADD_MESSAGE(state, message) {
            while (state.chatMessages.length >= state.limit) {
                state.chatMessages.shift();
            }
            state.chatMessages.push(message);
        },
        DELETE_MESSAGE(state, message) {
            state.chatMessages = state.chatMessages.filter(m => m.id !== message.id);
        },
        SET_CONNECTION(state, message) {
            state.connected = message;
        },
        SET_ERROR(state, error) {
            state.error = error;
        }


    },

    actions: {
        addMessage({commit}, message) {
            commit('ADD_MESSAGE', message);
        },
        deleteMessage({commit}, message) {
            commit('DELETE_MESSAGE', message);
        },
        connectionOpened({commit}) {
            commit('SET_CONNECTION', true);
        },
        connectionClosed({commit}) {
            commit('SET_CONNECTION', false);
        },
        connectionError({commit}, error) {
            commit('SET_ERROR', error);
        }
    },
    modules: {},
    plugins: []
});
