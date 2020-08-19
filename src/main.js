// styles
import './styles/reset.scss'
import './styles/vars.scss'
import './styles/mixins.scss'
import './styles/base.scss'

// base
import Vue from 'vue'
import data from './data.js'
import router from './router.js'

// components
import Header from './components/header/index.vue'
import Window from './components/window/index.vue'
import Portfolio from './components/portfolio/index.vue'
import Navigation from './components/navigation/index.vue'

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
        bus: new Vue({}),
        windowOpened: false
    },
    router,
    mounted() {
        this.checkRoute()

        this.$bus.$on('window:open', () => this.openWindow())
        this.$bus.$on('window:close', () => this.closeWindow())
    },
    methods: {
        checkRoute() {
            let routes = this.$router.options.routes
            let current = this.$router.history.current
            let isRouteOpened = routes.filter(item => item.path === current.path).length > 0

            this.windowOpened = isRouteOpened
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
        disableScroll () {
            this.scrollY = window.pageYOffset
            document.body.style.position = 'fixed'
            document.body.style.top = `-${this.scrollY}px`
        },
        enableScroll () {
            document.body.style.position = ''
            document.body.style.top = ''
            window.scroll(0, this.scrollY)
        }
    }
})
