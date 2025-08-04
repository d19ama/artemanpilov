import type { RouteRecordRaw } from 'vue-router';
import { RouteNames } from '@/app/router/route-names';

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: RouteNames.Home,
    component: () => import('@/pages/index.vue'),
    meta: {
      title: '// Digama - Main page',
    },
  },
  {
    path: '/about',
    name: RouteNames.About,
    component: () => import('@/pages/about.vue'),
    meta: {
      title: '// Digama - About',
    },
  },
  {
    path: '/pets',
    name: RouteNames.Pets,
    component: () => import('@/pages/pets.vue'),
    meta: {
      title: '// Digama - My pets',
    },
  },
  {
    path: '/experience',
    name: RouteNames.Experience,
    component: () => import('@/pages/experience.vue'),
    meta: {
      title: '// Digama - My experience',
    },
  },
];
