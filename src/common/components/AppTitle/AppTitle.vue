<script lang="ts" setup>
import type {
  AppTitleProps,
  AppTitleSlots,
} from './types';

const props = withDefaults(defineProps<AppTitleProps>(), {
  text: '',
  tag: 'h1',
  weight: 'bold',
  comment: false,
  bordered: false,
  uppercase: false,
});

defineSlots<AppTitleSlots>();
</script>

<template>
  <component
    :is="props.tag"
    class="app-title"
    :class="[
      `app-title--${props.tag}`,
      `app-title--${props.weight}`,
      {
        'app-title--comment': props.comment,
        'app-title--bordered': props.bordered,
        'app-title--uppercase': props.uppercase,
      },
    ]"
  >
    <slot>
      {{ props.text }}
    </slot>
  </component>
</template>

<style lang="scss">
.app-title {
  line-height: 1.25;
  color: $dark-grey;
  user-select: none;

  &--comment {
    padding-left: 5rem;
    position: relative;

    &:before {
      content: '//';
      position: absolute;
      top: 0;
      left: 0;
      z-index: 1;
      color: $middle-grey;
    }
  }

  &--bordered {
    padding-bottom: 1rem;
    border-bottom: 3px solid $lite-grey;
  }

  &--uppercase {
    text-transform: uppercase;
  }

  &--normal {
    font-weight: 400;
  }

  &--bold {
    font-weight: 700;
  }

  &--h1 {
    font-size: 2.5rem;
  }

  &--h2 {
    font-size: 2rem;
  }

  &--h3 {
    font-size: 1.75rem;
  }

  &--h4 {
    font-size: 1.5rem;
  }

  &--h5 {
    font-size: 1.25rem;
  }

  &--h6 {
    font-size: 1rem;
  }
}
</style>
