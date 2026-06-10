<script setup>
import { computed, watchEffect } from 'vue'
import { useRoute, useRouter }   from 'vue-router'
import { plans, product }        from '@/data/petsystem.js'

import ProductBreadcrumb   from '@/components/solucoes/ProductBreadcrumb.vue'
import SubProductHero      from '@/components/solucoes/petsystem/SubProductHero.vue'
import SubProductFeatures  from '@/components/solucoes/ciaf-professional/SubProductFeatures.vue'
import CtaSection          from '@/components/home/CtaSection.vue'

const route  = useRoute()
const router = useRouter()

const plan = computed(() => plans.find(p => p.slug === route.params.slug))

watchEffect(() => {
  if (route.params.slug && !plan.value) {
    router.replace({ name: 'petsystem' })
  }
  if (plan.value) {
    document.title = plan.value.meta.title
  }
})

const breadcrumb = computed(() => [
  { label: 'Início',     to: '/' },
  { label: 'Soluções',   to: '/#solucoes' },
  { label: product.name, to: '/solucoes/petsystem' },
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
      :subtitle="`Entre em contato e descubra como o ${plan.name} pode transformar a gestão do seu pet shop ou clínica. Atendimento personalizado e sem compromisso.`"
      cta-label="Ver outras versões"
      cta-to="/solucoes/petsystem"
    />
  </template>
</template>
