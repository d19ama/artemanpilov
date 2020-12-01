<template>
    <div class="portfolio">
        <div
            :key="item.id"
            v-for="item in data"
            class="portfolio__item"
            :style="buildStyle(item.image)"
        >
            <a
                target="_blank"
                :href="item.link"
                class="portfolio__link"
            ></a>
        </div>
    </div>
</template>

<script>
import verge from 'verge'

export default {
    name: 'portfolio',
    props: {
        data: {
            type: Array,
            default: () => []
        }
    },
    data () {
        return {}
    },
    computed: {
        height () {
            return (verge.viewportH() - (verge.viewportH() / 3)) / 2
        }
    },
    methods: {
        buildStyle (image) {
            return {
                height: `${this.height}px`,
                backgroundImage: `url(${image})`
            }
        }
    }
}
</script>

<style lang="scss">
.portfolio {
    display: flex;
    flex-flow: row wrap;
    padding: 0;

    &__item {
        display: block;
        width: 50%;
        height: 50%;
        overflow: hidden;
        position: relative;
        background-position: center;
        background-repeat: no-repeat;
        filter: grayscale(100%);
        box-shadow: 0 1.875rem 4.75rem 0.25rem transparent;
        transition: all .2s;

        @include breakpoint(tablet) {
            filter: grayscale(0%);

            @media screen and (orientation: portrait) {
                width: 100%;
                height: calc(100vh/3);
            }
        }

        @include breakpoint(mobile) {

            @media screen and (orientation: landscape) {
                width: 50%;
            }
        }

        @include breakpoint(v-mobile) {
            width: 100%;
            height: calc(100vh/3);
        }

        &:hover {
            z-index: 2;
            filter: grayscale(0%);
            background-color: $white;
            box-shadow: 0 1.875rem 4.75rem 0.25rem rgba(4, 20, 38, 0.1);
        }
    }

    &__link {
        display: block;
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;
    }
}
</style>
