<script lang="ts" setup>
import type {
  AppLinkEmits,
  AppLinkProps,
  AppLinkSlots,
} from './types';

const props = withDefaults(defineProps<AppLinkProps>(), {
  url: '#',
  text: '',
  hover: 'red',
  prevent: false,
  underline: true,
  target: '_blank',
  theme: 'primary',
});

const emit = defineEmits<AppLinkEmits>();

defineSlots<AppLinkSlots>();

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
      `app-link--${props.theme}`,
      `app-link--hover-${props.hover}`,
      {
        'app-link--underline': props.underline,
      },
    ]"
    :target="props.target"
    @click="onClick"
  >
    <slot>
      {{ props.text }}
    </slot>
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

  &--primary {
    color: $red;
  }

  &--secondary {
    color: $middle-grey;
  }
}
</style>
