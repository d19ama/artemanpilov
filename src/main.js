// styles
import './styles/reset.scss'
import './styles/vars.scss'
import './styles/mixins.scss'
import './styles/base.scss'

// base
import Vue from 'vue'
import Data from './data.js'
import VueRouter from 'vue-router'

// components
import About from './views/about/index.vue'
import Contacts from './views/contacts/index.vue'
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

Vue.use(VueRouter)

const routes = [
    {
        path: '/about',
        component: About
    },
    {
        path: '/contacts',
        component: Contacts
    }
]

const router = new VueRouter({ routes })

new Vue({
    el: '#app',
    data: {
        app: Data,
        bus: new Vue({})
    },
    router,
    mounted() {
        this.checkRoute()
    },
    methods: {
        checkRoute() {
            let isRouteOpened = this.$router.options.routes.filter(item => item.path === this.$router.history.current.path).length

            isRouteOpened ? this.$bus.$emit('open-window') : false
        }
    }
})
