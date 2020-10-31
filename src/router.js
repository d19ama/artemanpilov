import Vue from 'vue'
import VueRouter from 'vue-router'

import Main from './views/Main/index.vue'
import About from './views/About/index.vue'
import MyProjects from '@/views/MyProjects/index.vue'
import WorkProjects from '@/views/WorkProjects/index.vue'

Vue.use(VueRouter)

const router = new VueRouter({
    linkActiveClass: 'is-current',
    routes: [
        {
            path: '/',
            component: Main,
            meta: {
                title: '// AA: Main page'
            }
        },
        {
            path: '/about',
            component: About,
            meta: {
                title: '// AA: About'
            }
        },
        {
            path: '/work_projects',
            component: WorkProjects,
            meta: {
                title: '// AA: My work projects'
            }
        },
        {
            path: '/my_projects',
            component: MyProjects,
            meta: {
                title: '// AA: My own projects'
            }
        }
    ]
})

router.afterEach((to, from) => {
    Vue.nextTick(() => {
        document.title = to.meta.title ? to.meta.title : 'default title'
    })
})

export default router
