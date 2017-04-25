<template>
  <h2 v-show="view">Enter name to search</h2>
  <h2 v-show="loading">Loading result...</h2>
  <h2 v-show='error'>{{error}}</h2>
  <div class="row" v-show="users">
    <div class="card" v-for="user in users">
      <a :href="user.html_url" target="_blank">
        <img :src="user.avatar_url" style='width: 100px'/>
      </a>
      <p class="card-text">{{user.login}}</p>
    </div>
  </div>
</template>
<script>
    // 在那个组件中使用，就在那个组件中引入
    import axios from 'axios'
    export default{
      props: ['searchName'],
      data () {
        return {
          view: true,
          loading: false,
          error: null,
          users: null
        }
      },
      computed: {
        // 监视searchName，只要searchName发生变化，就会发送ajax
        searchName: {
          set (value) {
            this.view = false
            this.loading = true
            this.error = null
            this.users = null
            // 发送ajax请求
            const url = `https://api.github.com/search/users?q=${value}`
            /*
            this.$http.get(url).then(
              response => {
                console.log(response)
                this.users = response.body.items
                this.loading = false
              },
              error => {
                console.log(error)
                this.loading = false
                this.error = error
              }
            ),
            */
            axios.get(url)
              .then(response => {
                console.log(response)
                this.users = response.data.items
                this.loading = false
              })
              .catch(error => {
                console.log(error)
                this.loading = false
                this.error = error
              })
          }
        }
      }
    }
</script>
<style>
  .card {
    float: left;
    width: 33.333%;
    padding: .75rem;
    margin-bottom: 2rem;
    border: 1px solid #efefef;
    text-align: center;
  }
  .card > img {
    margin-bottom: .75rem;
    border-radius: 100px;
  }
  .card-text {
    font-size: 85%;
  }
</style>
