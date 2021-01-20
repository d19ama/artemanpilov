<template>
    <router-link
        exact
        to="/"
        class="app-logo"
        @click.native="$bus.$emit('blast')"
    ></router-link>
</template>

<script>
export default {
    name: 'app-logo',
    data () {
        return {}
    }
}
</script>

<style lang="scss">
.app-logo {
    display: block;
    width: 7rem;
    height: 7rem;
    position: relative;
    z-index: 2;
    text-align: center;
    text-decoration: none;
    border-radius: 50%;
    background-size: 70%;
    background-color: $white;
    background-position: 50% 50%;
    background-repeat: no-repeat;
    background-image: url('~images/digama-logo.svg');
    @include box-shadow-main;
    cursor: pointer;

    @include breakpoint(v-mobile) {
        width: 5rem;
        height: 5rem;
    }
}
</style>
