<template>
  <div>
    <div class="add">
      <form>
       <input type="text" v-model="title" placeholder="Add todo">
       <input type="submit" value="Submit">
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "AddTodoComponent"
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