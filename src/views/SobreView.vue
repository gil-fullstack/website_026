<script setup>
import { aboutHero, aboutPillars, aboutHistory, aboutTimeline } from '@/data/sobre.js'

import ProductBreadcrumb from '@/components/solucoes/ProductBreadcrumb.vue'
import AboutHero from '@/components/sobre/AboutHero.vue'
import AboutPillars from '@/components/sobre/AboutPillars.vue'
import AboutHistory from '@/components/sobre/AboutHistory.vue'
import StatsSection from '@/components/home/StatsSection.vue'
import CtaSection from '@/components/home/CtaSection.vue'

const breadcrumb = [
  { label: 'Início', to: '/' },
  { label: 'Sobre' }
]
</script>

<template>
  <ProductBreadcrumb :items="breadcrumb" />
  <AboutHero
    :badge="aboutHero.badge"
    :title="aboutHero.title"
    :description="aboutHero.description"
  />
  <AboutPillars :pillars="aboutPillars" />
  <AboutHistory
    :heading="aboutHistory.heading"
    :paragraphs="aboutHistory.paragraphs"
    :timeline="aboutTimeline"
  />
  <StatsSection />
  <CtaSection
    title="Vamos construir esse futuro juntos?"
    subtitle="Conheça as soluções CIAF e descubra como nossa equipe pode ajudar a simplificar a gestão do seu negócio."
    cta-label="Ver soluções"
    cta-to="/#solucoes"
  />
</template>
