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
  />
</template>

<style lang="scss">
.app-logo {
  display: block;
  width: 7rem;
  height: 7rem;
  position: relative;
  z-index: 2;
  text-align: center;
  text-decoration: none;
  border-radius: 50%;
  background-size: 70%;
  background-color: $white;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-image: url('@/app/assets/images/logo.svg');
  @include box-shadow-main;
  cursor: pointer;

  @include breakpoint(v-mobile) {
    width: 5rem;
    height: 5rem;
  }
}
</style>
