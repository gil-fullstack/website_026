<script setup>
defineProps({
  payment: { type: Object, required: true },
  channels: { type: Array, required: true }
})
</script>

<template>
  <section class="buy-payment" aria-labelledby="buy-payment-heading">
    <div class="container">
      <header class="section-header">
        <h2 id="buy-payment-heading">{{ payment.heading }}</h2>
        <p>{{ payment.description }}</p>
      </header>

      <ul class="buy-payment__methods" role="list">
        <li v-for="method in payment.methods" :key="method.title" class="method-card">
          <span class="method-card__icon">
            <i :class="['mdi', method.icon]" aria-hidden="true" />
          </span>
          <div>
            <h3 class="method-card__title">{{ method.title }}</h3>
            <p class="method-card__desc">{{ method.description }}</p>
          </div>
        </li>
      </ul>

      <h3 class="buy-payment__channels-heading">Fale com nosso time comercial</h3>
      <ul class="buy-payment__channels" role="list">
        <li v-for="channel in channels" :key="channel.label" class="channel-card">
          <span class="channel-card__icon">
            <i :class="['mdi', channel.icon]" aria-hidden="true" />
          </span>
          <div class="channel-card__body">
            <span class="channel-card__label">{{ channel.label }}</span>
            <a
              v-if="channel.href"
              :href="channel.href"
              class="channel-card__value"
              target="_blank"
              rel="noopener noreferrer"
            >
              {{ channel.value }}
            </a>
            <span v-else class="channel-card__value channel-card__value--static">
              {{ channel.value }}
            </span>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.buy-payment {
  @include section-padding;
}

.buy-payment__methods {
  display: grid;
  grid-template-columns: 1fr;
  gap: $space-2;
  margin-top: $space-4;

  @include respond-to('sm') {
    grid-template-columns: repeat(2, 1fr);
  }
}

.method-card {
  @include flex-start;
  gap: $space-2;
  padding: $space-3;
  background-color: $color-navy-light;
  border-radius: $radius-md;

  &__icon {
    @include flex-center;
    flex-shrink: 0;
    width: 48px;
    height: 48px;
    border-radius: $radius-md;
    background-color: $color-white;
    color: $color-navy-mid;
    font-size: 24px;
  }

  &__title {
    font-size: $font-size-md;
    font-weight: 700;
    color: $color-navy;
    margin: 0;
  }

  &__desc {
    font-size: $font-size-sm;
    color: $color-gray-600;
    line-height: 1.6;
    margin: 4px 0 0;
  }
}

.buy-payment__channels-heading {
  margin-top: $space-6;
  font-size: $font-size-lg;
  color: $color-navy;
  text-align: center;
}

.buy-payment__channels {
  display: grid;
  grid-template-columns: 1fr;
  gap: $space-2;
  margin-top: $space-3;

  @include respond-to('sm') {
    grid-template-columns: repeat(2, 1fr);
  }

  @include respond-to('lg') {
    grid-template-columns: repeat(4, 1fr);
  }
}

.channel-card {
  @include flex-start;
  gap: $space-2;
  padding: $space-3;
  background-color: $color-white;
  border: 1px solid $color-gray-200;
  border-radius: $radius-md;

  &__icon {
    @include flex-center;
    flex-shrink: 0;
    width: 44px;
    height: 44px;
    border-radius: $radius-md;
    background-color: $color-navy-light;
    color: $color-navy-mid;
    font-size: 22px;
  }

  &__body {
    display: flex;
    flex-direction: column;
    gap: 2px;
    min-width: 0;
  }

  &__label {
    font-size: $font-size-xs;
    font-weight: 600;
    color: $color-gray-600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  &__value {
    font-size: $font-size-base;
    font-weight: 700;
    color: $color-navy;
    text-decoration: none;

    &--static {
      font-weight: 600;
      color: $color-gray-800;
    }
  }

  a.channel-card__value {
    @include focus-ring;

    &:hover {
      color: $color-red;
    }
  }
}
</style>
