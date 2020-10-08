// styles
import './styles/reset.scss'
import './styles/vars.scss'
import './styles/mixins.scss'
import './styles/grid.scss'
import './styles/spacers.scss'
import './styles/base.scss'

// base
import Vue from 'vue'
import verge from 'verge'
import router from '@/router.js'
import dataStatic from '@/data.js'

// App
import AppWindow from '@/components/AppWindow/index.vue'
import AppHeader from '@/components/AppHeader/index.vue'
import AppNavigation from '@/components/AppNavigation/index.vue'

// components
import List from '@/components/List/index.vue'
import Heading from '@/components/Heading/index.vue'
import ListItem from '@/components/ListItem/index.vue'
import TextBlock from '@/components/TextBlock/index.vue'
import PagePortfolio from '@/views/PagePortfolio/index.vue'

Vue.component('list', List)
Vue.component('heading', Heading)
Vue.component('list-item', ListItem)
Vue.component('text-block', TextBlock)
Vue.component('app-window', AppWindow)
Vue.component('app-header', AppHeader)
Vue.component('app-navigation', AppNavigation)
Vue.component('page-portfolio', PagePortfolio)

Object.defineProperty(Vue.prototype, '$bus', {
    get() {
        return this.$root.bus
    }
})

const App = new Vue({
    el: '#app',
    data: {
        scrollY: 0,
        viewportW: 0,
        mobile: false,
        app: dataStatic,
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
    beforeDestroy() {
        this.$bus.$off('window:open', () => this.openWindow())
        this.$bus.$off('window:close', () => this.closeWindow())
    },
    watch: {
        viewportW(newValue) {
            this.mobile = newValue < 480 ? true : false
        }
    },
    methods: {
        checkRoute() {
            const routes = this.$router.options.routes
            const current = this.$router.history.current
            const isRouteOpened = routes.filter(item => item.path === current.path).length > 0

            return isRouteOpened ? this.openWindow() : false
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
        enableScroll() {
            document.body.style.position = ''
            document.body.style.top = ''
            window.scroll(0, this.scrollY)
        },
        disableScroll() {
            this.scrollY = window.pageYOffset
            document.body.style.position = 'fixed'
            document.body.style.top = `-${this.scrollY}px`
        }
    }
})
