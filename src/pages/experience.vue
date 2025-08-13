<script setup lang="ts">
import {
  AppContentBlock,
  type AppContentBlockProps,
  AppLink,
} from '@/common';
import { AppPage } from '@/app/layouts';

interface Experience
  extends AppContentBlockProps {
  link: string;
}

const experience: Experience[] = [
  {
    title: 'Eyetronic',
    link: 'https://art.su/',
    image: new URL('@/app/assets/images/experience/eyetronic-logo.svg', import.meta.url).href,
    description: '2014 - 2018',
  },
  {
    title: 'Zebra',
    link: 'https://zebra-group.ru/',
    image: new URL('@/app/assets/images/experience/zebra-logo.svg', import.meta.url).href,
    description: '2018 - 2021',
  },
  {
    title: 'Delivery Club',
    link: 'https://market-delivery.yandex.ru/',
    image: new URL('@/app/assets/images/experience/delivery-club-logo.svg', import.meta.url).href,
    description: '2021 - 2023',
  },
  {
    title: 'Sportmaster Lab',
    link: 'https://xn----8sbd2bd3a.xn--p1ai/',
    image: new URL('@/app/assets/images/experience/sm-lab-logo.svg', import.meta.url).href,
    description: '2023 - present day',
  },
];
</script>

<template>
  <AppPage class="experience-page">
    <template #content>
      <div class="row">
        <div
          v-for="item in experience"
          :key="item.title"
          class="col-default-6 col-tablet-12"
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
                text="Read about"
              />
            </template>
          </AppContentBlock>
        </div>
      </div>
    </template>
  </AppPage>
</template>
