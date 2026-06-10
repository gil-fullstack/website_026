<script setup>
import { product, generalFeatures, plans } from '@/data/ciafAutomotivo.js'

import ProductBreadcrumb from '@/components/solucoes/ProductBreadcrumb.vue'
import ProductHero       from '@/components/solucoes/ciaf-automotivo/ProductHero.vue'
import ProductFeatures   from '@/components/solucoes/ciaf-professional/ProductFeatures.vue'
import ProductPlans      from '@/components/solucoes/ciaf-automotivo/ProductPlans.vue'
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
    heading="Tudo que sua oficina precisa em um só sistema"
    subheading="Módulos integrados para gerenciar clientes, veículos, estoque, financeiro e ordens de serviço com praticidade."
  />
  <ProductPlans :plans="plans" />
  <CtaSection
    title="Pronto para organizar a gestão da sua oficina?"
    subtitle="Fale com nosso time e descubra qual versão do CIAF Automotivo é ideal para o seu negócio. Atendimento personalizado e sem compromisso."
    cta-label="Ver planos e preços"
    cta-to="#planos"
  />
</template>
