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
  },
  {
    path: '/my-projects',
    name: 'my-projects',
    component: () => import('../views/my-projects-page.vue')
  },
  {
    path: '/work-projects',
    name: 'work-projects',
    component: () => import('../views/work-projects-page.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
