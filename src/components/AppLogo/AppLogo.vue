<template>
    <component
        :is="tag"
        class="app-logo"
        :href="tag === 'a' ? '/' : false"
    ></component>
</template>

<script>
export default {
    name: 'app-logo',
    data () {
        return {}
    },
    computed: {
        tag () {
            return 'a'
        }
    }
}
</script>

<style lang="scss">
.app-logo {
    display: block;
    width: 5.5rem;
    height: 5.5rem;
    position: relative;
    z-index: 2;
    text-align: center;
    text-decoration: none;
    border-radius: 50%;
    background-size: 44%;
    background-color: $white;
    background-position: 50% 50%;
    background-repeat: no-repeat;
    background-image: url('~images/lnk-logo.svg');
    @include box-shadow-main;
    cursor: pointer;

    @include breakpoint(v-mobile) {
        width: 4rem;
        height: 4rem;
    }
}
</style>
