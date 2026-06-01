<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const slides = [
  {
    title: 'O sistema preferido<br>dos varejistas de MG<br>para <em>vender mais</em><br>sem perder o controle',
    subtitle: 'ERP + NF-e + Estoque em um único sistema. Suporte humano incluído, das 8 às 18h, sem cobrar a mais por isso.',
  },
  {
    title: 'Gestão na nuvem.<br><em>Inteligente.</em> Completo.',
    subtitle: 'Todo o poder do nosso ERP acessível de qualquer lugar, sem instalação e sem servidor próprio. Seu negócio na palma da mão!',
  },
  {
    title: 'Pronto para decolar?',
    subtitle: 'Experimente o Ciaf gratuitamente por 15 dias. Sem cartão de crédito, sem compromisso.',
  },
]

const currentSlide = ref(0)
const visible = ref(true)
let timer = null

function nextSlide() {
  visible.value = false
  setTimeout(() => {
    currentSlide.value = (currentSlide.value + 1) % slides.length
    visible.value = true
  }, 400)
}

onMounted(() => {
  const observer = new IntersectionObserver(
    entries => entries.forEach(el => {
      if (el.isIntersecting) el.target.classList.add('hero2__reveal--visible')
    }),
    { threshold: 0.1 }
  )
  document.querySelectorAll('.hero2__reveal').forEach(el => observer.observe(el))

  timer = setInterval(nextSlide, 5000)
})

onUnmounted(() => clearInterval(timer))

const chartBars = [
  { h: 55, color: 'blue' },
  { h: 70, color: 'red' },
  { h: 45, color: 'blue' },
  { h: 85, color: 'red' },
  { h: 60, color: 'blue' },
  { h: 95, color: 'red' },
  { h: 72, color: 'blue' },
]

const tableRows = [
  { produto: 'Ração Premium 15kg', qtd: 24, status: 'ok', label: 'Emitida' },
  { produto: 'Tinta Látex 18L',    qtd: 8,  status: 'ok', label: 'Emitida' },
  { produto: 'Filtro de Óleo',     qtd: 31, status: 'pend', label: 'Pendente' },
]
</script>

<template>
  <section class="hero2" id="home" aria-label="Apresentação principal">

    <!-- Decorações de fundo -->
    <div class="hero2__bg" aria-hidden="true">
      <div class="hero2__mesh hero2__mesh--red" />
      <div class="hero2__mesh hero2__mesh--blue" />
      <div class="hero2__grid" />
    </div>

    <!-- Layout principal -->
    <div class="hero2__inner container">

      <!-- Coluna esquerda -->
      <div class="hero2__left hero2__reveal">
        <div class="hero2__badge">
          <span>⭐ 4,8 / 5 &nbsp;—&nbsp; +9.000 empresas</span>
        </div>

        <div class="hero2__rotator" :class="{ 'hero2__rotator--hidden': !visible }">
          <h1 class="hero2__title" v-html="slides[currentSlide].title" />
          <p class="hero2__subtitle">{{ slides[currentSlide].subtitle }}</p>
        </div>

        <div class="hero2__ctas">
          <a href="#precos" class="hero2__btn hero2__btn--primary">
            Ver meu plano ideal &nbsp;→
          </a>
          <a
            href="https://wa.me/5535984698908"
            class="hero2__btn hero2__btn--outline"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="mdi mdi-whatsapp" aria-hidden="true" />
            Falar no WhatsApp
          </a>
        </div>

        <div class="hero2__proof" aria-label="Prova social">
          <div class="hero2__stars" aria-label="5 estrelas">
            <span v-for="n in 5" :key="n" class="hero2__star" aria-hidden="true">★</span>
          </div>
          <p class="hero2__proof-text">
            <strong>+9.000 clientes</strong> &nbsp;·&nbsp; 20 anos de mercado &nbsp;·&nbsp; Suporte 8–18h
          </p>
        </div>
      </div>

      <!-- Coluna direita — mockup de tela -->
      <div class="hero2__screen hero2__reveal" style="transition-delay: .15s" aria-hidden="true">
        <div class="hero2__screen-wrap">

          <!-- Barra do "navegador" -->
          <div class="hero2__screen-bar">
            <span class="hero2__dot hero2__dot--red" />
            <span class="hero2__dot hero2__dot--yellow" />
            <span class="hero2__dot hero2__dot--green" />
            <span class="hero2__screen-url">app.ciaf.com.br/dashboard</span>
          </div>

          <!-- Corpo do dashboard -->
          <div class="hero2__screen-body">
            <div class="hero2__screen-header">
              <span class="hero2__screen-title">Dashboard — Visão Geral</span>
              <span class="hero2__screen-date">Hoje, 28/05/2026</span>
            </div>

            <!-- KPIs -->
            <div class="hero2__kpi-row">
              <div class="hero2__kpi">
                <div class="hero2__kpi-val">R$24,8k</div>
                <div class="hero2__kpi-lbl">Vendas hoje</div>
              </div>
              <div class="hero2__kpi hero2__kpi--blue">
                <div class="hero2__kpi-val">142</div>
                <div class="hero2__kpi-lbl">Pedidos</div>
              </div>
              <div class="hero2__kpi hero2__kpi--green">
                <div class="hero2__kpi-val">98%</div>
                <div class="hero2__kpi-lbl">NF-e ok</div>
              </div>
            </div>

            <!-- Gráfico de barras -->
            <div class="hero2__chart">
              <div class="hero2__chart-title">Vendas — últimos 7 dias</div>
              <div class="hero2__chart-bars">
                <div
                  v-for="(bar, i) in chartBars"
                  :key="i"
                  class="hero2__cbar"
                  :class="`hero2__cbar--${bar.color}`"
                  :style="{ height: bar.h + '%' }"
                />
              </div>
            </div>

            <!-- Tabela -->
            <div class="hero2__table">
              <div class="hero2__table-head">
                <span>Produto</span><span>Qtd</span><span>NF-e</span>
              </div>
              <div
                v-for="(row, i) in tableRows"
                :key="i"
                class="hero2__table-row"
              >
                <span class="hero2__tval">{{ row.produto }}</span>
                <span class="hero2__tval">{{ row.qtd }}</span>
                <span>
                  <span class="hero2__tbadge" :class="`hero2__tbadge--${row.status}`">
                    {{ row.label }}
                  </span>
                </span>
              </div>
            </div>

            <!-- Nota de desenvolvimento -->
            <p class="hero2__screen-note">⚠ Substituir por screenshot real do dashboard CIAF</p>
          </div>
        </div>
      </div>

    </div>

    <!-- Seta de scroll -->
    <a href="#solucoes" class="hero2__scroll" aria-label="Ver soluções">
      <i class="mdi mdi-chevron-down" aria-hidden="true" />
    </a>

  </section>
</template>

<style lang="scss" scoped>
@use 'sass:color';
@use '@/assets/scss/variables' as *;
@use '@/assets/scss/mixins' as *;

// ── Reveal animation ──────────────────────────
.hero2__reveal {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.6s ease, transform 0.6s ease;

  &--visible {
    opacity: 1;
    transform: translateY(0);
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
    opacity: 1;
    transform: none;
  }
}

// ── Seção principal ───────────────────────────
.hero2 {
  background: $color-navy-dark;
  min-height: 100svh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  overflow: hidden;
  padding-top: 0;
  margin-top: -4%;
}

// ── Fundo decorativo ──────────────────────────
.hero2__bg {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.hero2__mesh {
  position: absolute;
  border-radius: 50%;

  &--red {
    top: -120px;
    right: -180px;
    width: 720px;
    height: 720px;
    background: radial-gradient(ellipse at center, rgba($color-red, 0.18) 0%, transparent 70%);
  }

  &--blue {
    bottom: -200px;
    left: -100px;
    width: 600px;
    height: 600px;
    background: radial-gradient(ellipse at center, rgba($color-navy-mid, 0.16) 0%, transparent 65%);
  }
}

.hero2__grid {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.025) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.025) 1px, transparent 1px);
  background-size: 60px 60px;
}

// ── Layout interno ────────────────────────────
.hero2__inner {
  position: relative;
  z-index: 2;
  display: grid;
  grid-template-columns: 1fr;
  gap: $space-8;
  align-items: center;
  padding-block: $space-9;

  @include respond-to('lg') {
    grid-template-columns: 1fr 1fr;
  }
}

// ── Rotator (fade título/subtítulo) ───────────
.hero2__rotator {
  opacity: 1;
  transform: translateY(0);
  transition: opacity 0.4s ease, transform 0.4s ease;

  &--hidden {
    opacity: 0;
    transform: translateY(8px);
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
    opacity: 1;
    transform: none;
  }
}

// ── Badge ─────────────────────────────────────
.hero2__badge {
  display: inline-block;
  margin-bottom: $space-3;

  span {
    display: inline-block;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    padding: 6px 16px;
    border-radius: $radius-full;
    background: rgba($color-white, 0.1);
    color: rgba($color-white, 0.85);
    border: 1px solid rgba($color-white, 0.18);
  }
}

// ── Título ────────────────────────────────────
.hero2__title {
  font-size: clamp(32px, 4.5vw, 52px);
  font-weight: 800;
  color: $color-white;
  line-height: 1.15;
  letter-spacing: -0.02em;
  margin-bottom: $space-3;

  em {
    color: color.adjust($color-red, $lightness: 15%);
    font-style: normal;
  }
}

// ── Subtítulo ─────────────────────────────────
.hero2__subtitle {
  font-size: clamp(15px, 1.8vw, 17px);
  color: rgba($color-white, 0.6);
  line-height: 1.7;
  margin-bottom: $space-4;
  max-width: 460px;
}

// ── CTAs ──────────────────────────────────────
.hero2__ctas {
  display: flex;
  gap: $space-2;
  flex-wrap: wrap;
  margin-bottom: $space-4;
}

.hero2__btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-family: $font-sans;
  font-weight: 700;
  border-radius: $radius-sm;
  cursor: pointer;
  border: none;
  transition: all $transition-base;
  text-decoration: none;
  font-size: 14px;
  padding: 13px 26px;

  &--primary {
    background: $color-red;
    color: $color-white;

    &:hover {
      background: color.adjust($color-red, $lightness: -8%);
      transform: translateY(-1px);
      box-shadow: 0 6px 20px rgba($color-red, 0.35);
    }
  }

  &--outline {
    background: transparent;
    color: $color-white;
    border: 2px solid rgba($color-white, 0.3);
    padding: 11px 24px;

    &:hover {
      background: rgba($color-white, 0.08);
      border-color: rgba($color-white, 0.5);
    }
  }

  &:focus-visible {
    outline: 3px solid rgba($color-navy-mid, 0.6);
    outline-offset: 2px;
  }

  .mdi {
    font-size: 18px;
  }
}

// ── Prova social ──────────────────────────────
.hero2__proof {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
}

.hero2__stars {
  display: flex;
  gap: 2px;
}

.hero2__star {
  color: #fbbf24;
  font-size: 16px;
}

.hero2__proof-text {
  font-size: 13px;
  color: rgba($color-white, 0.4);

  strong {
    color: rgba($color-white, 0.6);
  }
}

// ── Screen mockup ─────────────────────────────
.hero2__screen {
  display: none;

  @include respond-to('lg') {
    display: block;
  }
}

.hero2__screen-wrap {
  background: linear-gradient(145deg, #1a3a5c, #0f2540);
  border-radius: $radius-md;
  border: 1px solid rgba($color-white, 0.08);
  overflow: hidden;
  box-shadow: 0 32px 80px rgba(0, 0, 0, 0.5);
}

// Barra do navegador
.hero2__screen-bar {
  background: #0a1e36;
  padding: 10px 14px;
  display: flex;
  align-items: center;
  gap: 6px;
}

.hero2__dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  flex-shrink: 0;

  &--red    { background: $color-red; }
  &--yellow { background: #d97706; }
  &--green  { background: #15803d; }
}

.hero2__screen-url {
  flex: 1;
  background: rgba($color-white, 0.06);
  border-radius: 4px;
  padding: 4px 10px;
  font-size: 10px;
  color: rgba($color-white, 0.3);
  margin: 0 8px;
}

// Corpo
.hero2__screen-body {
  padding: 16px;
}

.hero2__screen-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 14px;
}

.hero2__screen-title {
  font-size: 12px;
  font-weight: 700;
  color: rgba($color-white, 0.85);
}

.hero2__screen-date {
  font-size: 10px;
  color: rgba($color-white, 0.3);
}

// KPIs
.hero2__kpi-row {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
  margin-bottom: 12px;
}

.hero2__kpi {
  background: rgba($color-white, 0.05);
  border-radius: $radius-sm;
  padding: 10px 12px;
  border-left: 2px solid $color-red;

  &--blue  { border-left-color: $color-navy-mid; }
  &--green { border-left-color: #15803d; }
}

.hero2__kpi-val {
  font-size: 16px;
  font-weight: 800;
  color: $color-white;
  margin-bottom: 2px;
}

.hero2__kpi-lbl {
  font-size: 9px;
  color: rgba($color-white, 0.4);
  text-transform: uppercase;
  letter-spacing: 0.06em;
}

// Gráfico
.hero2__chart {
  background: rgba($color-white, 0.04);
  border-radius: $radius-sm;
  padding: 12px;
  margin-bottom: 10px;
}

.hero2__chart-title {
  font-size: 9px;
  color: rgba($color-white, 0.35);
  text-transform: uppercase;
  letter-spacing: 0.06em;
  margin-bottom: 10px;
}

.hero2__chart-bars {
  display: flex;
  align-items: flex-end;
  gap: 6px;
  height: 52px;
}

.hero2__cbar {
  border-radius: 3px 3px 0 0;
  flex: 1;
  transition: all 0.3s;

  &--red  { background: $color-red; }
  &--blue { background: rgba($color-navy-mid, 0.7); }
}

// Tabela
.hero2__table {
  background: rgba($color-white, 0.04);
  border-radius: $radius-sm;
  overflow: hidden;
}

.hero2__table-head {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 8px;
  padding: 8px 12px;
  border-bottom: 1px solid rgba($color-white, 0.05);

  span {
    font-size: 8px;
    color: rgba($color-white, 0.3);
    text-transform: uppercase;
    letter-spacing: 0.06em;
  }
}

.hero2__table-row {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 8px;
  padding: 7px 12px;
  border-bottom: 1px solid rgba($color-white, 0.03);

  &:last-child { border-bottom: none; }
}

.hero2__tval {
  font-size: 10px;
  color: rgba($color-white, 0.7);
}

.hero2__tbadge {
  display: inline-block;
  font-size: 8px;
  padding: 1px 6px;
  border-radius: 4px;
  font-weight: 600;

  &--ok   { background: rgba(21, 128, 61, 0.25); color: #4ade80; }
  &--pend { background: rgba(217, 119, 6, 0.2);  color: #fbbf24; }
}

.hero2__screen-note {
  font-size: 9px;
  color: rgba($color-white, 0.2);
  text-align: center;
  margin-top: 8px;
  font-style: italic;
}

// ── Scroll CTA ────────────────────────────────
.hero2__scroll {
  @include flex-center;
  position: relative;
  z-index: 2;
  width: 44px;
  height: 44px;
  margin-inline: auto;
  margin-bottom: $space-4;
  color: rgba($color-white, 0.4);
  text-decoration: none;
  transition: color $transition-base;

  &:hover { color: $color-white; }

  .mdi {
    font-size: 32px;
    animation: hero2-bounce 1.8s ease-in-out infinite;
  }

  @media (prefers-reduced-motion: reduce) {
    .mdi { animation: none; }
  }
}

@keyframes hero2-bounce {
  0%, 100% { transform: translateY(0); }
  50%       { transform: translateY(8px); }
}
</style>
