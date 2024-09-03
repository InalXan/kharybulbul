import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactView.vue')
    },
    {
      path: '/korporativ',
      name: 'korporativ',
      component: () => import('../views/SponsorsView.vue')
    },
    {
      path: '/musicbox',
      name: 'musicbox',
      component: () => import('../views/MusicboxView.vue')
    },
    {
      path: '/chocolate',
      name: 'chocolate',
      component: () => import('../views/ChocolateView.vue')
    },
    // Admin panel

    {
      path: '/admin/login',
      name: 'login',
      component: () => import('../views/admin/AdminloginView.vue')
    }
  ]
})

export default router
