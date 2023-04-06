<template>
  <div class="key-indicator">
    <span class="key-indicator__name">{{ name }}</span>
    <span
      v-if="value"
      class="key-indicator__value"
    >{{ value }}</span>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'key-indicator',
  props: {
    name: {
      type: String,
      default: ''
    },
    value: {
      type: String,
      default: ''
    }
  }
})
</script>

<style lang="scss">
.key-indicator {
  padding: 1.5rem;
  background-color: $lite-grey;

  &__name {
    display: block;
    font-size: 1rem;
    font-weight: 700;
    color: $dark-grey;
  }

  &__value {
    display: block;
    margin-top: 1.25rem;
    font-size: .875rem;
    color: rgba($dark-grey, .8);
  }
}
</style>
