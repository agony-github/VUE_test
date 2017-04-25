<template>
  <ul>
    <li v-for="new in news">{{new}}</li>
  </ul>
</template>
<script>
export default {
  data () {
    return {
      news: ['news001','news002','news003']
    }
  }
}
</script>
<style>
</style>
