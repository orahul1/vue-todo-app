import Vue from 'vue';
import AppView from './components/App.vue';
import store from './store';


/* Gobal styles */

import '../static/css/Style.scss';

/* route */

import routes from './routes';
import VueRouter from 'vue-router';


// Register global components and plugins

Vue.use(VueRouter)

//routing login

var router = new VueRouter({
  routes: routes,
  mode: 'history',
  linkExactActiveClass: 'active',
  scrollBehavior: function(to, from, savedPosition) {
    return savedPosition || { x: 0, y: 0 }
  }
})

Vue.config.productionTip = false




new Vue({
  store,
  render: h => h(AppView),
  router: router
}).$mount('#app')
