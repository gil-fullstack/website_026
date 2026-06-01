<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import foguete from '@/assets/images/foguete.jpg'
import empresario from '@/assets/images/empresario.jpg'

const slides = [
  {
    bg: foguete,
    title: 'Soluções completas',
    titleHighlight: 'para o seu negócio',
    subtitle: 'Software ERP, automação e gestão empresarial com <strong>suporte gratuito das 8 às 18hs</strong>. Tecnologia que cresce junto com a sua empresa.',
  },
  {
    bg: empresario,
    title: 'ERP Ciaf online',
    titleHighlight: 'liberdade para acessar',
    subtitle: 'Todo o poder do nosso ERP acessível de qualquer lugar, sem instalação e sem servidor próprio. Seu negócio na palma da mão.',
  },
]

const current = ref(0)
let timer = null

function goTo(index) {
  current.value = index
  restartTimer()
}

function next() {
  current.value = (current.value + 1) % slides.length
}

function startTimer() {
  timer = setInterval(next, 7000)
}

function stopTimer() {
  clearInterval(timer)
  timer = null
}

function restartTimer() {
  stopTimer()
  startTimer()
}

onMounted(startTimer)
onUnmounted(stopTimer)
</script>

<template>
  <section class="hero" aria-label="Apresentação principal">

    <div
      v-for="(slide, i) in slides"
      :key="i"
      class="hero__bg"
      :style="{ backgroundImage: `url(${slide.bg})` }"
      :class="{ 'hero__bg--active': i === current }"
      aria-hidden="true"
    />

    <div class="container hero__inner">
      <Transition name="hero-fade" mode="out-in">
        <div :key="current" class="hero__content">
          <span class="hero__badge">
            <i class="mdi mdi-check-circle" aria-hidden="true" />
            Mais de 20 anos de mercado
          </span>

          <h1 class="hero__title">
            {{ slides[current].title }}<br>
            <span class="hero__title--highlight">{{ slides[current].titleHighlight }}</span>
          </h1>

          <p class="hero__subtitle" v-html="slides[current].subtitle" />

          <div class="hero__actions">
            <a href="#solucoes" class="btn btn--primary">
              <i class="mdi mdi-rocket-launch-outline" aria-hidden="true" />
              Conheça nossas soluções
            </a>
            <a
              href="https://wa.me/5535984698908"
              class="btn btn--outline"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="mdi mdi-whatsapp" aria-hidden="true" />
              Falar no WhatsApp
            </a>
          </div>

          <div class="hero__trust" aria-label="Indicadores de confiança">
            <div class="trust-item">
              <i class="mdi mdi-shield-check-outline" aria-hidden="true" />
              <span>Suporte gratuito</span>
            </div>
            <div class="trust-item">
              <i class="mdi mdi-clock-check-outline" aria-hidden="true" />
              <span>Help Desk das 8 às 18hs</span>
            </div>
            <div class="trust-item">
              <i class="mdi mdi-account-group-outline" aria-hidden="true" />
              <span>+5.000 clientes</span>
            </div>
          </div>
        </div>
      </Transition>

      <div class="hero__visual" aria-hidden="true">
        <div class="visual__card visual__card--main">
          <div class="visual__card-header">
            <span class="visual__dot visual__dot--red" />
            <span class="visual__dot visual__dot--yellow" />
            <span class="visual__dot visual__dot--green" />
          </div>
          <div class="visual__card-content">
            <div class="visual__stat">
              <span class="visual__stat-number">+32%</span>
              <span class="visual__stat-label">Produtividade</span>
              <div class="visual__bar">
                <div class="visual__bar-fill" style="width: 78%" />
              </div>
            </div>
            <div class="visual__stat">
              <span class="visual__stat-number">+5k</span>
              <span class="visual__stat-label">Clientes ativos</span>
              <div class="visual__bar">
                <div class="visual__bar-fill visual__bar-fill--red" style="width: 92%" />
              </div>
            </div>
            <div class="visual__stat">
              <span class="visual__stat-number">Das 8 às 18hs</span>
              <span class="visual__stat-label">Suporte disponível</span>
              <div class="visual__bar">
                <div class="visual__bar-fill" style="width: 100%" />
              </div>
            </div>
          </div>
        </div>

        <div class="visual__card visual__card--badge">
          <i class="mdi mdi-headset" />
          <span>Suporte Gratuito</span>
        </div>

        <div class="visual__card visual__card--badge visual__card--badge-bottom">
          <i class="mdi mdi-update" />
          <span>Sempre atualizado</span>
        </div>
      </div>
    </div>

    <div class="hero__dots" role="tablist" aria-label="Navegar entre slides">
      <button
        v-for="(slide, i) in slides"
        :key="i"
        class="hero__dot"
        :class="{ 'hero__dot--active': i === current }"
        @click="goTo(i)"
        :aria-label="`Ir para slide ${i + 1}`"
        :aria-selected="i === current"
        role="tab"
      />
    </div>

    <a href="#solucoes" class="hero__scroll-cta" aria-label="Ver soluções">
      <i class="mdi mdi-chevron-down hero__scroll-icon" aria-hidden="true" />
    </a>
  </section>
</template>

<style lang="scss" scoped>
.hero {
  position: relative;
  background-color: $color-navy-dark;
  min-height: calc(100svh - 70px);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  margin-top: -3%;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      105deg,
      rgba($color-navy-dark, 0.95) 0%,
      rgba($color-navy, 0.85)      40%,
      rgba($color-navy, 0.60)      65%,
      rgba($color-navy-dark, 0.35) 100%
    );
    z-index: 1;

    @media (max-width: #{$bp-lg - 1px}) {
      background: linear-gradient(
        to bottom,
        rgba($color-navy-dark, 0.88) 0%,
        rgba($color-navy, 0.82)      100%
      );
    }
  }

  &__bg {
    position: absolute;
    inset: 0;
    background-size: cover;
    background-position: center top;
    background-repeat: no-repeat;
    opacity: 0;
    transition: opacity 1s ease-in-out;
    z-index: 0;

    &--active {
      opacity: 1;
    }

    @media (prefers-reduced-motion: reduce) {
      transition: none;
    }
  }

  &__inner {
    display: flex;
    align-items: center;
    gap: $space-8;
    padding-block: $space-10;
    flex: 1;
    position: relative;
    z-index: 2;

    @include respond-to('lg') {
      display: grid;
      grid-template-columns: 55% 45%;
    }
  }

  // ── Conteúdo texto ────────────────────────────
  &__content {
    display: flex;
    flex-direction: column;
    gap: $space-3;
  }

  &__badge {
    @include flex-start;
    gap: 8px;
    width: fit-content;
    padding: 8px 16px;
    background-color: rgba($color-white, 0.12);
    border: 1px solid rgba($color-white, 0.2);
    border-radius: $radius-full;
    color: rgba($color-white, 0.9);
    font-size: $font-size-sm;
    font-weight: 500;

    .mdi {
      color: #4ade80;
      font-size: 16px;
    }
  }

  &__title {
    font-size: clamp(32px, 5vw, 56px);
    font-weight: 800;
    color: $color-white;
    line-height: 1.12;
    letter-spacing: -1px;
    margin: 0;

    &--highlight {
      color: rgba($color-white, 0.7);
    }
  }

  &__subtitle {
    font-size: clamp($font-size-base, 2vw, $font-size-lg);
    color: rgba($color-white, 0.8);
    line-height: 1.65;
    max-width: 520px;

    :deep(strong) {
      color: $color-white;
      font-weight: 600;
    }
  }

  &__actions {
    display: flex;
    flex-wrap: wrap;
    gap: $space-2;
    margin-top: $space-1;
  }

  &__trust {
    display: flex;
    flex-wrap: wrap;
    gap: $space-2;
    margin-top: $space-1;
  }

  // ── Dots de navegação ─────────────────────────
  &__dots {
    display: flex;
    gap: 8px;
    justify-content: center;
    position: relative;
    z-index: 2;
    margin-bottom: $space-2;
  }

  &__dot {
    width: 8px;
    height: 8px;
    border-radius: $radius-full;
    background: rgba($color-white, 0.35);
    border: none;
    cursor: pointer;
    padding: 0;
    transition: background 0.3s ease, width 0.3s ease;

    &--active {
      background: $color-white;
      width: 24px;
      border-radius: 4px;
    }

    &:hover:not(.hero__dot--active) {
      background: rgba($color-white, 0.65);
    }

    @media (prefers-reduced-motion: reduce) {
      transition: none;
    }
  }

  &__scroll-cta {
    @include flex-center;
    width: 44px;
    height: 44px;
    margin-inline: auto;
    margin-bottom: $space-4;
    color: rgba($color-white, 0.5);
    text-decoration: none;
    transition: color $transition-base;
    position: relative;
    z-index: 2;

    &:hover {
      color: $color-white;
    }
  }

  &__scroll-icon {
    font-size: 32px;
    animation: bounce 1.8s ease-in-out infinite;

    @media (prefers-reduced-motion: reduce) {
      animation: none;
    }
  }
}

// ── Trust items ───────────────────────────────
.trust-item {
  @include flex-start;
  gap: 6px;
  font-size: $font-size-sm;
  color: rgba($color-white, 0.7);

  .mdi {
    font-size: 16px;
    color: rgba($color-white, 0.5);
  }
}

// ── Botões ────────────────────────────────────
.btn {
  @include btn-base;

  &--primary {
    @include btn-primary;
  }

  &--outline {
    @include btn-outline-white;
  }
}

// ── Visual / card dashboard ───────────────────
.hero__visual {
  position: relative;
  display: none;

  @include respond-to('lg') {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 380px;
  }
}

.visual__card {
  background: rgba($color-white, 0.07);
  backdrop-filter: blur(12px);
  border: 1px solid rgba($color-white, 0.15);
  border-radius: $radius-md;
  padding: $space-3;

  &--main {
    width: 280px;
  }

  &__header {
    display: flex;
    gap: 6px;
    margin-bottom: $space-2;
  }

  &-header {
    display: flex;
    gap: 6px;
    margin-bottom: $space-2;
  }

  &-content {
    display: flex;
    flex-direction: column;
    gap: $space-2;
  }

  &--badge {
    position: absolute;
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 12px 16px;
    font-size: $font-size-sm;
    font-weight: 600;
    color: $color-white;
    background: rgba($color-red, 0.85);
    border-color: rgba($color-red, 0.3);
    width: auto;
    right: 0;
    top: 20px;
    backdrop-filter: blur(8px);

    .mdi {
      font-size: 20px;
    }

    &.visual__card--badge-bottom {
      background: rgba($color-navy-mid, 0.85);
      border-color: rgba($color-navy-mid, 0.3);
      top: auto;
      bottom: 20px;
      right: -20px;
    }
  }
}

.visual__dot {
  display: block;
  width: 10px;
  height: 10px;
  border-radius: 50%;

  &--red    { background: #ff5f57; }
  &--yellow { background: #ffbd2e; }
  &--green  { background: #28c840; }
}

.visual__stat {
  display: flex;
  flex-direction: column;
  gap: 4px;

  &-number {
    font-size: $font-size-xl;
    font-weight: 700;
    color: $color-white;
    line-height: 1;
  }

  &-label {
    font-size: $font-size-xs;
    color: rgba($color-white, 0.6);
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }
}

.visual__bar {
  height: 4px;
  background: rgba($color-white, 0.12);
  border-radius: 2px;
  overflow: hidden;

  &-fill {
    height: 100%;
    background: $color-navy-mid;
    border-radius: 2px;
    transition: width 1s ease;

    &--red {
      background: $color-red;
    }
  }
}

// ── Transição do conteúdo texto ───────────────
.hero-fade-enter-active {
  transition: opacity 0.4s ease, transform 0.4s ease;
}

.hero-fade-leave-active {
  transition: opacity 0.25s ease, transform 0.25s ease;
}

.hero-fade-enter-from {
  opacity: 0;
  transform: translateY(12px);
}

.hero-fade-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}

@media (prefers-reduced-motion: reduce) {
  .hero-fade-enter-active,
  .hero-fade-leave-active {
    transition: opacity 0.2s ease;
  }

  .hero-fade-enter-from,
  .hero-fade-leave-to {
    transform: none;
  }
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(8px); }
}
</style>
