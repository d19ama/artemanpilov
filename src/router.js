import Vue from 'vue'
import VueRouter from 'vue-router'

import PageAbout from './views/PageAbout/index.vue'
import PageContacts from './views/PageContacts/index.vue'

Vue.use(VueRouter)

export default new VueRouter({
    linkActiveClass: 'is-current',
    routes: [
    	{
            path: '/about',
            component: PageAbout
        },
        {
            path: '/contacts',
            component: PageContacts
        }
    ]
})
