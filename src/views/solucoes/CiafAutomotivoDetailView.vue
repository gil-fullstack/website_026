<script setup>
import { computed, watchEffect } from 'vue'
import { useRoute, useRouter }   from 'vue-router'
import { plans, product }        from '@/data/ciafAutomotivo.js'

import ProductBreadcrumb   from '@/components/solucoes/ProductBreadcrumb.vue'
import SubProductHero      from '@/components/solucoes/ciaf-automotivo/SubProductHero.vue'
import SubProductFeatures  from '@/components/solucoes/ciaf-professional/SubProductFeatures.vue'
import CtaSection          from '@/components/home/CtaSection.vue'

const route  = useRoute()
const router = useRouter()

const plan = computed(() => plans.find(p => p.slug === route.params.slug))

watchEffect(() => {
  if (route.params.slug && !plan.value) {
    router.replace({ name: 'ciaf-automotivo' })
  }
  if (plan.value) {
    document.title = plan.value.meta.title
  }
})

const breadcrumb = computed(() => [
  { label: 'Início',     to: '/' },
  { label: 'Soluções',   to: '/#solucoes' },
  { label: product.name, to: '/solucoes/ciaf-automotivo' },
  { label: plan.value?.name ?? '' }
])
</script>

<template>
  <template v-if="plan">
    <ProductBreadcrumb :items="breadcrumb" />
    <SubProductHero :plan="plan" />
    <SubProductFeatures :features="plan.features" :plan-name="plan.name" />
    <CtaSection
      :title="`Interessado no ${plan.name}?`"
      :subtitle="`Entre em contato e descubra como o ${plan.name} pode transformar a gestão da sua oficina. Atendimento personalizado e sem compromisso.`"
      cta-label="Ver outras versões"
      cta-to="/solucoes/ciaf-automotivo"
    />
  </template>
</template>
