// styles
import './styles/reset.scss'
import './styles/vars.scss'
import './styles/base.scss'

import Vue from 'vue'

// components
import Header from './components/header/index.vue'

Vue.component('app-header', Header)

new Vue({
    el: '#app'
})
