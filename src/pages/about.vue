<script lang="ts" setup>
import {
  AppList,
  AppListItem,
  AppTitle,
} from '@/common/components';
import portrait from '@/app/assets/images/portrait.jpg';
import { AppPage } from '@/app/layouts';

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
  <AppPage
    title="Briefly about me"
    class="about-page"
  >
    <template #content>
      <div class="row">
        <div class="col-default-4 col-v-mobile-12">
          <div class="about-page__image-wrapper margin-bottom--s">
            <img
              :src="portrait"
              alt="Its me :)"
              class="about-page__image"
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
          <div class="about-page__info margin-bottom--l">
            <AppTitle
              tag="h2"
              bordered
              class="margin-bottom--xs"
              text="Anpilov Artem"
            />
            <AppTitle
              tag="h4"
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
          <div class="about-page__info margin-bottom--l">
            <AppTitle
              tag="h3"
              bordered
              class="margin-bottom--xs"
            >
              <i class="icon icon-magic-wand" /> Skills
            </AppTitle>
            <div class="about-page__info-tags">
              <div
                v-for="item in HASH_TAGS"
                :key="item"
                class="about-page__info-tag"
              >
                <span class="text-color-red">#</span>{{ item.toLowerCase() }}
              </div>
            </div>
          </div>
          <div class="about-page__info margin-bottom--l">
            <AppTitle
              tag="h3"
              bordered
              class="margin-bottom--xs"
            >
              <i class="icon icon-pacman" /> Hobby
            </AppTitle>
            <div class="about-page__info-tags">
              <div
                v-for="item in HOBBY"
                :key="item"
                class="about-page__info-tag"
              >
                <span class="text-color-red">#</span>{{ item.toLowerCase() }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </AppPage>
</template>

<style lang="scss">
.about-page {

  &__image-wrapper {
    overflow: hidden;
  }

  &__image {
    vertical-align: middle;
    max-width: 100%;
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
