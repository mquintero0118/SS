import { createRouter, createWebHistory } from 'vue-router'

const routes = [

  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/',
    name: '',
    component: () => import('../components/Login')
  },
  {
    path: '/Register',
    name: 'Register',
    component: () => import('../components/Register')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
