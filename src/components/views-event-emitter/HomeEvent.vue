<template>
  <section>
    <AddComponent></AddComponent>
    <ListComponent></ListComponent>
  </section>
</template>

<script lang="ts">
import Vue from "vue";
import AddComponent from "./Add.vue";
import ListComponent from "./List.vue";

export default Vue.extend({
  name: "HomeEventComponent",
  components: {
    AddComponent,
    ListComponent
  }
});
</script>

<style lang="scss" scoped>
</style>
