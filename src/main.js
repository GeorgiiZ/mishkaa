import Vue from 'vue'
import App from './App.vue'


Vue.config.productionTip = false

import router from './router';
import store from './store';
import capitalizeFilter from './shared/filters/capitalize-filter';
import mapUnit from './shared/filters/mapUnit';
import mapParamName from './shared/filters/mapParamName';

Vue.filter('capitalize', capitalizeFilter);
Vue.filter('mapUnit', mapUnit);
Vue.filter('mapParamName', mapParamName);


new Vue({
  render: h => h(App),
  router: router,
  store: store,
}).$mount('#app');
