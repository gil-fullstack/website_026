<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const slides = [
  new URL('../../assets/images/sistema.jpg', import.meta.url).href,
  new URL('../../assets/images/sistema_2.jpg', import.meta.url).href,
  new URL('../../assets/images/sistema_3.jpg', import.meta.url).href,
]

const current = ref(0)
let timer = null

function goTo(index) {
  current.value = (index + slides.length) % slides.length
}

function next() { goTo(current.value + 1) }
function prev() { goTo(current.value - 1) }

onMounted(() => {
  timer = setInterval(next, 4000)
})

onUnmounted(() => {
  clearInterval(timer)
})

const products = [
  {
    id: 1,
    name: 'CIAF Professional',
    icon: 'mdi-briefcase-outline',
    description: 'ERP completo para gestão empresarial integrada: financeiro, estoque, vendas e fiscal em um único sistema.',
    tag: 'Mais popular',
    link: '/solucoes/ciaf-professional'
  },
  {
    id: 2,
    name: 'CIAF Emissor',
    icon: 'mdi-file-document-outline',
    description: 'Emissão ágil de NF-e, NFC-e e demais documentos fiscais com total conformidade tributária.',
    tag: null,
    link: '/solucoes/ciaf-emissor'
  },
  {
    id: 3,
    name: 'CIAF Automotivo',
    icon: 'mdi-car-wrench',
    description: 'Gestão completa para oficinas mecânicas e lojas de autopeças: OS, estoque e controle de serviços.',
    tag: null,
    link: '#comprar'
  },
  {
    id: 4,
    name: 'Petsystem',
    icon: 'mdi-paw',
    description: 'Sistema especializado para pet shops e clínicas veterinárias com agenda, prontuário e vendas.',
    tag: null,
    link: '#comprar'
  },
  {
    id: 5,
    name: 'CIAF Essencial',
    icon: 'mdi-star-circle-outline',
    description: 'Versão enxuta e acessível para micro e pequenos negócios que precisam de controle sem complexidade.',
    tag: 'Para pequenos negócios',
    link: '#comprar'
  },
  {
    id: 6,
    name: 'CIAF Online Web',
    icon: 'mdi-web',
    description: 'Acesso 100% via browser, sem instalação. Gerencie sua empresa de qualquer lugar e dispositivo.',
    tag: 'Sem instalação',
    link: 'https://ciafonline.com.br'
  }
]

const featuredHighlights = [
  { icon: 'mdi-cloud-check-outline',   text: '100% na nuvem — acesse de qualquer dispositivo' },
  { icon: 'mdi-update',                text: 'Atualizações automáticas sem interrupção' },
  { icon: 'mdi-shield-lock-outline',   text: 'Dados seguros com backup em nuvem' },
  { icon: 'mdi-currency-usd-off',      text: 'Sem instalação e sem custo de infraestrutura' },
]
</script>

<template>
  <section id="solucoes" class="solutions" aria-labelledby="solutions-heading">
    <div class="container">

      <header class="section-header">
        <h2 id="solutions-heading">Nossas Soluções</h2>
        <p>Software desenvolvido para cada tipo de negócio, com suporte especializado incluído.</p>
      </header>

      <h2 style="margin-top: 2.5%; text-align: center; color: #0c325e">Soluções Desktop:</h2>
      <!-- ── Grid dos outros produtos ───────────────── -->
      <div class="solutions__grid" role="list">
        <article
          v-for="product in products"
          :key="product.id"
          class="solution-card"
          role="listitem"
        >
          <div class="solution-card__icon-wrap" aria-hidden="true">
            <i :class="['mdi', product.icon]" />
          </div>

          <div class="solution-card__body">
            <div class="solution-card__header">
              <h3 class="solution-card__name">{{ product.name }}</h3>
              <span v-if="product.tag" class="solution-card__tag">{{ product.tag }}</span>
            </div>
            <p class="solution-card__desc">{{ product.description }}</p>
          </div>

          <RouterLink v-if="product.link !== 'https://ciafonline.com.br'"
            :to="product.link"
            class="solution-card__cta"
            :aria-label="`Saiba mais sobre ${product.name}`"
          >
            Saiba mais
            <i class="mdi mdi-arrow-right" aria-hidden="true" />
          </RouterLink>
          <a
              v-else
              :href="product.link"
              target="_blank"
              style="color: #3f6993; font-weight: bold; text-decoration: none;"
          >
            Saiba mais
            <i class="mdi mdi-arrow-right" aria-hidden="true" />
          </a>
        </article>
      </div>

      <h2 style="margin-top: 1.4%; text-align: center; color: #0c325e">Solução Online:</h2>

    </div>
    <div class="ciaf_online">
      <div class="carousel" role="region" aria-label="Imagens do sistema CIAF Online">
        <div class="carousel__track">
          <img
            v-for="(src, i) in slides"
            :key="i"
            :src="src"
            :alt="`Tela do sistema CIAF Online — imagem ${i + 1}`"
            class="carousel__slide"
            :class="{ 'carousel__slide--active': i === current }"
          >
        </div>
        <button class="carousel__btn carousel__btn--prev" aria-label="Imagem anterior" @click="prev">&#8249;</button>
        <button class="carousel__btn carousel__btn--next" aria-label="Próxima imagem" @click="next">&#8250;</button>
        <div class="carousel__dots" role="tablist">
          <button
            v-for="(_, i) in slides"
            :key="i"
            class="carousel__dot"
            :class="{ 'carousel__dot--active': i === current }"
            :aria-label="`Ir para imagem ${i + 1}`"
            @click="goTo(i)"
          />
        </div>
      </div>
      <div class="ciaf_online_right">
        <h2 style="text-align: center">Ciaf Online</h2>
        <h3>Faça seu teste gratuitamente e descubra todos os potenciais do ERP online Ciaf Web</h3>
        <a class="btn btn--primary" href="https://ciafonline.com.br" target="_blank">Acesse já</a>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.solutions {
  margin-top: -4%;
  background-color: $color-white;
  @include section-padding;
  padding-bottom: $space-4;

  @include respond-to('md') {
    padding-bottom: $space-4;
  }

  @include respond-to('lg') {
    padding-bottom: $space-5;
  }

  &__grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: $space-3;
    margin-top: $space-4;

    @include respond-to('md') {
      grid-template-columns: repeat(2, 1fr);
    }

    @include respond-to('lg') {
      grid-template-columns: repeat(3, 1fr);
    }
  }
}

// ─────────────────────────────────────────────
// Banner destaque — ERP CIAF Online
// ─────────────────────────────────────────────
.ciaf_online {
  width: 100%;
  background: linear-gradient(135deg, $color-navy-dark 0%, $color-navy 100%);
  display: flex;
  flex-direction: column;
  padding: 6% 5%;
  gap: 24px;

  @include respond-to('md') {
    flex-direction: row;
    align-items: stretch;
    padding: 2% 7%;
    gap: 1.4%;
  }
}

// ── Carrossel ─────────────────────────────────
.carousel {
  position: relative;
  width: 100%;
  flex-shrink: 0;
  overflow: hidden;
  border-radius: 6px;

  @include respond-to('md') {
    width: 70%;
  }

  &__track {
    display: grid;
    width: 100%;
  }

  &__slide {
    grid-area: 1 / 1;
    width: 100%;
    height: auto;
    display: block;
    opacity: 0;
    transition: opacity 0.6s ease;

    &--active {
      opacity: 1;
    }
  }

  &__btn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(0, 0, 0, 0.35);
    color: #fff;
    border: none;
    border-radius: 50%;
    width: 36px;
    height: 36px;
    font-size: 22px;
    line-height: 1;
    cursor: pointer;
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background 0.2s;

    &:hover { background: rgba(0, 0, 0, 0.6); }

    &--prev { left: 10px; }
    &--next { right: 10px; }
  }

  &__dots {
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 8px;
    z-index: 2;
  }

  &__dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    border: none;
    background: rgba(255, 255, 255, 0.5);
    cursor: pointer;
    padding: 0;
    transition: background 0.2s, transform 0.2s;

    &--active {
      background: #fff;
      transform: scale(1.3);
    }
  }
}

.ciaf_online {
  .ciaf_online_right {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    width: 100%;
    padding: 28px 24px;
    background-color: #273d67;
    border-radius: 10px;
    color: white;
    text-align: center;

    @include respond-to('md') {
      width: 30%;
      padding: 4% 4%;
      gap: 7%;
    }

    h2,
    h3 {
      color: white;
      margin: 0;
    }

    h2 {
      font-size: clamp(1.3rem, 4vw, 1.6rem);
    }

    h3 {
      font-size: clamp(0.9rem, 3vw, 1rem);
      font-weight: 400;
      line-height: 1.5;
    }

    a {
      @include btn-base;
      background-color: red;
      color: white;
      margin-top: 4px;

      &:hover {
        background-color: rgba($color-white, 0.1);
        border-color: $color-white;
      }
    }
  }
}
.featured-product {
  position: relative;
  display: block;
  text-decoration: none;
  border-radius: $radius-lg;
  background: linear-gradient(125deg, $color-navy-dark 0%, $color-navy 45%, $color-navy-mid 100%);
  //background-color: white;
  border: 1px solid rgba($color-white, 0.08);
  overflow: hidden;
  margin-top: $space-4;
  cursor: pointer;
  transition: transform $transition-base, box-shadow $transition-base;
  width: 100%;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 16px 48px rgba($color-navy-dark, 0.4);
    .featured-product__cta .mdi {
      transform: translateX(4px);
    }
    .fp-visual__orbit--outer {
      animation-duration: 16s;
    }
    .fp-visual__orbit--inner {
      animation-duration: 8s;
    }
  }
  @include focus-ring($color-navy-mid);

  // Reflexo brilhante no topo
  &__glow {
    position: absolute;
    top: -80px;
    right: 10%;
    width: 400px;
    height: 280px;
    background: radial-gradient(ellipse, rgba($color-red, 0.18) 0%, transparent 70%);
    pointer-events: none;
    border-radius: 50%;
  }

  &__content {
    position: relative;
    z-index: 1;
    display: flex;
    align-items: center;
    gap: $space-6;
    padding: $space-5 $space-5;

    @include respond-to('md') {
      padding: $space-6 $space-8;
    }
  }

  &__text {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: $space-2;
    min-width: 0;
  }

  // ── Badges ────────────────────────────────────
  &__badges {
    display: flex;
    flex-wrap: wrap;
    gap: $space-1;
  }

  // ── Título ────────────────────────────────────
  &__title {
    font-size: clamp($font-size-2xl, 3.5vw, $font-size-3xl);
    font-weight: 800;
    color: $color-white;
    line-height: 1.15;
    letter-spacing: -0.5px;
    margin: 0;

    &-accent {
      font-weight: 400;
      color: rgba($color-white, 0.55);
      font-size: 0.65em;
      letter-spacing: 0;
    }
  }

  // ── Descrição ─────────────────────────────────
  &__desc {
    font-size: $font-size-base;
    color: rgba($color-white, 0.78);
    line-height: 1.65;
    max-width: 560px;
    margin: 0;
  }

  // ── Lista de destaques ────────────────────────
  &__highlights {
    display: grid;
    grid-template-columns: 1fr;
    gap: 10px;
    margin: $space-1 0 0;

    @include respond-to('sm') {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  &__highlight-item {
    @include flex-start;
    gap: 8px;
    font-size: $font-size-sm;
    color: rgba($color-white, 0.85);

    .mdi {
      font-size: 18px;
      color: rgba($color-white, 0.5);
      flex-shrink: 0;
    }
  }

  // ── CTA ───────────────────────────────────────
  &__cta {
    @include flex-start;
    gap: 8px;
    margin-top: $space-1;
    font-size: $font-size-base;
    font-weight: 700;
    color: $color-red;
    letter-spacing: 0.2px;

    .mdi {
      font-size: 20px;
      transition: transform $transition-base;
    }
  }

  // ── Visual orbital ────────────────────────────
  &__visual {
    position: relative;
    display: none;
    flex-shrink: 0;
    width: 220px;
    height: 220px;

    @include respond-to('lg') {
      display: block;
    }
  }
}

// ── Badges ────────────────────────────────────
.badge {
  @include flex-start;
  gap: 5px;
  padding: 5px 12px;
  border-radius: $radius-full;
  font-size: $font-size-xs;
  font-weight: 700;
  letter-spacing: 0.5px;
  text-transform: uppercase;

  .mdi {
    font-size: 12px;
  }

  &--new {
    background-color: $color-red;
    color: $color-white;
    animation: pulse-badge 2.4s ease-in-out infinite;

    @media (prefers-reduced-motion: reduce) {
      animation: none;
    }
  }

  &--cloud {
    background-color: rgba($color-white, 0.12);
    color: rgba($color-white, 0.85);
    border: 1px solid rgba($color-white, 0.18);
  }
}

// ── Orbital visual ────────────────────────────
.fp-visual {
  &__core {
    @include flex-center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 72px;
    height: 72px;
    background: rgba($color-white, 0.1);
    border: 2px solid rgba($color-white, 0.2);
    border-radius: 50%;
    backdrop-filter: blur(6px);

    .mdi {
      font-size: 34px;
      color: $color-white;
    }
  }

  &__orbit {
    position: absolute;
    top: 50%;
    left: 50%;
    border-radius: 50%;
    border: 1px dashed rgba($color-white, 0.15);
    animation: orbit-spin linear infinite;

    &--outer {
      width: 200px;
      height: 200px;
      margin-top: -100px;
      margin-left: -100px;
      animation-duration: 22s;
    }

    &--inner {
      width: 130px;
      height: 130px;
      margin-top: -65px;
      margin-left: -65px;
      animation-duration: 12s;
      animation-direction: reverse;
    }
  }

  &__planet {
    @include flex-center;
    position: absolute;
    width: 36px;
    height: 36px;
    background: rgba($color-navy-dark, 0.85);
    border: 1px solid rgba($color-white, 0.2);
    border-radius: 50%;
    backdrop-filter: blur(4px);

    .mdi {
      font-size: 16px;
      color: rgba($color-white, 0.8);
    }

    // Posições nos 4 pontos cardeais da órbita externa
    &--1 { top: -18px;  left: 50%; transform: translateX(-50%); }
    &--2 { right: -18px; top: 50%; transform: translateY(-50%); }
    &--3 { bottom: -18px; left: 50%; transform: translateX(-50%); }
    &--4 { left: -18px; top: 50%; transform: translateY(-50%); }

    // Posições na órbita interna
    &--5 { top: -18px;  left: 50%; transform: translateX(-50%); }
    &--6 { bottom: -18px; left: 50%; transform: translateX(-50%); }
  }
}

@keyframes orbit-spin {
  from { transform: translate(-50%, -50%) rotate(0deg);   }
  to   { transform: translate(-50%, -50%) rotate(360deg); }
}

@keyframes pulse-badge {
  0%, 100% { box-shadow: 0 0 0 0 rgba($color-red, 0.5); }
  50%       { box-shadow: 0 0 0 6px rgba($color-red, 0); }
}

// ─────────────────────────────────────────────
// Cards dos outros produtos
// ─────────────────────────────────────────────
.solution-card {
  @include card-base;
  display: flex;
  flex-direction: column;
  gap: $space-2;
  padding: $space-4 $space-3;

  &__icon-wrap {
    @include flex-center;
    width: 60px;
    height: 60px;
    background-color: $color-navy-light;
    border-radius: $radius-md;
    flex-shrink: 0;

    .mdi {
      font-size: 30px;
      color: $color-navy;
    }
  }

  &__body {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: $space-1;
  }

  &__header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: $space-1;
    flex-wrap: wrap;
  }

  &__name {
    font-size: $font-size-md;
    font-weight: 700;
    color: $color-navy;
    line-height: 1.3;
  }

  &__tag {
    display: inline-block;
    padding: 3px 10px;
    background-color: $color-red-light;
    color: $color-red;
    font-size: $font-size-xs;
    font-weight: 600;
    border-radius: $radius-full;
    white-space: nowrap;
    flex-shrink: 0;
  }

  &__desc {
    font-size: $font-size-sm;
    color: $color-gray-600;
    line-height: 1.6;
  }

  &__cta {
    @include flex-start;
    gap: 6px;
    font-size: $font-size-sm;
    font-weight: 600;
    color: $color-navy-mid;
    text-decoration: none;
    margin-top: auto;
    padding-top: $space-1;
    border-top: 1px solid $color-gray-200;
    transition: gap $transition-fast, color $transition-fast;

    .mdi {
      font-size: 16px;
      transition: transform $transition-fast;
    }

    &:hover {
      color: $color-red;
      gap: 10px;

      .mdi {
        transform: translateX(2px);
      }
    }

    @include focus-ring;
  }
}
</style>
