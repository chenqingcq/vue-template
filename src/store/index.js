import Vuex from 'vuex';
import Vue from 'vue';
import createPersistedState from "vuex-persistedstate";
import userInfo from './modules/userInfo';
import personnelList from './modules/personnelList';
import mutations from './mutations';
import *as  getters from './getters';

Vue.use(Vuex);

export default new Vuex.Store({
    getters,
    mutations,
    modules: {
        userInfo,
        personnelList
    },
    plugins: [createPersistedState()]
})