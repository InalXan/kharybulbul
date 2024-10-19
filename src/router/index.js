import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
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
  },
  {
    path: '/admin/profile',
    name: 'admin-profile',
    component: () => import('../views/admin/ProfileView.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/admin/about',
    name: 'admin-about',
    component: () => import('../views/admin/AddAboutView.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/admin/inbox',
    name: 'admin-inbox',
    component: () => import('../views/admin/InboxView.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/admin/category',
    name: 'admin-category',
    component: () => import('../views/admin/AddCategoryView.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/admin/product',
    name: 'admin-product',
    component: () => import('../views/admin/AddProductView.vue'),
    meta: { requiresAuth: true }
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    const token = localStorage.getItem('token')
    if (!token) {
      next({ path: '/' })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
