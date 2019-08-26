<template>
  <div>
    <div class="add">
      <form @submit="onSubmit">
       <input type="text" v-model="title" placeholder="Add todo">
       <input type="submit" value="Submit">
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapActions } from 'vuex';
export default Vue.extend({
  name: "AddTodoComponent",
  data() {
    return {
      title: ''
    }
  },
  methods: {
    ...mapActions(['addTodo']),
    onSubmit(e){
      e.preventDefault();
      this.addTodo(this.title);
      this.title = '';
    }
  }
});
</script>

<style lang="scss" scoped>
.add{
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
form{
  display: flex;
  width: 60%;
  input[type='submit']{
    width: 20%;
    cursor: pointer;
  }
}
}
</style>