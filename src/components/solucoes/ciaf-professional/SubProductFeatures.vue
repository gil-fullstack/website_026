<script setup>
defineProps({
  features: { type: Array,  required: true },
  planName: { type: String, required: true }
})
</script>

<template>
  <section class="sub-features" :aria-labelledby="`sub-features-heading-${planName}`">
    <div class="container">
      <header class="section-header">
        <h2 :id="`sub-features-heading-${planName}`">
          Funcionalidades do {{ planName }}
        </h2>
        <p>Tudo o que está incluído neste plano para a gestão da sua empresa.</p>
      </header>

      <div class="sub-features__grid" role="list">
        <div
          v-for="feature in features"
          :key="feature.label"
          class="sub-feature-item"
          role="listitem"
        >
          <div class="sub-feature-item__icon" aria-hidden="true">
            <i :class="['mdi', feature.icon]" />
          </div>
          <span class="sub-feature-item__label">{{ feature.label }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.sub-features {
  background-color: $color-white;
  @include section-padding;
}

.sub-features__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: $space-2;

  @include respond-to('sm') {
    grid-template-columns: repeat(2, 1fr);
  }

  @include respond-to('lg') {
    grid-template-columns: repeat(4, 1fr);
  }
}

.sub-feature-item {
  @include flex-start;
  gap: $space-2;
  padding: $space-2 $space-3;
  background: $color-gray-100;
  border-radius: $radius-md;
  border: 1px solid $color-gray-200;
  transition: background $transition-fast, border-color $transition-fast, transform $transition-fast;

  &:hover {
    background: $color-navy-light;
    border-color: rgba($color-navy-mid, 0.3);
    transform: translateY(-2px);
  }

  &__icon {
    @include flex-center;
    width: 40px;
    height: 40px;
    background-color: $color-white;
    border-radius: $radius-sm;
    flex-shrink: 0;
    box-shadow: $shadow-sm;

    .mdi {
      font-size: 20px;
      color: $color-navy;
    }
  }

  &__label {
    font-size: $font-size-sm;
    font-weight: 600;
    color: $color-navy;
    line-height: 1.35;
  }
}
</style>