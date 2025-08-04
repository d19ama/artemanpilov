<script setup lang="ts">
interface Slots {
  default: [];
}

defineSlots<Slots>();
</script>

<template>
  <slot v-if="$slots.default" />
  <template v-else>
    <span class="text-highlighter">No data!</span>
  </template>
</template>
