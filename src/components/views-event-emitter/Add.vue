<template>
  <div class="wrapper">
    <div class="container">
      <input type="text" v-model="todo"/>
      <button class="btn" @click="addTodo">Add</button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "AddComponent",
  data(){
    return {
      todo:''
    }
  },
  methods: {
    addTodo(){
      if(this.todo != ''){
      //Emit data when user add new todo
      this.$root.$emit('newTodo', this.todo);
      this.todo = '';
      }
    }
  }
});
</script>

<style lang="scss" scoped>
.wrapper {
  .container {
    color: #ffffff;
    width: 50%;
    padding: 20px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
    border-radius: 15px;
    background: rgb(37, 37, 37);
  }
}
</style>
