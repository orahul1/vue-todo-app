<template>
  <div class="container">
    <div class="todos"> 
      <div v-for="todo in allTodos" :key="todo.id" class="todo"> 
        {{todo.title}}
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
    ...mapActions(['fetchTodos']),
  },
  computed: mapGetters(['allTodos']),
  created() {
     this.fetchTodos();
  }
})
</script>

<style lang="scss" scoped>
.container{
  background: rgb(145, 255, 135);
  color: rgb(0, 0, 0);
  height: 100vh;
  .todos{
      padding: 1rem;
      position: relative;
      display: grid;
      grid-template-columns: repeat(3,1fr);
      grid-gap: 1rem;
      .todo{
        background-color: rgb(65, 201, 137);
          padding: 1rem;
          color: #020202;
          font-weight: 700;
          border-radius: 5px;
          text-align: center;
          position: relative;
          cursor: pointer;
          
      }
  }
}

</style>