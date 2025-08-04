<script lang="ts" setup>
import { AppListItem } from './components';
import type {
  AppListItemType,
  AppListProps,
} from './types';
import { slotName } from '@/common/helpers';

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
        <slot :name="slotName<AppListItemType['id']>('list-item', item.id)">
          {{ item.label }}
        </slot>
      </AppListItem>
    </slot>
  </Component>
</template>
