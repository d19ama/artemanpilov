<script lang="ts" setup>
import type { RouteLocationRaw } from 'vue-router';
import { RouteNames } from '@/app/router/route-names';

const goTo: RouteLocationRaw = {
  name: RouteNames.Home,
};
</script>

<template>
  <RouterLink
    :to="goTo"
    class="app-logo"
  >
    artem<br>anpilov
  </RouterLink>
</template>

<style lang="scss">
.app-logo {
  display: block;
  font-size: 1.5rem;
  line-height: 1;
  text-decoration: none;
  user-select: none;
}
</style>
