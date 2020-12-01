<template>
    <section class="app-window">
        <div class="container">
            <transition name="fade">
                <router-view class="content" />
            </transition>
        </div>
    </section>
</template>

<script>
export default {
    name: 'app-window',
    data () {
        return {}
    }
}
</script>

<style lang="scss">
.app-window {
    width: 100vw;
    height: 100vh;
    overflow: auto;
    padding: 9rem 0 6rem;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 90;

    @include breakpoint(tablet) {
        overflow: auto;
    }

    @include breakpoint(v-mobile) {
        padding-left: 0;
        padding-right: 0;
    }

    .fade-enter-active,
    .fade-leave-active {
        transition-property: opacity;
        transition-duration: .3s;
    }

    .fade-enter-active {
        transition-delay: 1s;
    }

    .fade-enter,
    .fade-leave-active {
        opacity: 0;
    }
}
</style>
