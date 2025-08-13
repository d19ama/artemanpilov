<script lang="ts" setup>
import { AppSocial } from '../';

const currentYear = new Date().getFullYear();
</script>

<template>
  <footer class="app-footer">
    <span class="app-footer__text">&#169; {{ currentYear }} Created with <span class="love">love</span></span>
    <AppSocial class="app-footer__social" />
  </footer>
</template>

<style lang="scss">
.app-footer {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 5rem;
  padding: 0 1rem;
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 100;
  border-top: 1px solid $black;
  backdrop-filter: blur(2px);
  pointer-events: none;

  &__text {
    font-size: .875rem;
    pointer-events: auto;
    user-select: none;
    cursor: default;

    .love {
      transition: color .3s;
    }

    &:hover {

      .love {
        color: $red;
      }
    }
  }

  &__social {
    pointer-events: auto;
  }
}
</style>
