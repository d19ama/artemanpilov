<script lang="ts" setup>
import {
  AppContentBlock,
  type AppContentBlockProps,
  AppLink,
} from '@/common';
import { AppPage } from '@/app/layouts';

interface Project
  extends AppContentBlockProps {
  link: string;
}

const projects: Project[] = [
  {
    title: 'fast!cv',
    link: 'http://fastcv.digama.online/',
    image: new URL('@/app/assets/images/pets/fastcv.png', import.meta.url).href,
    description: 'Fast!CV is a tool for creating a simple CV containing only the most important information for a potential employer!',
  },
];
</script>

<template>
  <AppPage title="My pet projects">
    <template #content>
      <div class="row">
        <div
          v-for="item in projects"
          :key="item.title"
          class="col-default-12"
        >
          <AppContentBlock
            :image="item.image"
            :title="item.title"
          >
            <template #description>
              <p>
                {{ item.description }}
              </p>
              <AppLink
                :href="item.link"
                target="_blank"
                text="Explore!"
              />
            </template>
          </AppContentBlock>
        </div>
      </div>
    </template>
  </AppPage>
</template>
