<template>
  <nav class="app-navigation">
    <ul class="app-navigation__list">
      <li
        :key="item.id"
        :data-index="app"
        class="app-navigation__item"
        v-for="item in data"
      >
        <router-link
          exact
          :to="item.link"
          class="app-navigation__link"
        >
          <span>{{ item.name }}</span>
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'app-navigation',
  setup () {
    const { state } = useStore()
    const data = state.navigation

    return {
      data
    }
  }
})
</script>

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

    &-inner {
      width: 2.5rem;
      height: 2rem;
      position: relative;
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
      transition: background-color .25s ease-in-out,
      bottom .25s .25s ease-in-out,
      width .25s .25s ease-in-out,
      transform .25s ease-in-out,
      top .25s .25s ease-in-out,
      opacity .25s ease-in-out;

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

  &__list {
    display: flex;
    flex-flow: row-reverse nowrap;
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
    transition: opacity .1s;

    &:after {
      content: "";
      display: block;
      width: 100%;
      height: 2px;
      opacity: 0;
      position: absolute;
      left: 0;
      top: 70%;
      background-color: $red;
      transition: top .3s, opacity .3s;
    }

    &:hover,
    &.is-current {

      &:after {
        opacity: 1;
        top: 100%;
      }
    }
  }
}
</style>
