<template>
  <div
    class="text-block"
    :class="classObject"
  >
    <template v-if="$slots.default">
      <slot/>
    </template>
    <template v-else>
      <p
        v-html="p"
        :key="p"
        v-for="p in text"
      ></p>
    </template>
  </div>
</template>

<script lang="ts">
import {
  computed,
  defineComponent
} from 'vue'

export default defineComponent({
  name: 'text-block',
  props: {
    text: {
      type: Array,
      default: () => []
    },
    bold: Boolean,
    italic: Boolean
  },
  setup (props) {
    const classObject = computed(() => ({
      'text-block--bold': props.bold,
      'text-block--italic': props.italic
    }))

    return {
      classObject
    }
  }
})
</script>

<style lang="scss">
.text-block {
  padding: 1.5rem 2rem;
  font-size: 1rem;
  line-height: 1.5rem;
  background-color: $lite-grey;
  box-shadow: .5rem .5rem rgba($dark-grey, .2);

  &--bold {
    font-weight: 700;
  }

  &--italic {
    font-style: italic;
  }
}
</style>
