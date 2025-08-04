<script lang="ts" setup>
import { computed } from 'vue';
import {
  AppContentBlock,
  type AppContentBlockProps,
  AppLink,
} from '@/common';

interface Project
  extends AppContentBlockProps {
  link: string;
}

const projects = computed<Project[]>(() => {
  return [
    {
      title: 'fast!cv',
      link: 'http://fastcv.digama.online/',
      image: new URL('@/app/assets/images/logos/fastcv.png', import.meta.url).href,
    },
  ];
});
</script>

<template>
  <AppContentBlock
    v-for="item in projects"
    :key="item.title"
    :image="item.image"
    :title="item.title"
  >
    <template #description>
      <AppLink
        :href="item.link"
        target="_blank"
      >
        {{ item.title }}
      </AppLink>
    </template>
  </AppContentBlock>
</template>
