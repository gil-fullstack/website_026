<script setup>
defineProps({
  features:   { type: Array,  required: true },
  heading:    { type: String, default: 'Tudo que você precisa para gerir seu negócio' },
  subheading: { type: String, default: 'Módulos integrados que cobrem todas as áreas da sua empresa em um único sistema.' }
})
</script>

<template>
  <section class="product-features" aria-labelledby="features-heading">
    <div class="container">
      <header class="section-header">
        <h2 id="features-heading">{{ heading }}</h2>
        <p>{{ subheading }}</p>
      </header>

      <div class="features-grid" role="list">
        <div
          v-for="feature in features"
          :key="feature.id"
          class="feature-card"
          role="listitem"
        >
          <div class="feature-card__icon-wrap" aria-hidden="true">
            <i :class="['mdi', feature.icon]" />
          </div>
          <h3 class="feature-card__title">{{ feature.title }}</h3>
          <p class="feature-card__desc">{{ feature.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.product-features {
  background-color: $color-white;
  @include section-padding;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: $space-3;

  @include respond-to('lg') {
    grid-template-columns: repeat(4, 1fr);
  }
}

.feature-card {
  display: flex;
  flex-direction: column;
  gap: $space-1;
  padding: $space-3;
  border-radius: $radius-md;
  border: 1px solid $color-gray-200;
  transition: box-shadow $transition-base, transform $transition-base, border-color $transition-base;

  &:hover {
    box-shadow: $shadow-card;
    transform: translateY(-2px);
    border-color: $color-navy-light;
  }

  &__icon-wrap {
    @include flex-center;
    width: 52px;
    height: 52px;
    background-color: $color-navy-light;
    border-radius: $radius-md;
    margin-bottom: 4px;
    flex-shrink: 0;

    .mdi {
      font-size: 26px;
      color: $color-navy;
    }
  }

  &__title {
    font-size: $font-size-base;
    font-weight: 700;
    color: $color-navy;
    line-height: 1.3;
    margin: 0;
  }

  &__desc {
    font-size: $font-size-sm;
    color: $color-gray-600;
    line-height: 1.6;
    margin: 0;
  }
}
</style>