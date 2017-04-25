<template>
  <div>
    <input type="text" placeholder="enter the name you search" v-model="inputTo"/>
    <button @click="submitTo">Search</button>
  </div>
</template>
<script>
    export default{
      props: ['updateTo'],
      data () {
        return {
          inputTo: ''
        }
      },
      methods: {
        submitTo () {
          var value = this.inputTo && this.inputTo.trim()
          if (!value) {
            this.inputTo = ''
            return
          }
          this.updateTo(value)
          this.inputTo = ''
        }
      }
    }
</script>
<style>
</style>
