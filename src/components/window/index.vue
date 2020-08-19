<template>
    <transition
        @before-enter="appearAnimationBefore"
        @enter="appearAnimationEnter"
        @leave="appearAnimationLeave"
    >
        <div
            v-if="active"
            class="window"
        >
            <div class="window__inner">
                <transition name="fade">
                    <router-view />
                </transition>
            </div>
            <a
                role="button"
                title="close"
                class="window__close"
                href="javascript: void(0)"
                @click="$root.$bus.$emit('window:close')"
            ></a>
        </div>
    </transition>
</template>

<script>
import Velocity from 'velocity-animate'

export default {
    name: 'app-window',
    props: {
        active: Boolean
    },
    data() {
        return {
            duration: 300
        }
    },
    methods: {
        appearAnimationBefore(el) {
            el.style.opacity = 0
        },
        appearAnimationEnter(el, done) {
            Velocity(el, {
                opacity: 1
            }, {
                duration: this.duration,
                delay: this.duration
            }, {
                complete: done
            })
        },
        appearAnimationLeave(el, done) {
            Velocity(el, {
                opacity: 0
            }, {
                duration: this.duration
            })
            Velocity(el, {
                display: 'none'
            }, {
                complete: done
            })
        }
    }
}
</script>

<style lang="scss">
.window {
    width: 100vw;
    height: 100vh;
    padding-left: 9rem;
    padding-right: 9rem;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 90;
    background-color: $white;

    @include breakpoint(mobile) {
        overflow: auto;
    }

    @include breakpoint(v-mobile) {
        padding-left: 0;
        padding-right: 0;
    }

    &__inner {
        max-width: 77.5rem;
        padding-top: 3rem;
        margin: auto;

        @include breakpoint(tablet) {
            max-width: none;
            width: 100%;
            padding: 3rem 0;
        }

        @include breakpoint(v-mobile) {
            max-width: none;
            width: 100%;
            padding: 6rem 0 3rem;
        }
    }

    &__close {
        width: 6rem;
        height: 6rem;
        padding: 0;
        position: fixed;
        top: 1.25rem;
        right: 1.25rem;
        z-index: 2;
        border: 0;
        outline: 0;
        background-color: transparent;
        transition: opacity .3s;
        cursor: pointer;

        @include breakpoint(v-mobile) {
            width: 2rem;
            height: 2rem;
            top: 2rem;
            right: 1rem;
        }

        &:hover {
            opacity: .5;
        }

        &:after,
        &:before {
            content: '';
            display: block;
            width: 100%;
            height: 2px;
            position: absolute;
            top: 50%;
            left: 50%;
            background-color: $dark-grey;
        }

        &:before {
            transform: translate(-50%, -50%) rotate(45deg);
        }

        &:after {
            transform: translate(-50%, -50%) rotate(-45deg);
        }
    }

    .fade-enter-active,
    .fade-leave-active {
        transition-property: opacity;
        transition-duration: .25s;
    }

    .fade-enter-active {
        transition-delay: .25s;
    }

    .fade-enter,
    .fade-leave-active {
        opacity: 0;
    }
}
</style>
