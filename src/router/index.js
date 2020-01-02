import Vue from 'vue'
import VueRouter from 'vue-router'
//引入所有的路由
import routes from './routes'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

// 设置路由拦截器，当路由跳转前执行
router.beforeEach((to, from, next) => {
  // to 和 from 都是 路由信息对象
  console.log('我要跳转到: ', to)
  next()
})

export default router
