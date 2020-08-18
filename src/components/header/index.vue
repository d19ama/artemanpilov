<template>
    <header
        class="header"
        :class="{
            'is-hovered': hovered
        }"
        @mouseenter="hovered = true"
        @mouseleave="hovered = false"
    >
        <div class="logo"></div>
        <app-navigation
            :active="hovered"
        />
    </header>
</template>

<script>
import verge from 'verge'

export default {
    name: 'app-header',
    data() {
        return {
            viewportW: 0,
            hovered: false
        }
    },
    mounted() {
        this.getViewportW()
        window.addEventListener('resize', () => this.getViewportW())
    },
    watch: {
        viewportW(newValue) {
            this.hovered = newValue < 480 ? true : false
        }
    },
    methods: {
        getViewportW() {
            this.viewportW = verge.viewportW()
        }
    }
}
</script>

<style lang="scss">
.header {
    display: flex;
    align-items: center;
    flex-flow: row nowrap;
    overflow: hidden;
    position: fixed;
    top: 1.25rem;
    left: 1.25rem;
    z-index: 100;
    border-radius: 50%;
    background-color: $white;
    box-shadow: 0 0 40px rgba($dark-grey, .2);
    transition: border-radius .3s .3s;

    @include breakpoint(v-mobile) {
        width: 100%;
        top: 0;
        left: 0;
    }

    .logo {
        display: block;
        width: 6rem;
        height: 6rem;
        position: relative;
        z-index: 2;
        text-align: center;
        text-decoration: none;
        background-size: 44%;
        background-color: $white;
        background-position: 50% 50%;
        background-repeat: no-repeat;
        background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiIHdpZHRoPSI0NTFweCIgaGVpZ2h0PSI2MDYuNXB4IiB2aWV3Qm94PSIwIDAgNDUxIDYwNi41IiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA0NTEgNjA2LjUiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxnPjxwb2x5bGluZSBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iNzEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBwb2ludHM9IjM1LjUsMzUuNSAzNS41LDU3MSA0MTUsNTcxICIvPjxwb2x5bGluZSBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iNzEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBwb2ludHM9IjE0Ni41LDQ2Ni41IDE0Ni41LDMwMy41IDQxNS41LDQ2Ni44MTggNDE1LjUsMzAzLjUgIi8+PGc+PHBvbHlsaW5lIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLXdpZHRoPSI3MSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHBvaW50cz0iMTQ2LjUsMzUuNSAxNDYuNSwxMjEuOTU1IDE0Ni41LDE5OC41IDI4MSwxMTcgNDE1LjUsMzUuNSAiLz48bGluZSBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iNzEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiB4MT0iMjgxIiB5MT0iMTE3IiB4Mj0iNDE1LjUiIHkyPSIxOTguNSIvPjwvZz48L2c+PC9zdmc+);
        transition: background-color .3s .3s;
    }

    &.is-hovered {
        overflow: hidden;
        border-radius: 0%;
        transition: border-radius .3s;
    }
}
</style>
