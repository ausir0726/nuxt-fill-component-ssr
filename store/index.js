import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    somedata: { a: 'abc' },
  },
  mutations: {
    replace(state, n) {
      const t = state;
      t.somedata = n;
    },
  },
  actions: {
    async nuxtServerInit({ commit }) {
      const { data } = await axios.get('https://api.myjson.com/bins/owhej');
      commit('replace', data.results.map(t => t.title));
    },
  },
});
store.dispatch('nuxtServerInit');

export default store;
