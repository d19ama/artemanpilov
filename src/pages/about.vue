<script lang="ts" setup>
import {
  AppKeyIndicator,
  AppList,
  AppListItem,
  AppTitle,
} from '@/common/components';
import portrait from '@/app/assets/images/portrait.jpg';

const EMAIL = 'blind.resist@gmail.com';
const HOBBY = [
  {
    name: 'Coding',
  },
  {
    name: 'Music',
  },
  {
    name: 'Traveling',
  },
  {
    name: 'Gaming',
  },
];
const SKILLS = [
  {
    name: 'JavaScript',
    experience: '5 years',
  },
  {
    name: 'VueJs',
    experience: '4 years',
  },
  {
    name: 'TypeScript',
    experience: '1.5 years',
  },
  {
    name: 'Webpack',
    experience: '3 years',
  },
  {
    name: 'Sass',
    experience: '4 years',
  },
  {
    name: 'Git',
    experience: '6 years',
  },
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
          <i class="icon icon-clock" /> Frontend dev since 2016
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
        <div class="row">
          <div
            v-for="key in SKILLS"
            :key="key.name"
            class="col-default-3 col-tablet-4 col-mobile-6"
          >
            <AppKeyIndicator
              :name="key.name"
              :value="key.experience"
            />
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
        <div class="row">
          <div
            v-for="key in HOBBY"
            :key="key.name"
            class="col-default-3 col-tablet-4 col-mobile-6"
          >
            <AppKeyIndicator
              :name="key.name"
            />
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
}
</style>
