// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)
Vue.prototype.axios = axios
// 引入element UI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/css/index.css'

//富文本编辑器
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
import "babel-polyfill";
import App from './App';
// 引入路由
import router from './router';
import QrcodeVue from 'qrcode.vue'

// 引入状态管理
import store from './vuex/store';
// 引入icon
import VueClipboard from 'vue-clipboard2'
Vue.use(VueClipboard)
// 过滤器
import * as custom from './utils/util'
Vue.config.productionTip = false;
Vue.use(QrcodeVue)
// 使用element UI
Vue.use(ElementUI);
/*import vcolorpicker from 'vcolorpicker'
Vue.use(vcolorpicker)*/

import VueQuillEditor from 'vue-quill-editor'
Vue.use(VueQuillEditor)
Object.keys(custom).forEach(key => {
  Vue.filter(key, custom[key])
})

router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) { // 判断该路由是否需要登录权限
    let userId = sessionStorage.getItem('userId') ? sessionStorage.getItem('userId') : false
    if (userId) { // 通过vuex state获取当前的token是否存在
      console.info("userId=" + userId);
      next()
    } else {
      console.info("进入登陆")
      next({
        path: '/login',
        query: {redirect: to.fullPath} // 将跳转的路由path作为参数，登录成功后跳转到该路由
      })
    }
  } else {
    next()
  }
})
const $vue=new Vue({
  router,
  store,
  render: h => h(App),
  data: {
    Bus: new Vue()
  }
}).$mount('#app')
export default  $vue
