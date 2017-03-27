<template lang="pug">
.container
  .row
    h1 FINPO nuxt starter
  .row
    ul
      li
        nuxt-link(to="/") Home
      li
        nuxt-link(to="/about") About
  nuxt
  my-footer(:some="$store.state.somedata")
</template>

<script>
import MyFooter from '~components/Footer.vue';

export default {
  data() {
    return {};
  },
  components: {
    MyFooter,
  },
};
</script>

<style lang="stylus">

</style>
