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
            <li
                v-if="active"
                :key="item.id"
                :data-index="index"
                class="app-navigation__item"
                v-for="(item, index) in data"
            >
                <router-link
                    exact
                    :to="item.link"
                    class="app-navigation__link"
                    @click.native="$root.$bus.$emit('window:open')"
                >
                    <span>{{ item.name }}</span>
                </router-link>
            </li>
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
            data: this.$root.app.components.navigation
        }
    },
    methods: {
        toggleNav () {
            this.active = !this.active
        },
        animate (el, value, delay, done) {
            setTimeout(() => {
                Velocity(el, { opacity: value }, { complete: done })
            }, delay)
        },
        animationBefore (el) {
            el.style.opacity = 0
        },
        animationEnter (el, done) {
            let delay = el.dataset.index * this.step

            this.animate(el, 1, delay, done)
            this.delay = this.delay + this.step
        },
        animationLeave (el, done) {
            let delay = this.delay - this.step

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
        width: 5.5rem;
        height: 5.5rem;
        position: relative;
        z-index: 2;
        text-align: center;
        text-decoration: none;
        border-radius: 50%;
        background-size: 44%;
        background-color: $white;
        background-position: center;
        background-repeat: no-repeat;
        box-shadow: 0 0 40px rgba($dark-grey, .2);
        cursor: pointer;

        &:hover {

            span {
                background-color: $red;
            }
        }

        &-inner {
            width: 3rem;
            height: 2.5rem;
            position: relative;
        }

        span {
            display: block;
            height: .5rem;
            width: 100%;
            opacity: 1;
            position: absolute;
            left: 0;
            border-radius: 9px;
            background-color: $black;
            transform: rotate(0deg);
            transition: .25s ease-in-out;

            &:nth-child(1) {
                top: 0;
                transform-origin: left top;
            }

            &:nth-child(2) {
                top: 1rem;
                transform-origin: left top;
            }

            &:nth-child(3) {
                top: 2rem;
                transform-origin: left bottom;
            }
        }

        &.active {

            span {

                &:nth-child(1) {
                    left: .65rem;
                    transform: rotate(45deg);
                }

                &:nth-child(2) {
                    width: 0%;
                    opacity: 0;
                }

                &:nth-child(3) {
                    left: .65rem;
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
    }

    &__item {
        padding: 0 .75rem;
    }

    &__link {
        display: block;
        position: relative;
        color: $black;
        font-weight: 300;
        font-size: .875rem;
        line-height: 1.5rem;
        white-space: nowrap;
        transition: opacity .1s;

        @include breakpoint(v-mobile) {
            font-size: .875rem;
        }

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

        &:hover {

            &:after {
                opacity: 1;
                top: 100%;
            }
        }
    }
}
</style>
