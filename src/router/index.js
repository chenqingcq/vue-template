import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      redirect: "/login"
    },
    {
      path: '/login',
      name: 'Login',
      component: resolve => require(['@/components/Login'], resolve)
    },
    {
      path: '/*',
      name: 'NotFound',
      component: resolve => require(['@/components/NotFound'], resolve)
    },
  ]
})
router.beforeEach((to, from, next) => {
  next()
})
export default router;
