// styles
import './styles/reset.scss'
import './styles/fonts.scss'
import './styles/vars.scss'
import './styles/mixins.scss'
import './styles/base.scss'

// base
import Vue from 'vue'
import verge from 'verge'
import data from '@/data.js'
import router from '@/router.js'

// components

const requireComponent = require.context(
    './components',
    true,
    /App[\w-]+\/index\.js$/
)

requireComponent.keys().forEach(fileName => {
    const componentConfig = requireComponent(fileName)
    const componentName = fileName.split('/')[1]
    Vue.component(componentName, componentConfig.default || componentConfig)
})

Object.defineProperty(Vue.prototype, '$bus', {
    get () {
        return this.$root.bus
    }
})

/* eslint-disable no-new */
new Vue({
    el: '#app',
    data: {
        app: data,
        scrollY: 0,
        viewportW: 0,
        mobile: false,
        loaded: false,
        bus: new Vue({}),
        windowOpened: false
    },
    router,
    mounted () {
        this.loaded = true
        this.checkRoute()
        this.getViewportW()

        this.$bus.$on('window:open', () => this.openWindow())
        this.$bus.$on('window:close', () => this.closeWindow())

        window.addEventListener('resize', () => this.getViewportW())
    },
    beforeDestroy () {
        this.$bus.$off('window:open', () => this.openWindow())
        this.$bus.$off('window:close', () => this.closeWindow())
    },
    watch: {
        viewportW (newValue) {
            this.mobile = newValue < 480
        }
    },
    methods: {
        checkRoute () {
            const routes = this.$router.options.routes
            const current = this.$router.history.current
            const isRouteOpened = routes.filter(item => item.path === current.path).length > 0

            return isRouteOpened ? this.openWindow() : false
        },
        getViewportW () {
            this.viewportW = verge.viewportW()
        },
        openWindow () {
            this.disableScroll()
            this.windowOpened = true
        },
        closeWindow () {
            this.enableScroll()
            this.$router.push('/')
            this.windowOpened = false
        },
        enableScroll () {
            document.body.style.position = ''
            document.body.style.top = ''
            window.scroll(0, this.scrollY)
        },
        disableScroll () {
            this.scrollY = window.pageYOffset
            document.body.style.position = 'fixed'
            document.body.style.top = `-${this.scrollY}px`
        }
    }
})
