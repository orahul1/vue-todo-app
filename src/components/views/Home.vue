<template>
  <section>
    <p class="title">Vuejs To-do</p>
    <AddComponent></AddComponent>
    <ListComponent></ListComponent>
  </section>
</template>

<script lang="ts">
import Vue from "vue";
import AddComponent from "./Add.vue";
import ListComponent from "./List.vue";

export default Vue.extend({
  name: "HomeComponent",
  components: {
    AddComponent,
    ListComponent
  }
});
</script>

<style lang="scss" scoped>
.title {
  color: #7700e6;
  padding: 20px;
  text-align: center;
  text-transform: uppercase;
  font-size: 45px;
}
</style>
