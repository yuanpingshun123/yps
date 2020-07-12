import Vue from 'vue'
import VueRouter from 'vue-router'
// 解决路由访问重复时报错问题：
const originalPush = VueRouter.prototype.push
const userType = sessionStorage.getItem("userType");
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
Vue.use(VueRouter)
const routes = [

]
export default new VueRouter({
  routes: [
    {
      path: '/',
      name: '首页',
      component: resolve => require(['../views/index.vue'], resolve),
      iconCls: 'el-icon-tickets',
      meta: {
        requireAuth: false,
        index: '/index',
      },
      routes,
      children: [
    
      ]
    }
  ]
})
