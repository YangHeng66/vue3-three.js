import { createRouter, createWebHistory } from 'vue-router'
import Index from '../views/index.vue'
import Menu from '../views/menu/menu.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/menu',
      name: 'Menu',
      component: Menu
    }
  ]
})

export default router
