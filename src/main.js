import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "./assets/css/common.css"
import axios from "axios"
import Echarts from "./plugins/echarts";
// 引入中国地图
import "../node_modules/echarts/map/js/china"
// 引入世界地图
import "../node_modules/echarts/map/js/world"
// 引入中国各省份地图
import "./plugins/province"
// 引入vant
import "./plugins/vant"

Vue.config.productionTip = false
Vue.use(Echarts)
// 配置axios的Vue原型
Vue.prototype.$axios = axios
// 网络请求根路径
// axios.defaults.baseURL = 'http://api.tianapi.com'
// 跨域问题
axios.defaults.timeout = 500000;
// axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';
// axios.defaults.baseURL = "/api";


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
