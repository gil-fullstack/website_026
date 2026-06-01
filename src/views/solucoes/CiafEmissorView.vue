<script setup>
import { product, generalFeatures, plans } from '@/data/ciafEmissor.js'

import ProductBreadcrumb from '@/components/solucoes/ProductBreadcrumb.vue'
import ProductHero       from '@/components/solucoes/ciaf-emissor/ProductHero.vue'
import ProductFeatures   from '@/components/solucoes/ciaf-professional/ProductFeatures.vue'
import ProductPlans      from '@/components/solucoes/ciaf-emissor/ProductPlans.vue'
import CtaSection        from '@/components/home/CtaSection.vue'

const breadcrumb = [
  { label: 'Início',   to: '/' },
  { label: 'Soluções', to: '/#solucoes' },
  { label: product.name }
]
</script>

<template>
  <ProductBreadcrumb :items="breadcrumb" />
  <ProductHero
    :product="product"
    :plans="plans"
  />
  <ProductFeatures
    :features="generalFeatures"
    heading="Tudo que você precisa para emitir documentos fiscais"
    subheading="Funcionalidades focadas na emissão fiscal eletrônica, com conformidade tributária e facilidade de uso."
  />
  <ProductPlans :plans="plans" />
  <CtaSection
    title="Pronto para emitir suas notas com o CIAF Emissor?"
    subtitle="Fale com nosso time e comece a emitir NF-e e NFC-e hoje mesmo. Atendimento personalizado e sem compromisso."
    cta-label="Ver planos e preços"
    cta-to="#planos"
  />
</template>
