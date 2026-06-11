<script setup>
import { buyHero, buySteps, buyProducts, buyPayment, buyChannels } from '@/data/comprar.js'

import ProductBreadcrumb from '@/components/solucoes/ProductBreadcrumb.vue'
import BuyHero from '@/components/comprar/BuyHero.vue'
import BuySteps from '@/components/comprar/BuySteps.vue'
import BuyPlans from '@/components/comprar/BuyPlans.vue'
import BuyPayment from '@/components/comprar/BuyPayment.vue'
import CtaSection from '@/components/home/CtaSection.vue'

const breadcrumb = [
  { label: 'Início', to: '/' },
  { label: 'Comprar' }
]
</script>

<template>
  <ProductBreadcrumb :items="breadcrumb" />
  <BuyHero
    :badge="buyHero.badge"
    :title="buyHero.title"
    :description="buyHero.description"
    :highlights="buyHero.highlights"
  />
  <BuySteps :steps="buySteps" />
  <BuyPlans :products="buyProducts" />
  <BuyPayment :payment="buyPayment" :channels="buyChannels" />
  <CtaSection
    title="Pronto para começar?"
    subtitle="Fale agora com nosso time comercial pelo WhatsApp e encontre o plano ideal para o seu negócio."
    cta-label="Ver suporte"
    cta-to="/suporte"
  />
</template>
