<script lang="ts" setup>
import { AppListItem } from './components';
import type { AppListProps } from './types';

const props = withDefaults(defineProps<AppListProps>(), {
  tag: 'ul',
  items: () => [],
  noMarkers: false,
});
</script>

<template>
  <Component
    :is="tag"
    class="list"
  >
    <slot
      :tag="props.tag"
      :no-markers="props.noMarkers"
    >
      <AppListItem
        v-for="item in items"
        :key="item.id"
        :tag="props.tag"
        :no-markers="props.noMarkers"
      >
        {{ item.label }}
      </AppListItem>
    </slot>
  </Component>
</template>
