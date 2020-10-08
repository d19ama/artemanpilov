<template>
    <nav
        class="app-navigation"
        :class="{
            'is-active': active
        }"
    >
        <router-link
            exact
            :key="item.id"
            :to="item.link"
            v-for="item in data"
            class="app-navigation__link"
            @click.native="$root.$bus.$emit('window:open')"
        >
            <span>{{ item.name }}</span>
        </router-link>
    </nav>
</template>

<script>
export default {
    name: 'app-navigation',
    props: {
        active: Boolean
    },
    data() {
        return {
            data: this.$root.app.components.navigation
        }
    }
}
</script>

<style lang="scss">
.app-navigation {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 0;
    text-align: center;
    white-space: nowrap;
    background-color: $white;
    box-shadow: inset 2px 0 0 0 transparent;
    transition: width .3s;

    &__link {
        opacity: 0;
        padding: 0 .75rem;
        color: $black;
        font-size: 1rem;
        font-weight: 700;
        line-height: 3rem;
        transition: opacity .1s;

        @include breakpoint(v-mobile) {
            font-size: .875rem;
        }

        span {
            border-bottom: 1px solid rgba($black, .5);
            transition: border-bottom-color .3s;
        }

        &:hover,
        &.is-current {

            span {
                border-bottom-color: transparent;
            }
        }
    }

    &.is-active {
        width: 16rem;
        box-shadow: inset 2px 0 0 0 $middle-grey;
        transition: width .3s .3s, box-shadow .3s .3s;

        @include breakpoint(v-mobile) {
            width: 11rem;
        }

        a {
            opacity: 1;
            transition: opacity .3s .5s;
        }
    }
}
</style>
