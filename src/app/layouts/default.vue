<script setup lang="ts">
import {
  AppContent,
  AppFooter,
  AppHeader,
} from './components';
</script>

<template>
  <AppHeader />
  <AppContent />
  <AppFooter />
</template>

<style lang="scss">
* {
  box-sizing: border-box;
}

html {
  font-size: 16px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;

  @include breakpoint(tablet) {
    font-size: 14px;
  }

  @include breakpoint(v-mobile) {
    font-size: 10px;
  }
}

::selection {
  color: $white;
  background: $black;
  text-shadow: none;
}

::-moz-selection {
  color: $white;
  background: $black;
  text-shadow: none;
}

body {
  display: flex;
  flex-direction: column;
  height: 100vh;
  min-width: 20rem;
  width: 100%;
  color: $black;
  font-weight: 400;
  font-family: 'jb', Arial, Helvetica, sans-serif;
  background-color: $white;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
}

a {
  color: $black;
  text-decoration: none;

  &:visited,
  &:focus,
  &:active {
    outline: 0 none;
    text-decoration: none;
  }
}

ul {
  padding: 0;
  margin: 0;
  list-style: none;
}

.container {
  max-width: 77.5rem;
  min-height: 100%;
  padding-left: 2rem;
  padding-right: 2rem;
  margin: auto;

  @include breakpoint(tablet) {
    max-width: none;
    width: 100%;
  }
}

.content {

  p {
    margin: 0;
  }

  p+p {
    margin: 1rem 0 0;
  }

  .row {
    margin-top: -1.875rem;

    &>[class^="col"] {
      margin-top: 1.875rem;
    }
  }
}

.link {
  color: $black;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5rem;
  transition: color .3s;

  &:hover {
    color: $red;
  }
}

.ul-list {

  li {
    padding-left: 2rem;
    position: relative;
    line-height: 1.5;
    font-size: .875rem;

    @include breakpoint(tablet) {
      font-size: .75rem;
    }

    &:before {
      content: '// ';
      position: absolute;
      top: 0;
      left: 0;
      z-index: 1;
      font-weight: 700;
      color: $middle-grey;
    }
  }

  li+li {
    margin: .5rem 0 0;
  }
}
</style>
