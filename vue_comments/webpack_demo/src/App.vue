<template>
  <div id="app">
    <div>
      <header class="site-header jumbotron">
        <div class="container">
          <div class="row">
            <div class="col-xs-12">
              <h1>请发表对Vue的评论</h1>
            </div>
          </div>
        </div>
      </header>
      <div class="container">
        <comments-add :add="add"></comments-add>
        <comments-list :comments="comments" :remove="remove"></comments-list>
      </div>
    </div>
  </div>
</template>
<script>
import CommentsAdd from './components/CommentsAdd'
import CommentsList from './components/CommentsList'

export default {
  data () {
    return {
      comments: []
    }
  },
  methods: {
    add (comment) {
      this.comments.unshift(comment)
    },
    remove (index) {
      this.comments.splice(index, 1)
    }
  },
  created () {
    // 模拟发送ajax请求，获得数据
    setTimeout(() => {
      this.comments = [
        {name: 'Tom', content: 'vue 真的好用'},
        {name: 'Jone', content: '楼上+1'}
      ]
    }, 200)
  },
  events: {
    'dele-item' (index) {
      this.remove(index)
    }
  },
  components: {
    'comments-add': CommentsAdd,
    'comments-list': CommentsList
  }
}
</script>
<style>

</style>
