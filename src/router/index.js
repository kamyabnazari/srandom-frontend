import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/other/AboutUs.vue'
import Songs from '../views/song/Songs.vue'
import RandomSong from '@/views/song/RandomSong'
import NotFound from '../views/other/NotFound.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/random-song',
    name: 'RandomSong',
    component: RandomSong
  },
  {
    path: '/about-us',
    name: 'AboutUs',
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
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  linkActiveClass: 'active',
  routes
})

export default router
