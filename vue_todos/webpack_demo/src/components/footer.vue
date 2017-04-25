<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" v-model="isAllChecked"/>
    </label>
    <span>
        <span>已完成{{checkedCount}}</span> / 全部{{todos.length}}
        </span>
    <button class="btn btn-danger" @click="deleteAll">清除已完成任务</button>
  </div>
</template>

<script>
    export default{
      props: ['todos', 'deleteAll', 'checkedTotal'],
      methods: {

      },
      computed: {
        isAllChecked: {
          get () {
            return this.todos.filter(todo => !todo.finish).length === 0 && this.todos.length > 0
          },
          set (value) {
            this.checkedTotal(value)
            console.log(value)
          }
        },
        checkedCount () {
          return this.todos.filter(todo => todo.finish).length
        }
      }
    }
</script>
<style>
  /*footer*/
  .todo-footer {
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
  }

  .todo-footer label {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
  }

  .todo-footer label input {
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-right: 5px;
  }

  .todo-footer button {
    float: right;
    margin-top: 5px;
  }
</style>
