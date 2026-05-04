import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import Dashboard from '../pages/Dashboard.vue'
import Profile from '../pages/Profile.vue'
import Experience from '../pages/Experience.vue'
import Projects from '../pages/Projects.vue'
import VacationRentalPrototype from '../pages/VacationRental.vue'
import PortfolioDashboard from '../pages/PortfolioDashboard.vue'
import WowHousing from '../pages/WowHousing.vue'
import MangaCollection from '../pages/MangaCollection.vue'

const routes: RouteRecordRaw[] = [
    {
        path: '/house-rental-prototype/',
        component: Dashboard,
        beforeEnter: () => {
            window.location.assign('/house-rental-prototype/index.html')
            return false
        },
    },
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
    {
        path: '/projects',
        name: 'Projects',
        component: Projects,
    },
    {
        path: '/projects/vacation-rental',
        name: 'Vacation Rental Prototype',
        component: VacationRentalPrototype,
    },
    {
        path: '/projects/portfolio-dashboard',
        name: 'Portfolio Dashboard',
        component: PortfolioDashboard,
    },
    {
        path: '/projects/wow-housing',
        name: 'WoW Housing Bot',
        component: WowHousing,
    },
    {
        path: '/projects/manga-collection',
        name: 'Manga Collection Royale',
        component: MangaCollection,
    },
    {
        path: '/projects/vacation-rental-prototype',
        redirect: '/projects/vacation-rental',
    },
    {
        path: '/programming',
        redirect: '/projects',
    },
    {
        path: '/design',
        redirect: '/projects',
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, _from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        }

        if (to.hash) {
            return {
                el: to.hash,
                top: 80,
                behavior: 'smooth',
            }
        }

        return {
            top: 0,
            left: 0,
            behavior: 'smooth',
        }
    },
})

export default router
