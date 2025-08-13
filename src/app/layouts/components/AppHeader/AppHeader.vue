<script lang="ts" setup>
import {
  AppLogo,
  AppNavigation,
} from '../';
</script>

<template>
  <header class="app-header">
    <AppLogo />
    <AppNavigation />
  </header>
</template>

<style lang="scss">
.app-header {
  display: flex;
  align-items: center;
  flex-flow: row nowrap;
  justify-content: space-between;
  width: 100%;
  height: 5rem;
  padding: 0 1rem;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  border-bottom: 1px solid $black;
  backdrop-filter: blur(2px);
  pointer-events: none;

  > * {
    pointer-events: auto;
  }
}
</style>
