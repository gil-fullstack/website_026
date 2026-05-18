<script setup>
import { ref, onMounted } from 'vue'

const stats = [
  { id: 1, value: 5000, suffix: '+', label: 'Clientes ativos', icon: 'mdi-account-group-outline' },
  { id: 2, value: 20,   suffix: '+', label: 'Anos de mercado', icon: 'mdi-calendar-check-outline' },
  { id: 3, value: 6,    suffix: '',  label: 'Soluções disponíveis', icon: 'mdi-apps' },
  { id: 4, value: 216,   suffix: 'h', label: 'Suporte disponível Mensal', icon: 'mdi-headset' }
]

const displayed = ref(stats.map(() => 0))
const sectionRef = ref(null)
let animated = false

function animateCounters() {
  if (animated) return
  animated = true

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (prefersReduced) {
    displayed.value = stats.map(s => s.value)
    return
  }

  stats.forEach((stat, index) => {
    const duration = 1500
    const start = performance.now()

    function step(now) {
      const elapsed = now - start
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      displayed.value[index] = Math.round(eased * stat.value)
      if (progress < 1) requestAnimationFrame(step)
    }

    requestAnimationFrame(step)
  })
}

onMounted(() => {
  const observer = new IntersectionObserver(
    ([entry]) => { if (entry.isIntersecting) animateCounters() },
    { threshold: 0.3 }
  )
  if (sectionRef.value) observer.observe(sectionRef.value)
})
</script>

<template>
  <section
    ref="sectionRef"
    id="sobre"
    class="stats"
    aria-labelledby="stats-heading"
  >
    <div class="container">
      <h2 id="stats-heading" class="visually-hidden">Números da CIAF</h2>
      <div class="stats__grid" role="list">
        <div
          v-for="(stat, index) in stats"
          :key="stat.id"
          class="stat-item"
          role="listitem"
        >
          <i :class="['mdi', stat.icon, 'stat-item__icon']" aria-hidden="true" />
          <p class="stat-item__number" aria-live="polite">
            {{ stat.id === 1 ? '+' : '' }}{{ displayed[index].toLocaleString('pt-BR') }}{{ stat.suffix }}
          </p>
          <p class="stat-item__label">{{ stat.label }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.stats {
  background: linear-gradient(135deg, $color-navy 0%, $color-navy-mid 100%);
  @include section-padding;

  &__grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: $space-6 $space-3;

    @include respond-to('lg') {
      grid-template-columns: repeat(4, 1fr);
      gap: 0;
    }
  }
}

.stat-item {
  @include flex-center;
  flex-direction: column;
  gap: $space-1;
  text-align: center;
  padding: $space-2;

  @include respond-to('lg') {
    padding: $space-3;

    &:not(:last-child) {
      border-right: 1px solid rgba($color-white, 0.15);
    }
  }

  &__icon {
    font-size: 36px;
    color: rgba($color-white, 0.4);
    margin-bottom: 4px;
  }

  &__number {
    font-size: clamp(40px, 6vw, 56px);
    font-weight: 800;
    color: $color-white;
    line-height: 1;
    letter-spacing: -1px;
    margin: 0;
  }

  &__label {
    font-size: $font-size-sm;
    color: rgba($color-white, 0.65);
    text-transform: uppercase;
    letter-spacing: 0.5px;
    font-weight: 500;
    margin: 0;
  }
}

.visually-hidden {
  @include visually-hidden;
}
</style>