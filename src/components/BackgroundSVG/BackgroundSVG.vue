<template>
    <div class="background-svg">
        <svg
            viewBox="0 0 1920 1080"
            class="background-svg__parent"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                :d="path"
                :key="index"
                class="background-svg__path"
                v-for="(path, index) in paths"
                :class="{
                    'animate active': currentPath === index || blasted
                }"
            />
        </svg>
    </div>
</template>

<script>
export default {
    name: 'background-svg',
    data () {
        return {
            delay: 2000,
            currentPath: 0,
            blasted: false,
            timing: '',
            paths: [
                'm-1,-1.125l1155,565.125l766,-444',
                'm1919,232.875l-943,563.125l530,282',
                'm-1,848.875l1449,-848.875',
                'm1,138.875l855,411.125l-856,526',
                'm709,-1.125l1209,571.125',
                'm1921,574.875l-799,503.125',
                'm237,1076.875l659,-428.875l884,436',
                'm-3,420.875l189,87.125l908,-514',
                'm1,630.875l879,449.125'
            ]
        }
    },
    mounted () {
        setInterval(() => this.animate(), this.delay)

        this.$bus.$on('blast', () => this.blast())
    },
    beforeDestroy () {
        this.$bus.$off('blast', () => this.blast())
    },
    methods: {
        animate () {
            this.currentPath = this.getRandomInt(0, 10)
        },
        getRandomInt (min, max) {
            min = Math.ceil(min)
            max = Math.floor(max)

            const number = Math.floor(Math.random() * (max - min)) + min

            return this.currentPath === number ? this.getRandomInt(0, 10) : number
        },
        timeout () {
            this.blasted = true

            return new Promise(resolve => setTimeout(() => {
                this.blasted = false
            }, this.delay))
        },
        async blast () {
            if (!this.blasted) await this.timeout()
        }
    }
}
</script>

<style lang="scss">
.background-svg {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;

    &__parent {
        height: 100%;
    }

    &__path {
        opacity: 0;
        fill: none;
        stroke: rgba($black, .5);
        stroke-width: 1px;
        stroke-dasharray: 2200px;
        stroke-dashoffset: 2200px;

        &.animate {
            animation: stroke 2s infinite both;
            animation-play-state: paused;
        }

        &.active {
            animation-play-state: running;
        }
    }
}

@keyframes stroke {
    0% {
        stroke-dashoffset: 2200px;
    }

    25% {
        opacity: 1;
    }

    75% {
        opacity: 0;
    }

    100% {
        stroke-dashoffset: 0px;
    }
}
</style>
