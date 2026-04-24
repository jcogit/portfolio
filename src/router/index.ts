import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../pages/Dashboard.vue'
import Profile from '../pages/Profile.vue'
import Experience from '../pages/Experience.vue'

const routes = [
    {
        path: '/',
        name: 'Dashboard',
        component: Dashboard,
    },
    {
        path: '/profile',
        name: 'Profile',
        component: Profile,
    },
    {
        path: '/experience',
        name: 'Experience',
        component: Experience,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
