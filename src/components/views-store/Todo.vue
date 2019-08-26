<template>
  <div class="container">
    <div class="todos"> 
      <div v-for="todo in allTodos" :key="todo.id" @dblclick="onDblClick(todo)"  v-bind:class="todo.completed ? 'active' : 'completed'" class="todo"> 
        {{todo.title}}
        <i  @click="deleteTodo(todo.id)" class="fas fa-trash-alt"></i>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapGetters, mapActions } from 'vuex';

export default Vue.extend({
  name: "TodoStoreComponent",
  methods: {
    ...mapActions(['fetchTodos' , 'deleteTodo', 'updateTodo']),
    onDblClick(todo){      
      const updTodo = {
        id: todo.id,
        title: todo.title,
        completed: !todo.completed
      }
      this.updateTodo(updTodo);
    }
  },
  computed: mapGetters(['allTodos']),
  created() {
     this.fetchTodos();
  }
})
</script>

<style lang="scss" scoped>
.container{
  color: rgb(0, 0, 0);
  height: 100vh;
  .todos{
      padding: 1rem;
      position: relative;
      display: grid;
      grid-template-columns: repeat(3,1fr);
      grid-gap: 1rem;
      .todo{
     
          padding: 1rem;
          color: #020202;
          font-weight: 700;
          border-radius: 5px;
          text-align: center;
          position: relative;
          cursor: pointer;
          
      }
  }
  i{
    position: absolute;
    bottom: 10px;
    right: 10px;
    color: rgb(255, 255, 255);
    cursor: pointer;
  }
}

.active{
   background-color: rgb(65, 201, 137);
}

.completed{
   background-color: #303F54;
   color: #ffffff !important;
}


</style>