<template>
    <nav class="app-navigation">
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
    justify-content: space-between;
    position: sticky;
    top: 0;
    text-align: center;
    white-space: nowrap;
    background-color: $grey;

    &__link {
        flex-grow: 1;
        color: $black;
        font-weight: 400;
        line-height: 3rem;
        font-size: .875rem;
        transition: background-color .1s;

        span {
            border-bottom: 1px solid rgba($black, .5);
            transition: border-bottom-color .3s;
        }

        &:hover,
        &.is-current {
            background-color: rgba($white, .5);

            span {
                border-bottom-color: transparent;
            }
        }
    }
}
</style>
