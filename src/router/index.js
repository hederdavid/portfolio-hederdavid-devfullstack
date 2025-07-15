import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import ContactMeView from '@/views/ContactMeView.vue' // Certifique-se de importar a view de contato

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/contato',
    name: 'contact',
    component: ContactMeView, // Certifique-se de que esta view existe
  },
  {
    path: '/:pathMatch(.*)*', // Rota catch-all para rotas inexistentes
    redirect: '/',
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
