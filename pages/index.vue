<template lang="pug">
section
  h1 this is index page
  p.hidden-sm-down index dummy index dummy index dummy index dummy 
</template>

<script>
// import axios from 'axios';
// import store from '../store/index';

export default {
  // store,
  async asyncData() {
    // const { data } = await axios.get('https://cdn.upage.cool/f/pages/site/55a489ca4cfb0e11005f8f9d?category=55a4a94f4cfb0e11005f8fb1&children=true&limit=5&page=1');
    // console.log(data, this);
    // this.$store.commit('replace', data);
    // if (process.BROWSER_BUILD) {
    // }
    return {};
  },
  head() {
    return {
      title: 'sitename',
    };
  },
};
</script>

<style lang="stylus" scoped>

</style>
