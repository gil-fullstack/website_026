<script setup>
import { product, generalFeatures, plans } from '@/data/ciafProfessional.js'

import ProductBreadcrumb  from '@/components/solucoes/ProductBreadcrumb.vue'
import ProductHero        from '@/components/solucoes/ciaf-professional/ProductHero.vue'
import ProductFeatures    from '@/components/solucoes/ciaf-professional/ProductFeatures.vue'
import ProductPlans       from '@/components/solucoes/ciaf-professional/ProductPlans.vue'
import CtaSection         from '@/components/home/CtaSection.vue'

const breadcrumb = [
  { label: 'Início',    to: '/' },
  { label: 'Soluções',  to: '/#solucoes' },
  { label: product.name }
]
</script>

<template>
  <ProductBreadcrumb :items="breadcrumb" />
  <ProductHero :product="product" :plans="plans" />
  <ProductFeatures :features="generalFeatures" />
  <ProductPlans :plans="plans" />
  <CtaSection
    title="Pronto para escolher o plano CIAF Professional?"
    subtitle="Fale com nosso time e descubra qual versão se encaixa melhor na realidade da sua empresa. Atendimento personalizado e sem compromisso."
    cta-label="Ver todos os planos"
    cta-to="#planos"
  />
</template>
