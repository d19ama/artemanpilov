<template>
    <nav class="app-navigation">
        <div
            role="button"
            @click="toggleNav"
            :class="{ active: active }"
            class="app-navigation__button"
        >
            <div class="app-navigation__button-inner">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
        <transition-group
            tag="ul"
            @enter="animationEnter"
            @leave="animationLeave"
            class="app-navigation__list"
            @before-enter="animationBefore"
        >
            <template v-if="active">
                <li
                    :key="item.id"
                    :data-index="index"
                    class="app-navigation__item"
                    v-for="(item, index) in data"
                >
                    <router-link
                        exact
                        :to="item.link"
                        class="app-navigation__link"
                        @click.native="$bus.$emit('blast')"
                    >
                        <span>{{ item.name }}</span>
                    </router-link>
                </li>
            </template>
        </transition-group>
    </nav>
</template>

<script>
import Velocity from 'velocity-animate'

export default {
    name: 'app-navigation',
    data () {
        return {
            delay: 0,
            step: 200,
            active: false,
            data: this.$root.app.navigation
        }
    },
    methods: {
        toggleNav () {
            this.active = !this.active
        },
        animate (el, value, delay, done) {
            Velocity(el, { opacity: value }, { delay: delay }, { complete: done })
        },
        animationBefore (el) {
            el.style.opacity = 0
        },
        animationEnter (el, done) {
            const delay = el.dataset.index * this.step

            this.animate(el, 1, delay, done)
            this.delay = this.delay + this.step
        },
        animationLeave (el, done) {
            const delay = this.delay - this.step

            this.animate(el, 0, delay, done)
            this.delay = this.delay - this.step
        }
    }
}
</script>

<style lang="scss">
.app-navigation {
    position: relative;
    z-index: 2;

    &__button {
        display: flex;
        align-items: center;
        flex-flow: row nowrap;
        justify-content: center;
        width: 5rem;
        height: 5rem;
        position: relative;
        z-index: 2;
        text-align: center;
        text-decoration: none;
        border-radius: 50%;
        background-size: 44%;
        background-color: $white;
        background-position: center;
        background-repeat: no-repeat;
        @include box-shadow-main;
        cursor: pointer;

        &:hover {

            span {
                background-color: $red;
            }
        }

        &-inner {
            width: 2.5rem;
            height: 2rem;
            position: relative;
        }

        span {
            display: block;
            height: .5rem;
            width: 100%;
            opacity: 1;
            margin: auto;
            position: absolute;
            left: 0;
            border-radius: 9px;
            background-color: $black;
            transform: rotate(0deg);
            transition:
                background-color .25s ease-in-out,
                bottom .25s .25s ease-in-out,
                width .25s .25s ease-in-out,
                transform .25s ease-in-out,
                top .25s .25s ease-in-out,
                opacity .25s ease-in-out;

            &:nth-child(1) {
                top: 0;
                transform-origin: center;
            }

            &:nth-child(2) {
                width: 100%;
                opacity: 1;
                top: 0;
                bottom: 0;
                transform-origin: center;
            }

            &:nth-child(3) {
                bottom: 0;
                transform-origin: center;
            }
        }

        &.active {

            span {
                transition:
                    background-color .25s ease-in-out,
                    transform .25s .25s ease-in-out,
                    opacity .25s .25s ease-in-out,
                    width .25s ease-in-out,
                    bottom .25s ease-in-out,
                    top .25s ease-in-out;

                &:nth-child(1) {
                    top: calc(50% - .25rem);
                    transform: rotate(45deg);
                }

                &:nth-child(2) {
                    width: 0%;
                    opacity: 0;
                }

                &:nth-child(3) {
                    bottom: calc(50% - .25rem);
                    transform: rotate(-45deg);
                }
            }
        }
    }

    &__list {
        display: flex;
        flex-flow: row-reverse nowrap;
        align-items: center;
        margin: auto;
        position: absolute;
        top: 0;
        right: 7rem;
        bottom: 0;
        z-index: 1;

        @include breakpoint(v-mobile) {
            right: 6rem;
        }
    }

    &__item {
        padding: 0 .75rem;
        user-select: none;

        @include breakpoint(v-mobile) {
            padding: 0 .5rem;
        }
    }

    &__link {
        display: block;
        position: relative;
        color: $black;
        font-weight: 300;
        font-size: .875rem;
        line-height: 1.5rem;
        white-space: nowrap;
        text-shadow: 1px 1px 1px $white;
        transition: opacity .1s;

        &:after {
            content: '';
            display: block;
            width: 100%;
            height: 2px;
            opacity: 0;
            position: absolute;
            left: 0;
            top: 70%;
            background-color: $red;
            transition: top .3s, opacity .3s;
        }

        &:hover,
        &.is-current {

            &:after {
                opacity: 1;
                top: 100%;
            }
        }
    }
}
</style>
