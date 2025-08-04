<script lang="ts" setup>
import {
  onMounted,
  ref,
} from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const isLoaded = ref<boolean>(false);

onMounted(() => {
  isLoaded.value = true;
});
</script>

<template>
  <div
    class="app-container"
    :class="{
      'app-container--loaded': isLoaded,
    }"
  >
    <Component :is="route.meta.layout" />
  </div>
</template>

<style lang="scss">
.app-container {
  display: flex;
  flex-direction: column;
  flex: 1 1 100%;
  opacity: 0;
  transition: opacity .5s 1s ease;

  @include breakpoint(v-mobile) {
    padding-top: 6rem;
  }

  &--loaded {
    opacity: 1;
  }
}
</style>
