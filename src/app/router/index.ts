import {
  createRouter,
  createWebHistory,
} from 'vue-router';
import type { ComponentInstance } from 'vue';
import { Default } from '../layouts';
import { routes } from './routes';

declare module 'vue-router' {
  interface RouteMeta {
    layout?: ComponentInstance<any>;
  }
}

export const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to) => {
  if (!to.meta.layout) {
    to.meta.layout = Default;
  }
});
