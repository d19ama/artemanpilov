<template>
    <header class="app-header">
        <app-logo />
        <app-navigation />
    </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AppLogo from '@/components/app-logo/app-logo.vue'
import AppNavigation from '@/components/app-navigation/app-navigation.vue'

export default defineComponent({
  name: 'app-header',
  components: {
    AppLogo,
    AppNavigation
  },
  data () {
    return {}
  }
})
</script>

<style lang="scss">
.app-header {
    display: flex;
    align-items: center;
    flex-flow: row nowrap;
    justify-content: space-between;
    width: 100%;
    padding: 1rem;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    pointer-events: none;

    @include breakpoint(v-mobile) {
        padding: 1rem;
        background-color: $white;
    }

    > * {
        pointer-events: auto;
    }
}
</style>
