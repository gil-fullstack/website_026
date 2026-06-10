<script setup>
import { product, generalFeatures, plans } from '@/data/ciafEssencial.js'

import ProductBreadcrumb from '@/components/solucoes/ProductBreadcrumb.vue'
import ProductHero       from '@/components/solucoes/ciaf-essencial/ProductHero.vue'
import ProductFeatures   from '@/components/solucoes/ciaf-professional/ProductFeatures.vue'
import ProductPlans      from '@/components/solucoes/ciaf-essencial/ProductPlans.vue'
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
    heading="Tudo que seu negócio precisa para começar"
    subheading="Cadastros, vendas, financeiro, estoque e emissão fiscal completa em um sistema simples e 100% online."
  />
  <ProductPlans :plans="plans" />
  <CtaSection
    title="Pronto para simplificar a gestão do seu negócio?"
    subtitle="Fale com nosso time e descubra como o CIAF Essencial pode organizar suas vendas, financeiro e emissão fiscal. Atendimento personalizado e sem compromisso."
    cta-label="Ver investimento"
    cta-to="#planos"
  />
</template>
