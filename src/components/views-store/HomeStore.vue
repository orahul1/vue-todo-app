<template>
  <section>
   <AddTodoComponent/>
   <FilterTodosComponent/>
   <TodoStoreComponent/>
  </section>
</template>

<script lang="ts">
import Vue from "vue";
import TodoStoreComponent from "./Todo.vue";
import AddTodoComponent from "./Add.vue";
import FilterTodosComponent from "./FilterTodo.vue";

export default Vue.extend({
  name: "HomeStoreComponent",
  components: {
    TodoStoreComponent,
    AddTodoComponent,
    FilterTodosComponent
  }
});
</script>

<style lang="scss" scoped>
section{
  margin: 0 40px;
}

</style>
