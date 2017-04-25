<template>
  <div class="container">
    <section class="jumbotron">
      <h3 class="jumbotron-heading">Search Github Users</h3>
      <search :update-to="updateTo"></search>
    </section>
    <item-list :search-name="searchName"></item-list>
  </div>
</template>
<script>
import search from './components/search'
import itemList from './components/itemList'

export default {
  data () {
    return {
      searchName: ''
    }
  },
  methods: {
    updateTo (name) {
      this.searchName = name
    }
  },
  components: {
    search,
    itemList
  }
}
</script>
<style>
</style>
