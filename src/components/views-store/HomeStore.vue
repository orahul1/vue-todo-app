<template>
  <section>
   <AddTodoComponent/>
   <TodoStoreComponent/>
  </section>
</template>

<script lang="ts">
import Vue from "vue";
import TodoStoreComponent from "./Todo.vue";
import AddTodoComponent from "./Add.vue";

export default Vue.extend({
  name: "HomeStoreComponent",
  components: {
    TodoStoreComponent,
    AddTodoComponent
  }
});
</script>

<style lang="scss" scoped>

</style>
