import Vue from 'vue'
import App from './App.vue'


Vue.config.productionTip = false

import router from './router';
import store from './store';
import capitalizeFilter from './shared/filters/capitalize-filter';

Vue.filter('capitalize', capitalizeFilter);

new Vue({
  render: h => h(App),
  router: router,
  store: store,
}).$mount('#app');
