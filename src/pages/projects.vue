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
    title: 'Simple!CV',
    link: 'http://simplecv.ru/',
    image: new URL('@/app/assets/images/pets/simplecv.png', import.meta.url).href,
    description: 'Simple!CV — это твой быстрый и лёгкий способ создать идеальное резюме без лишних усилий.',
  },
];
</script>

<template>
  <AppPage>
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
                text="Смотреть"
              />
            </template>
          </AppContentBlock>
        </div>
      </div>
    </template>
  </AppPage>
</template>
