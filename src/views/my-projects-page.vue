<template>
  <portfolio-block
    :data="data"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useStore } from 'vuex'
import PortfolioBlock from '@/components/portfolio-block/portfolio-block.vue'

export default defineComponent({
  name: 'my-projects',
  components: {
    PortfolioBlock
  },
  setup () {
    const { state } = useStore()
    const data = state.pages.projects

    return {
      data
    }
  }
})
</script>
