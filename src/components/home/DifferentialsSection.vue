<script setup>
const differentials = [
  {
    id: 1,
    icon: 'mdi-headset',
    title: 'Suporte Gratuito',
    description: 'Nossa equipe de especialistas está sempre pronta para ajudar, sem custo adicional. Suporte incluso em todos os planos.',
    accentColor: '#dc0009'
  },
  {
    id: 2,
    icon: 'mdi-clock-check-outline',
    title: 'Atendimento 24h',
    description: 'Help Desk disponível 24 horas por dia via portal online. Seus problemas resolvidos a qualquer hora.',
    accentColor: '#0c325e'
  },
  {
    id: 3,
    icon: 'mdi-update',
    title: 'Atualizações Inclusas',
    description: 'Receba todas as atualizações do sistema automaticamente, sempre em conformidade com a legislação vigente.',
    accentColor: '#1a5fa8'
  },
  {
    id: 4,
    icon: 'mdi-shield-check-outline',
    title: 'Segurança e Conformidade',
    description: 'Software 100% adequado à legislação fiscal brasileira, reforma tributária e LGPD. Sua empresa sempre protegida.',
    accentColor: '#0c325e'
  }
]
</script>

<template>
  <section id="diferenciais" class="differentials" aria-labelledby="differentials-heading">
    <div class="container">
      <header class="section-header">
        <h2 id="differentials-heading">Por que escolher a CIAF?</h2>
        <p>Mais do que software — uma parceria para o crescimento da sua empresa.</p>
      </header>

      <div class="differentials__grid" role="list">
        <div
          v-for="item in differentials"
          :key="item.id"
          class="diff-card"
          role="listitem"
        >
          <div
            class="diff-card__icon-wrap"
            :style="{ '--accent': item.accentColor }"
            aria-hidden="true"
          >
            <i :class="['mdi', item.icon]" />
          </div>
          <div class="diff-card__body">
            <h3 class="diff-card__title">{{ item.title }}</h3>
            <p class="diff-card__desc">{{ item.description }}</p>
          </div>
          <div class="diff-card__line" :style="{ backgroundColor: item.accentColor }" aria-hidden="true" />
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.differentials {
  background-color: $color-gray-100;
  @include section-padding;

  &__grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: $space-3;

    @include respond-to('md') {
      grid-template-columns: repeat(2, 1fr);
    }

    @include respond-to('xl') {
      grid-template-columns: repeat(4, 1fr);
    }
  }
}

.diff-card {
  position: relative;
  background: $color-white;
  border-radius: $radius-md;
  padding: $space-4 $space-3;
  box-shadow: $shadow-sm;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: $space-2;
  transition: box-shadow $transition-base, transform $transition-base;

  &:hover {
    box-shadow: $shadow-card-hover;
    transform: translateY(-3px);
  }

  &__icon-wrap {
    @include flex-center;
    width: 56px;
    height: 56px;
    background-color: color-mix(in srgb, var(--accent) 12%, transparent);
    border-radius: $radius-md;
    flex-shrink: 0;

    .mdi {
      font-size: 28px;
      color: var(--accent);
    }
  }

  &__body {
    display: flex;
    flex-direction: column;
    gap: 8px;
    flex: 1;
  }

  &__title {
    font-size: $font-size-md;
    font-weight: 700;
    color: $color-navy;
    line-height: 1.3;
  }

  &__desc {
    font-size: $font-size-sm;
    color: $color-gray-600;
    line-height: 1.65;
  }

  &__line {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 3px;
    border-radius: 0 0 $radius-md $radius-md;
    transform: scaleX(0);
    transform-origin: left;
    transition: transform $transition-base;
  }

  &:hover &__line {
    transform: scaleX(1);
  }
}
</style>