<script lang="ts" setup>
import { useRoute } from 'vue-router';

const route = useRoute();
</script>

<template>
  <div class="app-container">
    <Component
      :is="route.meta.layout"
    />
  </div>
</template>

<style lang="scss">
.app-container {
  display: flex;
  flex-direction: column;
  flex: 1 1 100%;

  @include breakpoint(v-mobile) {
    padding-top: 6rem;
  }
}
</style>
