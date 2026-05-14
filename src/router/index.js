import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue'),
    meta: { title: 'CIAF Sistemas — Soluções ERP e Automação' }
  },
  {
    path: '/solucoes/ciaf-professional',
    name: 'ciaf-professional',
    component: () => import('../views/solucoes/CiafProfessionalView.vue'),
    meta: { title: 'CIAF Professional — ERP Desktop para Gestão Empresarial | CIAF Sistemas' }
  },
  {
    path: '/solucoes/ciaf-professional/:slug',
    name: 'ciaf-professional-detail',
    component: () => import('../views/solucoes/CiafProfessionalDetailView.vue'),
    meta: { title: 'CIAF Professional' }
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, _from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) return { el: to.hash, behavior: 'smooth', top: 80 }
    return { top: 0, behavior: 'smooth' }
  }
})

router.afterEach((to) => {
  if (to.meta?.title) document.title = to.meta.title
})

export default router
