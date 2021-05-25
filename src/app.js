import Vue from 'vue'
import verge from 'verge'
import data from '@/data'
import router from '@/router'

// components
import List from '@/components/List/index.vue'
import Social from '@/components/Social/index.vue'
import ListItem from '@/components/ListItem/index.vue'
import TextBlock from '@/components/TextBlock/index.vue'
import Portfolio from '@/components/Portfolio/index.vue'
import KeyIndicator from '@/components/KeyIndicator/index.vue'
import BackgroundSVG from '@/components/BackgroundSVG/index.vue'

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
    /App[\w-]+\/index\.vue$/
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

window.vm = new Vue({
    el: '#app',
    router,
    data: {
        app: data,
        viewportW: 0,
        loaded: false,
        bus: new Vue({})
    },
    mounted () {
        this.loaded = true
        this.viewportW = verge.viewportW()
    }
})
