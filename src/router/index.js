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
      path: '/musicbox',
      name: 'musicbox',
      component: () => import('../views/MusicboxView.vue')
    },
    {
      path: '/chocolates',
      name: 'chocolate',
      component: () => import('../views/ChocolateView.vue')
    },
    {
      path: '/korporativ',
      name: 'korporativ',
      component: () => import('../views/KorporativView.vue')
    },
    // admin
    {
      path: '/admin/login',
      name: 'admin-login',
      component: () => import('../views/admin/LoginView.vue')
    }
  ]
})

export default router
