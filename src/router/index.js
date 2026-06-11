import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue'),
    meta: { title: 'CIAF Sistemas — Soluções ERP e Automação' }
  },
  {
    path: '/home2',
    name: 'home2',
    component: () => import('../views/HomeView2.vue'),
    meta: { title: 'CIAF Sistemas — Soluções ERP e Automação' }
  },
  {
    path: '/solucoes/ciaf-emissor',
    name: 'ciaf-emissor',
    component: () => import('../views/solucoes/CiafEmissorView.vue'),
    meta: { title: 'CIAF Emissor — Emissão de NF-e e NFC-e para Pequenas Empresas | CIAF Sistemas' }
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
  },
  {
    path: '/solucoes/ciaf-automotivo',
    name: 'ciaf-automotivo',
    component: () => import('../views/solucoes/CiafAutomotivoView.vue'),
    meta: { title: 'CIAF Automotivo — Gestão para Oficinas e Centros Automotivos | CIAF Sistemas' }
  },
  {
    path: '/solucoes/ciaf-automotivo/:slug',
    name: 'ciaf-automotivo-detail',
    component: () => import('../views/solucoes/CiafAutomotivoDetailView.vue'),
    meta: { title: 'CIAF Automotivo' }
  },
  {
    path: '/solucoes/petsystem',
    name: 'petsystem',
    component: () => import('../views/solucoes/PetsystemView.vue'),
    meta: { title: 'Petsystem — Gestão para Clínicas Veterinárias e Pet Shops | CIAF Sistemas' }
  },
  {
    path: '/solucoes/petsystem/:slug',
    name: 'petsystem-detail',
    component: () => import('../views/solucoes/PetsystemDetailView.vue'),
    meta: { title: 'Petsystem' }
  },
  {
    path: '/solucoes/ciaf-essencial',
    name: 'ciaf-essencial',
    component: () => import('../views/solucoes/CiafEssencialView.vue'),
    meta: { title: 'CIAF Essencial — Gestão Online para Pequenos Negócios | CIAF Sistemas' }
  },
  {
    path: '/suporte',
    name: 'suporte',
    component: () => import('../views/SuporteView.vue'),
    meta: { title: 'Suporte — CIAF Sistemas' }
  },
  {
    path: '/sobre',
    name: 'sobre',
    component: () => import('../views/SobreView.vue'),
    meta: { title: 'Sobre a CIAF — Nossa Essência | CIAF Sistemas' }
  },
  {
    path: '/comprar',
    name: 'comprar',
    component: () => import('../views/ComprarView.vue'),
    meta: { title: 'Comprar — Planos e Preços | CIAF Sistemas' }
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
