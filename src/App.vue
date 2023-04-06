<template>
  <app-header/>
  <app-window/>
  <app-footer/>
  <background-svg/>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AppHeader from '@/components/app-header/app-header.vue'
import AppFooter from '@/components/app-footer/app-footer.vue'
import AppWindow from '@/components/app-window/app-window.vue'
import BackgroundSvg from '@/components/background-svg/background-svg.vue'

export default defineComponent({
  components: {
    AppHeader,
    AppFooter,
    AppWindow,
    BackgroundSvg
  }
})
</script>
