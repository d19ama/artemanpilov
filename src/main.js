// styles
import './styles/reset.scss'
import './styles/vars.scss'
import './styles/mixins.scss'
import './styles/base.scss'

// base
import Vue from 'vue'
import verge from 'verge'
import data from './data.js'
import router from './router.js'

// components
import Title from './components/Title/index.vue'
import Header from './components/Header/index.vue'
import Window from './components/Window/index.vue'
import Portfolio from './views/Portfolio/index.vue'
import Navigation from './components/Navigation/index.vue'

Vue.component('app-title', Title)
Vue.component('app-header', Header)
Vue.component('app-window', Window)
Vue.component('app-portfolio', Portfolio)
Vue.component('app-navigation', Navigation)

Object.defineProperty(Vue.prototype, '$bus', {
    get() {
        return this.$root.bus
    }
})

const App = new Vue({
    el: '#app',
    data: {
        app: data,
        scrollY: 0,
        viewportW: 0,
        mobile: false,
        bus: new Vue({}),
        windowOpened: false
    },
    router,
    mounted() {
        this.checkRoute()
        this.getViewportW()

        this.$bus.$on('window:open', () => this.openWindow())
        this.$bus.$on('window:close', () => this.closeWindow())

        window.addEventListener('resize', () => this.getViewportW())
    },
    watch: {
        viewportW(newValue) {
            this.mobile = newValue < 480 ? true : false
        }
    },
    methods: {
        checkRoute() {
            let routes = this.$router.options.routes
            let current = this.$router.history.current
            let isRouteOpened = routes.filter(item => item.path === current.path).length > 0

            isRouteOpened ? this.openWindow() : false
        },
        getViewportW() {
            this.viewportW = verge.viewportW()
        },
        openWindow() {
            this.disableScroll()
            this.windowOpened = true
        },
        closeWindow() {
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
