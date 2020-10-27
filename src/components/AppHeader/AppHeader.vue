<template>
    <header class="app-header">
        <app-logo />
        <app-navigation
            :active="hovered"
        />
    </header>
</template>

<script>
export default {
    name: 'app-header',
    props: {
        mobile: Boolean
    },
    data () {
        return {
            viewportW: 0,
            hovered: this.mobile
        }
    },
    watch: {
        mobile (newValue) {
            this.hovered = newValue
        }
    }
}
</script>

<style lang="scss">
.app-header {
    display: flex;
    align-items: center;
    flex-flow: row nowrap;
    justify-content: space-between;
    width: 100%;
    padding: 2rem;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    pointer-events: none;

    @include breakpoint(v-mobile) {
        top: 1rem;
        left: 1rem;
    }

    > * {
        pointer-events: auto;
    }
}
</style>
