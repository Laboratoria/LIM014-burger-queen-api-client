import { createStore } from "vuex";

export default createStore({
    state: {
        breakfast: [],
        generalMenu: [],
        selectedItems: [],
    },

    getters: {
        breakfast(state) {
            return state.breakfast;
        },
        generalMenu(state) {
            return state.generalMenu;
        },
        selectedItems(state) {
            return state.selectedItems;
        },
    },

    mutations: {
        SET_BREAKFAST_ITEMS(state, payload) {
            state.breakfast = payload;
        },
        SET_GENERAL_ITEMS(state, payload) {
            state.generalMenu = payload;
        },
        SET_SELECTED_ITEMS(state, payload) {
            state.selectedItems.push(payload);
        },
    },

    actions: {
        setBreakfast({ commit }, payload) {
            commit("SET_BREAKFAST_ITEMS", payload);
        },
        setGeneral({ commit }, payload) {
            commit("SET_GENERAL_ITEMS", payload);
        },
        setSelected({ commit }, payload) {
            commit("SET_SELECTED_ITEMS", payload);
        },
    },
});