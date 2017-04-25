<template>
  <ul>
    <li v-for="m in messages">
      <a v-link="{path: '/home/message/mdetail/' + m.id}">{{m.content}}</a>
    </li>
  </ul>
  <router-view></router-view>
</template>
<script>
  export default {
    data () {
      return {
        messages: []
      }
    },

    created () {
      this.messages = [
        {id: 1, content: 'message0001'},
        {id: 2, content: 'message0002'},
        {id: 3, content: 'message0003'},
        {id: 4, content: 'message0004'},
        {id: 5, content: 'message0005'}
      ]
    }
  }
</script>
<style>
</style>

