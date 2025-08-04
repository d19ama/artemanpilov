<script lang="ts" setup>
import type { RouteLocationRaw } from 'vue-router';
import { navigation } from '@/app/router/navigation';
import type { RouteNames } from '@/app/router/route-names';

function goTo(name: RouteNames): RouteLocationRaw {
  return {
    name,
  };
}
</script>

<template>
  <nav class="app-navigation">
    <ul class="app-navigation__list">
      <li
        v-for="item in navigation"
        :key="item.routeName"
        class="app-navigation__item"
      >
        <RouterLink
          :to="goTo(item.routeName)"
          class="app-navigation__link"
          active-class="app-navigation__link--active"
        >
          {{ item.label }}
        </RouterLink>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss">
.app-navigation {
  $dash-height: .25rem;

  position: relative;
  z-index: 2;

  &__button {
    display: flex;
    align-items: center;
    flex-flow: row nowrap;
    justify-content: center;
    width: 5rem;
    height: 5rem;
    position: relative;
    z-index: 2;
    text-align: center;
    text-decoration: none;
    border-radius: 50%;
    background-size: 44%;
    background-color: $white;
    background-position: center;
    background-repeat: no-repeat;
    cursor: pointer;

    &:hover {

      span {
        background-color: $red;
      }
    }

    span {
      display: block;
      width: 100%;
      height: $dash-height;
      opacity: 1;
      margin: auto;
      position: absolute;
      left: 0;
      border-radius: 9px;
      background-color: $black;
      transform: rotate(0deg);
      transition:
        background-color $transition,
        bottom .3s $transition,
        width .3s $transition,
        transform $transition,
        top .3s $transition,
        opacity $transition;

      &:nth-child(1) {
        top: 0;
        transform-origin: center;
      }

      &:nth-child(2) {
        width: 100%;
        opacity: 1;
        top: 0;
        bottom: 0;
        transform-origin: center;
      }

      &:nth-child(3) {
        bottom: 0;
        transform-origin: center;
      }
    }
  }

  &__button-inner {
    width: 2.5rem;
    height: 2rem;
    position: relative;
  }

  &__list {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    margin: auto;

    @include breakpoint(v-mobile) {
      right: 6rem;
    }
  }

  &__item {
    padding: 0 .75rem;
    user-select: none;

    @include breakpoint(v-mobile) {
      padding: 0 .5rem;
    }
  }

  &__link {
    display: block;
    position: relative;
    color: $black;
    font-weight: 300;
    font-size: 1rem;
    line-height: 1.5rem;
    white-space: nowrap;
    text-shadow: 1px 1px 1px $white;
    transition: opacity $transition;

    &:after {
      content: '';
      display: block;
      width: 100%;
      height: 2px;
      opacity: 0;
      position: absolute;
      left: 0;
      top: 70%;
      background-color: $red;
      transition: top $transition, opacity $transition;
    }

    &:hover,
    &--active {

      &:after {
        opacity: 1;
        top: 100%;
      }
    }
  }
}
</style>
