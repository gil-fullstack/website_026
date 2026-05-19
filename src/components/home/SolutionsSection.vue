<script setup>
const products = [
  {
    id: 1,
    name: 'CIAF Professional',
    icon: 'mdi-briefcase-outline',
    description: 'ERP completo para gestão empresarial integrada: financeiro, estoque, vendas e fiscal em um único sistema.',
    tag: 'Mais popular'
  },
  {
    id: 2,
    name: 'CIAF Emissor',
    icon: 'mdi-file-document-outline',
    description: 'Emissão ágil de NF-e, NFC-e e demais documentos fiscais com total conformidade tributária.',
    tag: null
  },
  {
    id: 3,
    name: 'CIAF Automotivo',
    icon: 'mdi-car-wrench',
    description: 'Gestão completa para oficinas mecânicas e lojas de autopeças: OS, estoque e controle de serviços.',
    tag: null
  },
  {
    id: 4,
    name: 'Petsystem',
    icon: 'mdi-paw',
    description: 'Sistema especializado para pet shops e clínicas veterinárias com agenda, prontuário e vendas.',
    tag: null
  },
  {
    id: 5,
    name: 'CIAF Essencial',
    icon: 'mdi-star-circle-outline',
    description: 'Versão enxuta e acessível para micro e pequenos negócios que precisam de controle sem complexidade.',
    tag: 'Para pequenos negócios'
  },
  {
    id: 6,
    name: 'CIAF Online Web',
    icon: 'mdi-web',
    description: 'Acesso 100% via browser, sem instalação. Gerencie sua empresa de qualquer lugar e dispositivo.',
    tag: 'Sem instalação'
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

          <RouterLink
            :to="product.id === 1 ? '/solucoes/ciaf-professional' : '#comprar'"
            class="solution-card__cta"
            :aria-label="`Saiba mais sobre ${product.name}`"
          >
            Saiba mais
            <i class="mdi mdi-arrow-right" aria-hidden="true" />
          </RouterLink>
        </article>
      </div>

      <h2 style="margin-top: 1.4%; text-align: center; color: #0c325e">Solução Online:</h2>
      <!-- ── Destaque: ERP CIAF Online ──────────────── -->
<!--      <div-->
<!--          class="featured-product"-->
<!--          target="_blank"-->
<!--          rel="noopener noreferrer"-->
<!--          aria-label="Conheça o novo ERP CIAF Online — clique para acessar o site"-->
<!--      >-->
<!--        <div class="featured-product__glow" aria-hidden="true" />-->

<!--        <div class="featured-product__content">-->
<!--          <div class="featured-product__text">-->
<!--            <div class="featured-product__badges">-->
<!--              <span class="badge badge&#45;&#45;new">-->
<!--                <i class="mdi mdi-star-four-points" aria-hidden="true" />-->
<!--                Novidade-->
<!--              </span>-->
<!--              <span class="badge badge&#45;&#45;cloud">-->
<!--                <i class="mdi mdi-cloud-outline" aria-hidden="true" />-->
<!--                100% Cloud-->
<!--              </span>-->
<!--            </div>-->

<!--            <h3 class="featured-product__title">-->
<!--              ERP CIAF Online-->
<!--              <span class="featured-product__title-accent">— gestão na nuvem</span>-->
<!--            </h3>-->

<!--            <p class="featured-product__desc">-->
<!--              O mais novo produto da CIAF: todo o poder do nosso ERP acessível de qualquer lugar,-->
<!--              sem instalação e sem servidor próprio. Seu negócio na palma da mão.-->
<!--            </p>-->

<!--            <ul class="featured-product__highlights" role="list">-->
<!--              <li-->
<!--                  v-for="item in featuredHighlights"-->
<!--                  :key="item.text"-->
<!--                  class="featured-product__highlight-item"-->
<!--              >-->
<!--                <i :class="['mdi', item.icon]" aria-hidden="true" />-->
<!--                <span>{{ item.text }}</span>-->
<!--              </li>-->
<!--            </ul>-->

<!--            <span class="featured-product__cta" aria-hidden="true">-->
<!--              Conheça o ERP CIAF Online-->
<!--              <i class="mdi mdi-arrow-right" />-->
<!--            </span>-->
<!--          </div>-->

<!--          <div class="featured-product__visual" aria-hidden="true">-->
<!--            <div class="fp-visual__orbit fp-visual__orbit&#45;&#45;outer">-->
<!--              <span class="fp-visual__planet fp-visual__planet&#45;&#45;1">-->
<!--                <i class="mdi mdi-chart-line" />-->
<!--              </span>-->
<!--              <span class="fp-visual__planet fp-visual__planet&#45;&#45;2">-->
<!--                <i class="mdi mdi-package-variant-closed" />-->
<!--              </span>-->
<!--              <span class="fp-visual__planet fp-visual__planet&#45;&#45;3">-->
<!--                <i class="mdi mdi-account-group-outline" />-->
<!--              </span>-->
<!--              <span class="fp-visual__planet fp-visual__planet&#45;&#45;4">-->
<!--                <i class="mdi mdi-cash-register" />-->
<!--              </span>-->
<!--            </div>-->
<!--            <div class="fp-visual__orbit fp-visual__orbit&#45;&#45;inner">-->
<!--              <span class="fp-visual__planet fp-visual__planet&#45;&#45;5">-->
<!--                <i class="mdi mdi-barcode-scan" />-->
<!--              </span>-->
<!--              <span class="fp-visual__planet fp-visual__planet&#45;&#45;6">-->
<!--                <i class="mdi mdi-file-chart-outline" />-->
<!--              </span>-->
<!--            </div>-->
<!--            <div class="fp-visual__core">-->
<!--              <i class="mdi mdi-cloud-sync-outline" />-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->

    </div>
    <div class="ciaf_online">
      <img src="../../assets/images/sistema.jpg">
      <div class="ciaf_online_right">
        <h2 style="text-align: center">Ciaf Online</h2>
        <h3>Faça seu teste gratuitamente e descubra todos os potenciais do ERP online Ciaf Web</h3>
        <a class="btn btn--primary">Acesse já</a>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.solutions {
  margin-top: -4%;
  background-color: $color-white;
  @include section-padding;

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
.ciaf_online{
  width: 100%;
  background: linear-gradient(135deg, $color-navy-dark 0%, $color-navy 100%);
  display: flex;
  padding: 2% 7%;
  gap: 1.4%;
  img{
    width: 70%;
    height: auto;
  }
  .ciaf_online_right{
    padding: 4% 4%;
    display: flex;
    flex-direction: column;
    background-color: #273d67;
    border-radius: 10px;
    color: white;
    justify-content: center;
    align-items: center;
    gap: 7%;
    width:30%;
    h2,
    h3 {
      color: white;
    }

    a {
      @include btn-base;
      background-color: red;
      margin-top: 7%;
      &--outline {
        background-color: red;
        color: $color-white;
        border-color: rgba($color-white, 0.5);
      }
        &:hover {
          background-color: rgba($color-white, 0.1);
          border-color: $color-white;
        }
      color: white;
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
