<script setup lang="ts">
import { AppTransition } from '@/common';
</script>

<template>
  <section class="app-content">
    <div class="app-content__inner">
      <AppTransition>
        <RouterView />
      </AppTransition>
    </div>
  </section>
</template>

<style lang="scss">
.app-content {
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: flex-start;
  width: 100vw;
  height: 100vh;
  overflow: auto;
  padding: 5rem 0;

  &__inner {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: center;
    max-width: 960px;
    width: 100vw;
    height: 100vh;
    padding: 1rem;
    margin: 0 auto;

    @include breakpoint(tablet) {
      align-items: flex-start;
    }
  }
}
</style>
