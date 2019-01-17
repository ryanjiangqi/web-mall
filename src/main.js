import Vue from 'vue';
import App from './App';
import { router } from './router';
import axios from 'axios';
Vue.prototype.$axios = axios;
Vue.prototype.appUrl='http://120.77.146.13:8081/static/uploadfile/';
new Vue({
  router,
  el: '#app',
  render: h => h(App)
});
