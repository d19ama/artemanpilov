<template>
    <footer class="app-footer">
        <span class="app-footer__text">&#169; 2020 Builded with love</span>
        <social />
    </footer>
</template>

<script>
export default {
    name: 'app-footer',
    data () {
        return {}
    }
}
</script>

<style lang="scss">
.app-footer {
    display: flex;
    align-items: center;
    flex-flow: row nowrap;
    justify-content: space-between;
    width: 100%;
    padding: 2rem;
    position: fixed;
    left: 0;
    bottom: 0;
    z-index: 100;
    pointer-events: none;

    > * {
        pointer-events: auto;
    }

    &__text {
        font-size: .875rem;
    }
}
</style>
