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
            <div class="window__inner content">
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
        this.$root.$bus.$on('open-window', () => {
            this.opened = true
        })
    },
    methods: {
        closeWindow() {
            this.opened = false
            this.$router.push('/')
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
    padding-top: 4rem;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 90;
    background-color: $white;

    &__inner {
        max-width: 1240px;
        margin: auto;
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
