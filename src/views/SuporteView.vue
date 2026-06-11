<script setup>
import { supportHero, supportOptions, supportChannels, supportFaq } from '@/data/suporte.js'

import ProductBreadcrumb from '@/components/solucoes/ProductBreadcrumb.vue'
import SupportHero from '@/components/suporte/SupportHero.vue'
import SupportOptions from '@/components/suporte/SupportOptions.vue'
import SupportChannels from '@/components/suporte/SupportChannels.vue'
import SupportFaq from '@/components/suporte/SupportFaq.vue'
import CtaSection from '@/components/home/CtaSection.vue'

const breadcrumb = [
  { label: 'Início', to: '/' },
  { label: 'Suporte' }
]
</script>

<template>
  <ProductBreadcrumb :items="breadcrumb" />
  <SupportHero
    :badge="supportHero.badge"
    :title="supportHero.title"
    :description="supportHero.description"
    :highlights="supportHero.highlights"
  />
  <SupportOptions :options="supportOptions" />
  <SupportChannels :channels="supportChannels" />
  <SupportFaq :items="supportFaq" />
  <CtaSection
    title="Ainda precisa de ajuda?"
    subtitle="Nosso time está pronto para atender você. Fale agora pelo WhatsApp ou conheça as soluções CIAF para o seu negócio."
    cta-label="Ver soluções"
    cta-to="/#solucoes"
  />
</template>
