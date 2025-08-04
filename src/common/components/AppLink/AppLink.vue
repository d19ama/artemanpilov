<script lang="ts" setup>
import type {
  AppLinkEmits,
  AppLinkProps,
} from './types';

const props = withDefaults(defineProps<AppLinkProps>(), {
  url: '#',
  hover: 'red',
  prevent: false,
  underline: true,
  target: '_blank',
});

const emit = defineEmits<AppLinkEmits>();

function onClick(event: Event): void {
  if (props.prevent) {
    event.preventDefault();
  }

  emit('click', event);
}
</script>

<template>
  <a
    :href="props.url"
    class="app-link"
    :class="[
      `app-link--hover-${props.hover}`,
      {
        'app-link--underline': props.underline,
      },
    ]"
    :target="props.target"
    @click="onClick"
  >
    <slot />
  </a>
</template>

<style lang="scss">
.app-link {
  color: $black;
  transition: color $transition;

  &:visited,
  &:focus,
  &:active {
    outline: 0 none;
  }

  &--hover-red {

    &:hover {
      color: $red;
    }
  }

  &--underline {
    text-decoration: underline;
  }
}
</style>
