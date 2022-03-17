import Vue from 'vue'
import App from './App.vue'
import "./assets/iconfont"
// 完整引入
import zyUi from '../packages'
import message from '../packages/zyMessage'
// 按需引入
// import { zyLink } from '../packages';
// cdn引入
// import { zyLink } from '../lib/index.umd.min.js';
// import '../lib/index.css'
Vue.config.productionTip = false
Vue.use(zyUi)
Vue.prototype.$message = message
// Vue.use(zyLink)
const app = new Vue({
  render: h => h(App),
})
app.$mount('#app')
