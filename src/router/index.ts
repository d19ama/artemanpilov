import {
  createRouter,
  createWebHistory,
  RouteRecordRaw
} from 'vue-router'
import MainPage from '../views/main-page.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'main',
    component: MainPage
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/about-page.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
