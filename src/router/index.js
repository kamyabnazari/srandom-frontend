import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/AboutUs.vue'
import Songs from '../views/Songs.vue'
import Songgenerator from '@/views/Songgenerator'
import NotFound from '../views/NotFound.vue'
import Account from '../views/Account.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/songgenerator',
    name: 'Songgenerator',
    component: Songgenerator
  },
  {
    path: '/about us',
    name: 'About',
    component: About
  },
  {
    path: '/songs',
    name: 'Songs',
    component: Songs
  },
  {
    path: '/:catchAll(.*)',
    name: 'Notfound',
    component: NotFound
  },
  {
    path: '/account',
    name: 'Account',
    component: Account
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  linkActiveClass: 'active',
  routes
})

export default router
