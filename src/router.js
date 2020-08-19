import Vue from 'vue'
import VueRouter from 'vue-router'

import PageAbout from './views/about/index.vue'
import PageContacts from './views/contacts/index.vue'

Vue.use(VueRouter)

export default new VueRouter({
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
