<template>
    <nav class="app-navigation">
        <div
            role="button"
            @click="toggleNav"
            class="app-navigation__button"
            style="background-image: url('./src/images/icons/hamburger.svg')"
        ></div>
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
        display: block;
        width: 6rem;
        height: 6rem;
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
        transition: transform .3s;
        transform: scale(.9);
        cursor: pointer;

        &:hover {
            transform: scale(1);
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

    &__link {
        padding: 0 .75rem;
        color: $black;
        font-size: 1rem;
        line-height: 3rem;
        white-space: nowrap;
        transition: opacity .1s;

        @include breakpoint(v-mobile) {
            font-size: .875rem;
        }
    }
}
</style>
