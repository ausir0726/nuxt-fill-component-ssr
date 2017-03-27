<template lang="pug">
footer All Rights Reserved.Web Design By 
  a(href="https://www.finpo.com.tw", target="_blank") Finpo Design.
  ul
    li(v-for="t in some") {{t}}
</template>
<script>
export default {
  props: ['some'],
};
</script>
<style lang="stylus">
footer
  margin-top 50px
</style>
