<template>
  <div class="wrapper">
    <div class="container">
      <p class="title">To-do List</p>
      <p class="empty" v-if="todoList.length == 0">Your To-do list is empty !</p>
      <div class="todo_wrapper" v-for="todo in todoList.slice().reverse()" :key="todo.id">
        <div class="todo">{{todo.todo}}</div>
        <button class="btn done_btn" @click="todoCompleted(todo)">Done</button>
        <button class="btn delete" @click="deleteTodo(todo,'active')">Delete</button>
      </div>
      <span v-if="doneList.length > 0">
        <p class="done_title">Done List</p>
        <div class="todo_wrapper done_wrapper" v-for="doneTodo in doneList.slice().reverse()" :key="doneTodo.id">
          <div class="todo done">{{doneTodo.todo}}</div>
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
      todoList: [
        { 
          todo: "Props use", 
          id: 1 
        },
        { 
          todo: "Fetch and Post data from api", 
          id: 2 
        }
      ],
      doneList: [
        { 
          todo: "Basic project structure",
          id: 3 
        },
        { 
          todo: "Component communication(emit)", 
          id: 4 
        },
        {
           todo: "Add todo with id for filter", 
           id: 5 
        }
      ]
    };
  },
  mounted() {
    //create new id for todo => For delete 
    let count = this.todoList.length + this.doneList.length + 1;
    //Listen to add component's new todo  
    this.$root.$on("newTodo", todo => {
    //Push to the todo list
      this.todoList.push({ todo: todo, id: count++ });
    });
  },
  methods: {
    todoCompleted(todo) {
      //Receive single todo details from function and filter from todolist
      this.todoList = this.todoList.filter(item => item.id != todo.id);
      this.doneList.push(todo);
    },
    deleteTodo(todo, status) {
      //2 Array of todo present =>  status => Done and Active
      if (status == "notactive") {
        this.doneList = this.doneList.filter(item => item.id != todo.id);
      } else {
        this.todoList = this.todoList.filter(item => item.id != todo.id);
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
      padding: 20px 0px;
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
