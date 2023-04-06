<template>
  <div class="main">
    <app-title
      comment
      class="main__title"
    >Hello!<br/>My name is Artem!<br/>I am <span>Frontend</span> developer!
    </app-title>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AppTitle from '@/components/app-title/app-title.vue'

export default defineComponent({
  name: 'main-page',
  components: {
    AppTitle
  }
})
</script>

<style lang="scss">
.main {
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: flex-start;
  transform: translate(0, calc(50vh - 100%));

  &__title.app-title {
    font-size: 4rem;

    @include breakpoint(v-mobile) {
      font-size: 3rem;
    }

    span {
      color: $white;
      background-color: $red;
    }
  }
}
</style>
