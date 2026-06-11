<script setup>
defineProps({
  products: { type: Array, required: true }
})

function whatsappUrl(productName) {
  const message = `Olá! Tenho interesse em comprar o ${productName}.`
  return `https://wa.me/5535984698908?text=${encodeURIComponent(message)}`
}
</script>

<template>
  <section id="planos" class="buy-plans" aria-labelledby="buy-plans-heading">
    <div class="container">
      <header class="section-header">
        <h2 id="buy-plans-heading">Planos e preços</h2>
        <p>Sistemas para cada tipo de negócio, com suporte gratuito incluído em todos os planos.</p>
      </header>

      <ul class="buy-plans__grid" role="list">
        <li v-for="product in products" :key="product.id" class="plan-card">
          <div class="plan-card__header">
            <span class="plan-card__icon">
              <i :class="['mdi', product.icon]" aria-hidden="true" />
            </span>
            <div>
              <h3 class="plan-card__name">{{ product.name }}</h3>
              <p class="plan-card__desc">{{ product.description }}</p>
            </div>
          </div>

          <ul class="plan-card__plans" role="list">
            <li v-for="plan in product.plans" :key="plan.name" class="plan-card__plan">
              <span class="plan-card__plan-name">{{ plan.name }}</span>
              <span class="plan-card__plan-price">
                {{ plan.priceMonthly }}<small>/mês</small>
              </span>
            </li>
          </ul>

          <div class="plan-card__actions">
            <RouterLink :to="product.to" class="plan-card__link">
              Ver detalhes
              <i class="mdi mdi-arrow-right" aria-hidden="true" />
            </RouterLink>
            <a
              :href="whatsappUrl(product.name)"
              class="plan-card__cta"
              target="_blank"
              rel="noopener noreferrer"
              :aria-label="`Comprar ${product.name} pelo WhatsApp`"
            >
              <i class="mdi mdi-whatsapp" aria-hidden="true" />
              Comprar
            </a>
          </div>
        </li>
      </ul>

      <p class="buy-plans__note">
        * Valores referentes ao plano anual parcelado no cartão de crédito. Consulte um consultor
        para condições de pagamento à vista ou semestral.
      </p>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.buy-plans {
  @include section-padding;
  background-color: $color-gray-100;
}

.buy-plans__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: $space-3;
  margin-top: $space-4;

  @include respond-to('md') {
    grid-template-columns: repeat(2, 1fr);
  }

  @include respond-to('xl') {
    grid-template-columns: repeat(3, 1fr);
  }
}

.buy-plans__note {
  margin-top: $space-3;
  font-size: $font-size-xs;
  color: $color-gray-400;
  text-align: center;
}

.plan-card {
  @include card-base;
  display: flex;
  flex-direction: column;
  gap: $space-2;

  &__header {
    display: flex;
    align-items: flex-start;
    gap: $space-2;
  }

  &__icon {
    @include flex-center;
    flex-shrink: 0;
    width: 48px;
    height: 48px;
    border-radius: $radius-md;
    background-color: $color-navy-light;
    color: $color-navy-mid;
    font-size: 24px;
  }

  &__name {
    font-size: $font-size-md;
    font-weight: 700;
    color: $color-gray-800;
    margin: 0;
  }

  &__desc {
    font-size: $font-size-sm;
    color: $color-gray-600;
    line-height: 1.5;
    margin: 4px 0 0;
  }

  &__plans {
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: $space-2 0;
    border-top: 1px solid $color-gray-200;
    border-bottom: 1px solid $color-gray-200;
  }

  &__plan {
    @include flex-between;
    gap: $space-1;
    font-size: $font-size-sm;
  }

  &__plan-name {
    color: $color-gray-800;
  }

  &__plan-price {
    font-weight: 700;
    color: $color-navy;
    white-space: nowrap;

    small {
      font-weight: 400;
      color: $color-gray-400;
    }
  }

  &__actions {
    display: flex;
    gap: $space-1;
    margin-top: auto;
  }

  &__link {
    @include flex-center;
    flex: 1;
    gap: 6px;
    padding: 10px 14px;
    border-radius: $radius-sm;
    border: 1px solid $color-gray-200;
    color: $color-navy;
    font-size: $font-size-sm;
    font-weight: 600;
    text-decoration: none;
    transition: border-color $transition-fast, color $transition-fast;

    .mdi { font-size: 16px; }

    &:hover {
      border-color: $color-navy-mid;
      color: $color-navy-mid;
    }

    @include focus-ring;
  }

  &__cta {
    @include flex-center;
    flex: 1;
    gap: 6px;
    padding: 10px 14px;
    border-radius: $radius-sm;
    background-color: $color-red;
    color: $color-white;
    font-size: $font-size-sm;
    font-weight: 700;
    text-decoration: none;
    transition: background-color $transition-fast;

    .mdi { font-size: 16px; }

    &:hover {
      background-color: $color-red-dark;
    }

    @include focus-ring;
  }
}
</style>
