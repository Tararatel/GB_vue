'use strict';

import Vue from 'vue';
import App from './App.vue';
// import Paginate from 'vuejs-paginate';
import 'materialize-css/dist/css/materialize.min.css';
import store from './store';
import router from './router';

// Vue.component('paginate', Paginate);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app');
