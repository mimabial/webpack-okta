// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';

// Import vuetify core framework
// import Vuetify from 'vuetify';
import vuetify from '@/plugins/vuetify'; // path to vuetify export

// Import vuetify css file
// import 'vuetify/dist/vuetify.min.css';

// Import Material design icons
import 'material-design-icons-iconfont/dist/material-design-icons.css';

// Import router, store and App component
import App from './App';
import store from './store';
import router from './router';

// Import Internationalization
import i18n from './i18n';

Vue.config.productionTip = false;

/* eslint-disable no-new */
export default new Vue({
  el: '#app',
  router,
  store,
  i18n,
  vuetify,
  components: { App },
  template: '<App/>',
});
