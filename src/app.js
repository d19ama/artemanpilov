import Vue from 'vue'
import verge from 'verge'
import data from '@/data.js'
import router from '@/router.js'

// components
import List from '@/components/List'
import Social from '@/components/Social'
import ListItem from '@/components/ListItem'
import TextBlock from '@/components/TextBlock'
import Portfolio from '@/components/Portfolio'
import KeyIndicator from '@/components/KeyIndicator'
import BackgroundSVG from '@/components/BackgroundSVG'

Vue.component('list', List)
Vue.component('social', Social)
Vue.component('list-item', ListItem)
Vue.component('portfolio', Portfolio)
Vue.component('text-block', TextBlock)
Vue.component('key-indicator', KeyIndicator)
Vue.component('background-svg', BackgroundSVG)

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
        viewportW: 0,
        loaded: false,
        bus: new Vue({})
    },
    router,
    mounted () {
        this.loaded = true
        this.viewportW = verge.viewportW()
    }
})
