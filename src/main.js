// styles
import './styles/reset.scss'
import './styles/vars.scss'
import './styles/mixins.scss'
import './styles/base.scss'

import data from './data.js'

import Vue from 'vue'

// components
import Header from './components/header/index.vue'
import Portfolio from './components/portfolio/index.vue'
import Navigation from './components/navigation/index.vue'

Vue.component('app-header', Header)
Vue.component('app-portfolio', Portfolio)
Vue.component('app-navigation', Navigation)

new Vue({
    el: '#app',
    data: {
    	app: data
    }
})
