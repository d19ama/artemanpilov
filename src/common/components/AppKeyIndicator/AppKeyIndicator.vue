<script lang="ts" setup>
interface Props {
  name: string;
  value?: string;
}

const props = defineProps<Props>();
</script>

<template>
  <div class="key-indicator">
    <span class="key-indicator__name">{{ props.name }}</span>
    <span
      v-if="props.value"
      class="key-indicator__value"
    >{{ value }}</span>
  </div>
</template>

<style lang="scss">
.key-indicator {
  padding: 1.5rem;
  background-color: $lite-grey;

  &__name {
    display: block;
    font-size: 1rem;
    font-weight: 700;
    color: $dark-grey;
  }

  &__value {
    display: block;
    margin-top: 1.25rem;
    font-size: .875rem;
    color: rgba($dark-grey, .8);
  }
}
</style>
