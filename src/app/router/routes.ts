import type { RouteRecordRaw } from 'vue-router';
import { RouteNames } from '@/app/router/route-names';

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: RouteNames.Home,
    component: () => import('@/pages/index.vue'),
    meta: {
      title: '// Артём Анпилов - Главная страница',
    },
  },
  {
    path: '/about',
    name: RouteNames.About,
    component: () => import('@/pages/about.vue'),
    meta: {
      title: '// Артём Анпилов - Кратко',
    },
  },
  {
    path: '/pets',
    name: RouteNames.PetProjects,
    component: () => import('@/pages/projects.vue'),
    meta: {
      title: '// Артём Анпилов - Проекты',
    },
  },
  {
    path: '/experience',
    name: RouteNames.Experience,
    component: () => import('@/pages/experience.vue'),
    meta: {
      title: '// Артём Анпилов - Опыт',
    },
  },
  // {
  //   path: '/creation',
  //   name: RouteNames.Creation,
  //   component: () => import('@/pages/creation.vue'),
  //   meta: {
  //     title: '// Артём Анпилов - Творчество',
  //   },
  // },
];
