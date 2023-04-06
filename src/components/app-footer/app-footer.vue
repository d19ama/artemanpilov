<template>
  <footer class="app-footer">
    <div class="app-footer__inner">
      <span class="app-footer__text">&#169; {{ currentYear }} Built with <span class="love">love</span></span>
      <social-block class="app-footer__social"/>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SocialBlock from '@/components/social-block/social-block.vue'

export default defineComponent({
  name: 'app-footer',
  components: {
    SocialBlock
  },
  data () {
    return {
      currentYear: new Date().getFullYear()
    }
  }
})
</script>

<style lang="scss">
.app-footer {
  width: 100%;
  padding: 1rem;
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 100;
  pointer-events: none;

  &:before {
    display: block;
    width: 100%;
    height: 120%;
    position: absolute;
    left: 0;
    bottom: 0;
    background: -moz-linear-gradient(top, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 31%);
    background: -webkit-linear-gradient(top, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 31%);
    background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 31%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#00ffffff", endColorstr="#ffffff", GradientType=0);
    pointer-events: none;

    @include breakpoint(mobile) {
      content: "";
    }
  }

  &__inner {
    display: flex;
    align-items: center;
    flex-flow: row wrap;
    justify-content: space-between;
    position: relative;
  }

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
