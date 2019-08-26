<template>
  <div>
    Filter todo:
    <select @change="filterTodos($event)">
      <option value="200">200</option>
      <option value="100">100</option>
      <option value="50">50</option>
      <option value="20">20</option>
      <option value="10">10</option>
      <option value="5">5</option>
    </select>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapActions } from 'vuex';
export default Vue.extend({
  name: "FilterTodosComponent",
  methods: mapActions(['filterTodos'])
});
</script>

<style lang="scss" scoped>
</style>