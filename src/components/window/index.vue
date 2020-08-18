<template>
    <transition
        @before-enter="appearAnimationBefore"
        @enter="appearAnimationEnter"
        @leave="appearAnimationLeave"
    >
        <div
            v-if="opened"
            class="window"
        >
            <div class="window__inner">
                <router-view />
            </div>
            <a
                role="button"
                title="close"
                class="window__close"
                @click="closeWindow()"
                href="javascript: void(0)"
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
            duration: 300,
            opened: this.active
        }
    },
    mounted() {
        this.$root.$bus.$on('open-window', () => this.openWindow())
    },
    methods: {
        openWindow() {
            this.opened = true
            this.disableScroll()
        },
        closeWindow() {
            this.opened = false
            this.enableScroll()
            this.$router.push('/')
        },
        disableScroll () {
            this.scrollY = window.pageYOffset
            document.body.style.position = 'fixed'
            document.body.style.top = `-${this.scrollY}px`
        },
        enableScroll () {
            document.body.style.position = ''
            document.body.style.top = ''
            window.scroll(0, this.scrollY)
        },
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
    position: fixed;
    top: 0;
    left: 0;
    z-index: 90;
    background-color: $white;

    &__inner {
        max-width: 77.5rem;
        height: 100%;
        overflow: auto;
        padding-top: 4rem;
        margin: auto;

        @include breakpoint(tablet) {
            max-width: none;
            width: 100%;
            padding: 3rem 9rem;
        }

        @include breakpoint(v-mobile) {
            max-width: none;
            width: 100%;
            padding: 7rem 0 3rem;
        }
    }

    &__close {
        width: 3rem;
        height: 3rem;
        padding: 0;
        position: absolute;
        top: 2rem;
        right: 2rem;
        z-index: 2;
        border: 0;
        outline: 0;
        background-color: transparent;
        transition: opacity .3s;
        cursor: pointer;

        &:hover {
            opacity: .5;
        }

        &:after,
        &:before {
            content: '';
            display: block;
            width: 3rem;
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
}
</style>
