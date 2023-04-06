<template>
  <component
    :is="tag"
    :class="classObject"
  >
    <slot/>
  </component>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'app-title',
  props: {
    tag: {
      type: String,
      default: 'h1'
    },
    text: {
      type: String,
      default: ''
    },
    weight: {
      type: String,
      default: 'bold'
    },
    comment: Boolean,
    bordered: Boolean,
    uppercase: Boolean
  },
  computed: {
    classObject () {
      return [
        'app-title',
        `app-title--${this.tag}`,
        `app-title--${this.weight}`,
        {
          'app-title--comment': this.comment,
          'app-title--bordered': this.bordered,
          'app-title--uppercase': this.uppercase
        }
      ]
    }
  }
})
</script>

<style lang="scss">
.app-title {
  line-height: 1.25;
  color: $dark-grey;

  &--comment {
    padding-left: 6rem;
    position: relative;

    &:before {
      content: "//";
      position: absolute;
      top: 0;
      left: 0;
      z-index: 1;
      color: $middle-grey;
    }
  }

  &--bordered {
    padding-bottom: 1rem;
    border-bottom: 3px solid $lite-grey;
  }

  &--uppercase {
    text-transform: uppercase;
  }

  &--normal {
    font-weight: 400;
  }

  &--bold {
    font-weight: 700;
  }

  &--h1 {
    font-size: 3rem;
  }

  &--h2 {
    font-size: 2rem;
  }

  &--h3 {
    font-size: 1.5rem;
  }

  &--h4 {
    font-size: 1.25rem;
  }

  &--h5 {
    font-size: 1.125rem;
  }

  &--h6 {
    font-size: 1rem;
  }
}
</style>
