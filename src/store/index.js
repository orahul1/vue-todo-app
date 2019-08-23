import Vuex from 'vuex';
import Vue from 'vue';
import todo from  './modules/todos';

//Load Vuex

Vue.use(Vuex);

//create store

export default new Vuex.Store({
//Add module
  modules: {
    todo
  }
});