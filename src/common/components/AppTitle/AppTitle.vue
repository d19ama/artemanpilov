<script lang="ts" setup>
interface Props {
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  weight?: string;
  comment?: boolean;
  bordered?: boolean;
  uppercase?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  tag: 'h1',
  weight: 'bold',
  comment: false,
  bordered: false,
  uppercase: false,
});
</script>

<template>
  <component
    :is="tag"
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
    <slot />
  </component>
</template>

<style lang="scss">
.app-title {
  line-height: 1.25;
  color: $dark-grey;

  &--comment {
    padding-left: 6rem;
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
    font-size: 3rem;
  }

  &--h2 {
    font-size: 2rem;
  }

  &--h3 {
    font-size: 1.5rem;
  }

  &--h4 {
    font-size: 1.25rem;
  }

  &--h5 {
    font-size: 1.125rem;
  }

  &--h6 {
    font-size: 1rem;
  }
}
</style>
