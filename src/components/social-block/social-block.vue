<template>
  <div class="social-block">
    <a
      target="_blank"
      :key="item.name"
      :href="item.link"
      :title="item.name"
      v-for="item in data"
      :class="`social-block__item icon icon-${item.name}`"
    ></a>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'social-block',
  setup () {
    const { state } = useStore()
    const data = state.social

    return {
      data
    }
  }
})
</script>

<style lang="scss">
.social-block {
  display: flex;
  align-items: center;
  flex-flow: row nowrap;

  &__item {
    display: block;
    width: 1.5rem;
    height: 1.5rem;
    font-size: 1.25rem;
    text-align: center;
    background-size: 100%;
    background-position: center;
    background-repeat: no-repeat;
    transition: color .3s ease-in-out;

    & + & {
      margin-left: 1rem;
    }

    &:hover {
      color: $red;
    }
  }
}
</style>
