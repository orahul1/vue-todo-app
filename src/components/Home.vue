<template>
  <section>
    <p class="title">Vuejs To-do</p>
    <div class="types">
      <ul>
        <router-link :to="{ name : 'todo-event-emitter' }">
          <li>Todo - Event Emitter</li>
        </router-link>
        <router-link :to="{ name : 'todo-store' }">
          <li>Todo - Store</li>
        </router-link>
      </ul>
    </div>
    <router-view></router-view>
  </section>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "MainHomeComponent"
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
.types {
  text-align: center;

  ul {
    color: #e64900;
    font-size: 20px;
    display: flex;
    justify-content: center;
    list-style: none;
    li {
      cursor: pointer;
      padding: 10px;
    }
  }
}

a {
  text-decoration: none;
}
.router-link-active {
  color: rgb(0, 174, 255);
}
</style>
