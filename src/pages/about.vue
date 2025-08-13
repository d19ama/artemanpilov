<script lang="ts" setup>
import { computed } from 'vue';
import { AppTitle } from '@/common/components';
import portrait from '@/app/assets/images/portrait.jpg';
import { AppPage } from '@/app/layouts';

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
  'Кодинг',
  'Музыка',
  'Путешествия',
  'Гейминг',
  '3DМоделирование',
  '3DПечать',
];

const age = computed<number>(() => {
  return new Date().getFullYear() - 1987;
});
</script>

<template>
  <AppPage class="about-page">
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
        </div>
        <div class="col-default-8 col-v-mobile-12">
          <div class="about-page__info margin-bottom--l">
            <AppTitle
              tag="h2"
              bordered
              class="margin-bottom--xs"
            >
              Меня зовут <span class="text-color-red">Артём Анпилов</span>
            </AppTitle>
            <AppTitle
              tag="h4"
              weight="normal"
              class="margin-bottom--xs"
            >
              <i class="icon icon-clock" /> Мне {{ age }} лет
            </AppTitle>
            <AppTitle
              tag="h4"
              weight="normal"
              class="margin-bottom--xs"
            >
              <i class="icon icon-user-tie" /> Senior Frontend Developer
            </AppTitle>
            <AppTitle
              tag="h4"
              weight="normal"
            >
              <i class="icon icon-location" /> Санкт-Петербург, Россия
            </AppTitle>
          </div>
          <div class="about-page__info margin-bottom--l">
            <AppTitle
              tag="h3"
              bordered
              class="margin-bottom--xs"
            >
              <i class="icon icon-magic-wand" /> Навыки
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
              <i class="icon icon-pacman" /> Хобби
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
