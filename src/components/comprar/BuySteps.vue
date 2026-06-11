<script setup>
defineProps({
  steps: { type: Array, required: true }
})
</script>

<template>
  <section class="buy-steps" aria-labelledby="buy-steps-heading">
    <div class="container">
      <h2 id="buy-steps-heading" class="visually-hidden">Como comprar</h2>

      <ul class="buy-steps__grid" role="list">
        <li v-for="step in steps" :key="step.title" class="step-card">
          <span class="step-card__icon">
            <i :class="['mdi', step.icon]" aria-hidden="true" />
          </span>
          <h3 class="step-card__title">{{ step.title }}</h3>
          <p class="step-card__desc">{{ step.description }}</p>
        </li>
      </ul>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.buy-steps {
  @include section-padding;
}

.buy-steps__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: $space-3;

  @include respond-to('sm') {
    grid-template-columns: repeat(2, 1fr);
  }

  @include respond-to('lg') {
    grid-template-columns: repeat(4, 1fr);
  }
}

.step-card {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: $space-1;
  text-align: left;

  &__icon {
    @include flex-center;
    width: 48px;
    height: 48px;
    border-radius: $radius-md;
    background-color: $color-navy-light;
    color: $color-navy-mid;
    font-size: 24px;
    margin-bottom: $space-1;
  }

  &__title {
    font-size: $font-size-md;
    font-weight: 700;
    color: $color-gray-800;
    margin: 0;
  }

  &__desc {
    font-size: $font-size-sm;
    color: $color-gray-600;
    line-height: 1.6;
  }
}
</style>
