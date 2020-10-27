import Vue from 'vue'
import VueRouter from 'vue-router'

import Main from './views/Main/index.vue'
import About from './views/About/index.vue'
import Contacts from './views/Contacts/index.vue'
import MyProjects from '@/views/MyProjects/index.vue'
import WorkProjects from '@/views/WorkProjects/index.vue'

Vue.use(VueRouter)

export default new VueRouter({
    linkActiveClass: 'is-current',
    routes: [
        {
            path: '/',
            component: Main
        },
        {
            path: '/about',
            component: About
        },
        {
            path: '/contacts',
            component: Contacts
        },
        {
            path: '/work_projects',
            component: WorkProjects
        },
        {
            path: '/my_projects',
            component: MyProjects
        }
    ]
})
