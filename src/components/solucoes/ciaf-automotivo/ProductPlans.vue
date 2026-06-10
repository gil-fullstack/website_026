<script setup>
defineProps({
  plans: { type: Array, required: true }
})
</script>

<template>
  <section id="planos" class="product-plans" aria-labelledby="plans-heading">
    <div class="container">
      <header class="section-header">
        <h2 id="plans-heading">Escolha a versão ideal para sua oficina</h2>
        <p>Duas versões do CIAF Automotivo, com ou sem emissão fiscal, sempre com suporte gratuito incluído.</p>
      </header>

      <div class="plans-grid" role="list">
        <article
          v-for="plan in plans"
          :key="plan.slug"
          class="plan-card"
          :class="`plan-card--${plan.highlightColor}`"
          role="listitem"
        >
          <div class="plan-card__top">
            <span class="plan-card__highlight" :class="`plan-card__highlight--${plan.highlightColor}`">
              {{ plan.highlight }}
            </span>

            <div class="plan-card__icon-wrap" aria-hidden="true">
              <i :class="['mdi', plan.icon]" />
            </div>

            <h3 class="plan-card__name">{{ plan.name }}</h3>
            <p class="plan-card__audience">{{ plan.targetAudience }}</p>
          </div>

          <div class="plan-card__price">
            <span class="plan-card__price-label">A partir de</span>
            <span class="plan-card__price-value">{{ plan.prices[0].price }}</span>
            <span class="plan-card__price-period">{{ plan.prices[0].period }}</span>
            <span class="plan-card__price-note">no plano {{ plan.prices[0].label.toLowerCase() }}</span>
          </div>

          <p class="plan-card__desc">{{ plan.description }}</p>

          <ul class="plan-card__differentials" role="list">
            <li
              v-for="diff in plan.differentials"
              :key="diff"
              class="plan-card__diff-item"
            >
              <i class="mdi mdi-check-circle-outline" aria-hidden="true" />
              <span>{{ diff }}</span>
            </li>
          </ul>

          <RouterLink
            :to="`/solucoes/ciaf-automotivo/${plan.slug}`"
            class="plan-card__cta"
            :class="`plan-card__cta--${plan.highlightColor}`"
            :aria-label="`Ver planos e preços do ${plan.name}`"
          >
            Ver planos e preços
            <i class="mdi mdi-arrow-right" aria-hidden="true" />
          </RouterLink>
        </article>
      </div>

      <p class="plans-disclaimer">
        <i class="mdi mdi-information-outline" aria-hidden="true" />
        Não sabe qual versão escolher? A diferença entre elas é a emissão de NF-e, NFC-e e SAT —
        disponível apenas no <RouterLink to="/solucoes/ciaf-automotivo/ciaf-auto-fiscal">CIAF Auto Fiscal</RouterLink>.
      </p>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.product-plans {
  background-color: $color-gray-100;
  @include section-padding;
}

.plans-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: $space-3;

  @include respond-to('md') {
    grid-template-columns: repeat(2, 1fr);
  }
}

.plan-card {
  background: $color-white;
  border-radius: $radius-md;
  border: 2px solid $color-gray-200;
  padding: $space-4 $space-3;
  display: flex;
  flex-direction: column;
  gap: $space-2;
  transition: transform $transition-base, box-shadow $transition-base, border-color $transition-base;

  &:hover {
    transform: translateY(-4px);
    box-shadow: $shadow-card-hover;
  }

  &--red:hover  { border-color: $color-red; }
  &--navy:hover { border-color: $color-navy-mid; }

  &__top {
    display: flex;
    flex-direction: column;
    gap: $space-1;
  }

  &__highlight {
    display: inline-block;
    width: fit-content;
    padding: 3px 10px;
    border-radius: $radius-full;
    font-size: $font-size-xs;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.8px;
    margin-bottom: 4px;

    &--red  { background: $color-red;  color: $color-white; }
    &--navy { background: $color-navy; color: $color-white; }
  }

  &__icon-wrap {
    @include flex-center;
    width: 56px;
    height: 56px;
    background-color: $color-navy-light;
    border-radius: $radius-md;
    flex-shrink: 0;

    .mdi {
      font-size: 28px;
      color: $color-navy;
    }
  }

  &__name {
    font-size: $font-size-lg;
    font-weight: 800;
    color: $color-navy;
    margin: 0;
    line-height: 1.2;
  }

  &__audience {
    font-size: $font-size-xs;
    color: $color-gray-600;
    line-height: 1.5;
    margin: 0;
    font-style: italic;
  }

  &__price {
    display: flex;
    align-items: baseline;
    flex-wrap: wrap;
    gap: 4px;
    padding: $space-2 $space-2;
    background-color: $color-gray-100;
    border-radius: $radius-md;
    margin-block: $space-1;
  }

  &__price-label {
    width: 100%;
    font-size: $font-size-xs;
    font-weight: 600;
    color: $color-gray-600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  &__price-value {
    font-size: $font-size-2xl;
    font-weight: 800;
    color: $color-navy;
    line-height: 1;
  }

  &__price-period {
    font-size: $font-size-sm;
    font-weight: 600;
    color: $color-gray-600;
    line-height: 1;
  }

  &__price-note {
    width: 100%;
    font-size: $font-size-xs;
    color: $color-gray-400;
    font-style: italic;
  }

  &__desc {
    font-size: $font-size-sm;
    color: $color-gray-600;
    line-height: 1.65;
    margin: 0;
    flex: 1;
  }

  &__differentials {
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: $space-2 0;
    border-top: 1px solid $color-gray-200;
    border-bottom: 1px solid $color-gray-200;
  }

  &__diff-item {
    @include flex-start;
    gap: 8px;
    font-size: $font-size-sm;
    color: $color-gray-800;

    .mdi {
      font-size: 16px;
      color: #22c55e;
      flex-shrink: 0;
    }
  }

  &__cta {
    @include btn-base;
    justify-content: center;
    width: 100%;
    margin-top: auto;
    font-size: $font-size-sm;

    .mdi { transition: transform $transition-fast; }

    &:hover .mdi { transform: translateX(3px); }

    &--red  { @include btn-primary; }
    &--navy {
      background-color: $color-navy;
      color: $color-white;
      border-color: $color-navy;

      &:hover {
        background-color: $color-navy-dark;
        border-color: $color-navy-dark;
        transform: translateY(-1px);
      }
    }
  }
}

.plans-disclaimer {
  @include flex-start;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: $space-4;
  padding: $space-3;
  background-color: $color-white;
  border: 1px solid $color-gray-200;
  border-radius: $radius-md;
  font-size: $font-size-sm;
  color: $color-gray-600;
  line-height: 1.6;

  .mdi {
    font-size: 18px;
    color: $color-navy-mid;
    flex-shrink: 0;
  }

  a {
    color: $color-navy-mid;
    font-weight: 600;
    text-decoration: none;

    &:hover {
      color: $color-red;
      text-decoration: underline;
    }
  }
}
</style>
