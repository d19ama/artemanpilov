import './styles/reset.scss'
import './styles/vars.scss'
import './styles/mixins.scss'
import './styles/base.scss'

import data from './data.js'

import Vue from 'vue'
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

new Vue({
    el: '#app',
    data: {
        app: data,
        bus: new Vue({})
    }
})
