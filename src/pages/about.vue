<script lang="ts" setup>
import {
  AppList,
  AppListItem,
  AppTitle,
} from '@/common/components';
import portrait from '@/app/assets/images/portrait.jpg';

const EMAIL: string = 'blind.resist@gmail.com';
const HASH_TAGS: string[] = [
  'JavaScript',
  'TypeScript',
  'VueJs',
  'VueUse',
  'SCSS',
  'Webpack',
  'Vite',
  'Jest',
  'Vitest',
  'Vuex',
  'Pinia',
  'GitLab',
  'NestJs',
];
const HOBBY: string[] = [
  'Coding',
  'Music',
  'Traveling',
  'Gaming',
  '3DModeling',
  '3DPrinting',
];
</script>

<template>
  <div class="about row">
    <div class="col-default-4 col-v-mobile-12">
      <div class="about__image margin-bottom--s">
        <img
          :src="portrait"
          alt="Its me :)"
        >
      </div>
      <AppList
        no-markers
        class="margin-bottom--s"
      >
        <template #default="{ tag, noMarkers }">
          <AppListItem
            :tag="tag"
            :no-markers="noMarkers"
          >
            <a
              class="link"
              :title="EMAIL"
              :href="`mailto:${EMAIL}`"
            >
              <i class="icon icon-mail2" />
              {{ EMAIL }}
            </a>
          </AppListItem>
          <AppListItem
            :tag="tag"
            :no-markers="noMarkers"
          >
            <a
              class="link"
              target="_blank"
              title="Download CV"
              href="/"
            >
              <i class="icon icon-download" />
              Download CV
            </a>
          </AppListItem>
        </template>
      </AppList>
    </div>
    <div class="col-default-8 col-v-mobile-12">
      <div class="about__info margin-bottom--l">
        <AppTitle
          tag="h1"
          bordered
          class="margin-bottom--xs"
        >
          Anpilov Artem
        </AppTitle>
        <AppTitle
          tag="h3"
          weight="normal"
          class="margin-bottom--xs"
        >
          <i class="icon icon-clock" /> Senior Software Engineer - since 2016
        </AppTitle>
        <AppTitle
          tag="h4"
          weight="normal"
        >
          <i class="icon icon-location" /> Saint-Petersburg, Russia
        </AppTitle>
      </div>
      <div class="about__info margin-bottom--l">
        <AppTitle
          tag="h3"
          bordered
          class="margin-bottom--xs"
        >
          <i class="icon icon-magic-wand" /> Skills
        </AppTitle>
        <div class="about__info-tags">
          <div
            v-for="item in HASH_TAGS"
            :key="item"
            class="about__info-tag"
          >
            <span class="font-color-red">#</span>{{ item.toLowerCase() }}
          </div>
        </div>
      </div>
      <div class="about__info margin-bottom--l">
        <AppTitle
          tag="h3"
          bordered
          class="margin-bottom--xs"
        >
          <i class="icon icon-pacman" /> Hobby
        </AppTitle>
        <div class="about__info-tags">
          <div
            v-for="item in HOBBY"
            :key="item"
            class="about__info-tag"
          >
            <span class="font-color-red">#</span>{{ item.toLowerCase() }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.about {

  &__image {
    overflow: hidden;

    img {
      vertical-align: middle;
      max-width: 100%;
    }
  }

  &__info-tags {
    display: flex;
    flex-flow: row wrap;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 0 8px;
    cursor: default;
  }

  &__info-tag {
    font-size: 1.25rem;
    line-height: 1.5;
    font-weight: 300;
  }
}
</style>
