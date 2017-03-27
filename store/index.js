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
      const { data } = await axios.get('https://cdn.upage.cool/f/pages/site/55a489ca4cfb0e11005f8f9d?category=55a4a94f4cfb0e11005f8fb1&children=true&limit=5&page=1');
      commit('replace', data.results.map(t => t.title));
    },
  },
});
store.dispatch('nuxtServerInit');

export default store;
