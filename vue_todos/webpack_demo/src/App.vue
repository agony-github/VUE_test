<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <todo-header :add-todo="addTodo"></todo-header>
      <todo-content :todos="todos"></todo-content>
      <todo-footer :todos="todos" :delete-all="deleteAll" :checked-total="checkedTotal">
      </todo-footer>
    </div>
  </div>
</template>
<script>
import header from './components/header'
import content from './components/content'
import footer from './components/footer'

export default {
  data () {
    return {
      todos: []
    }
  },
  methods: {
    addTodo (todo) {
      this.todos.unshift(todo)
    },
    remove (todo) {
      this.todos.$remove(todo)
    },
    // 删除所有完成的选项
    deleteAll () {
      // filter() 返回数组中的满足回调函数中指定的条件的元素。
      this.todos = this.todos.filter((todo) => !todo.finish)
    },
    // 指定所有选项都为选中状态
    checkedTotal (isDo) {
      this.todos.forEach(todo => todo.finish = isDo)
    }
  },
  created () {
    setTimeout(() => {
      this.todos = [
        {name: '吃饭', finish: false},
        {name: '睡觉', finish: true},
        {name: '打豆豆', finish: false}
      ]
    }, 200)
  },
  events: {
    'dele-item' (todo) {
      this.remove(todo)
    }
  },
  components: {
    'todo-header': header,
    'todo-content': content,
    'todo-footer': footer
  }
}
</script>
<style>
  /*app*/
  .todo-container {
    width: 600px;
    margin: 0 auto;
  }
  .todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
</style>
