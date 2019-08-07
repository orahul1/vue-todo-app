<template>
  <div class="wrapper">
    <div class="container">
      <p class="title">To-do List</p>
      <p class="empty" v-if="todoList.length == 0 && doneList.length == 0">Your List is empty !</p>
      <div class="todo_wrapper" v-for="todo in todoList" :key="todo">
        <div class="todo">{{todo}}</div>
        <button class="btn done_btn" @click="todoCompleted(todo)">Done</button>
        <button class="btn delete" @click="deleteTodo(todo,'active')">Delete</button>
      </div>
      <span v-if="doneList.length > 0">
        <p class="done_title">Done List</p>
        <div class="todo_wrapper done_wrapper" v-for="doneTodo in doneList" :key="doneTodo">
          <div class="todo done">{{doneTodo}}</div>
          <button class="btn delete" @click="deleteTodo(doneTodo,'notactive')">Delete</button>
        </div>
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "ListComponent",
  data() {
    return {
      todoList: [],
      doneList: []
    };
  },
  mounted() {
    this.$root.$on("newTodo", todo => {
      this.todoList.push(todo);
    });
  },
  methods: {
    /* TODO: push an id with each todo, use that to compare because duplicate error while filtering
       reason : multiple todo with SAME NAME :) 
    */
    todoCompleted(todo) {
      this.todoList = this.todoList.filter(item => item != todo); //need to change 
      this.doneList.push(todo);
    },
    deleteTodo(todo,status) {
      if(status == 'notactive'){
      this.doneList = this.doneList.filter(item => item != todo) //need to change 
      }else{
        this.todoList = this.todoList.filter(item => item != todo); //need to change 
      }
    }
  }
});
</script>

<style lang="scss" scoped>
.wrapper {
  .container {
    .title {
      color: #ff3511;
      font-size: 20px;
      padding: 10px 0px;
    }
    background: rgb(37, 37, 37);
    color: #0f0f0f;
    font-size: 18px;
    width: 50%;
    padding: 20px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
    border-radius: 15px;
    .todo_wrapper {
      display: flex;
      align-items: center;
      padding: 10px 0px;
      background: #fa8b0b;
      padding: 10px;
      border-radius: 5px;
      margin: 10px 0px;
      .todo {
        min-width: 70%;
        max-width: 70%;
        word-wrap: break-word;
      }
    }
    .empty {
      color: #ffff;
    }
    .done_title {
      color: #06e978;
    }
  }
}

.done_wrapper {
  background: #06e978 !important;
  .todo {
    min-width: 83% !important;
    max-width: 83% !important;
    word-wrap: break-word;
  }
  .done {
    text-decoration-line: line-through;
  }
}
</style>
