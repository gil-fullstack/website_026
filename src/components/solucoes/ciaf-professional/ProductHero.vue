<script setup>
defineProps({
  product: { type: Object, required: true },
  plans:   { type: Array,  required: true }
})

const whatsappUrl = 'https://wa.me/5535984698908?text=' +
  encodeURIComponent('Olá! Quero saber mais sobre o CIAF Professional.')
</script>

<template>
  <section class="product-hero" aria-labelledby="product-hero-heading">
    <div class="product-hero__bg-shape" aria-hidden="true" />

    <div class="container product-hero__inner">
      <!-- Coluna esquerda: conteúdo -->
      <div class="product-hero__content">
        <span class="product-hero__badge">
          <i class="mdi mdi-desktop-classic" aria-hidden="true" />
          ERP Desktop
        </span>

        <h1 id="product-hero-heading" class="product-hero__title">
          {{ product.name }}
        </h1>

        <p class="product-hero__tagline">{{ product.tagline }}</p>
        <p class="product-hero__desc">{{ product.description }}</p>

        <div class="product-hero__actions">
          <a
            :href="whatsappUrl"
            class="btn btn--primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="mdi mdi-whatsapp" aria-hidden="true" />
            Solicitar demonstração
          </a>
          <a href="#planos" class="btn btn--outline">
            <i class="mdi mdi-view-grid-outline" aria-hidden="true" />
            Ver planos
          </a>
        </div>

        <div class="product-hero__trust">
          <span class="trust-item">
            <i class="mdi mdi-shield-check-outline" aria-hidden="true" />
            Suporte gratuito
          </span>
          <span class="trust-item">
            <i class="mdi mdi-update" aria-hidden="true" />
            Atualizações inclusas
          </span>
          <span class="trust-item">
            <i class="mdi mdi-school-outline" aria-hidden="true" />
            Treinamento incluído
          </span>
        </div>
      </div>

      <!-- Coluna direita: preview dos planos -->
      <div class="product-hero__plans-preview" aria-hidden="true">
        <p class="plans-preview__label">Planos disponíveis</p>
        <div class="plans-preview__grid">
          <div
            v-for="plan in plans"
            :key="plan.slug"
            class="plan-chip"
            :class="`plan-chip--${plan.highlightColor}`"
          >
            <i :class="['mdi', plan.icon]" />
            <span>{{ plan.name }}</span>
            <span class="plan-chip__badge">{{ plan.highlight }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.product-hero {
  position: relative;
  background: linear-gradient(135deg, $color-navy-dark 0%, $color-navy 100%);
  overflow: hidden;

  &__bg-shape {
    position: absolute;
    width: 500px;
    height: 500px;
    background: radial-gradient(ellipse, rgba($color-navy-mid, 0.35) 0%, transparent 70%);
    top: -100px;
    right: -50px;
    pointer-events: none;
    border-radius: 50%;
  }

  &__inner {
    position: relative;
    z-index: 1;
    display: grid;
    grid-template-columns: 1fr;
    gap: $space-6;
    padding-block: $space-8 $space-10;

    @include respond-to('lg') {
      grid-template-columns: 58% 42%;
      align-items: center;
    }
  }

  &__content {
    display: flex;
    flex-direction: column;
    gap: $space-3;
  }

  &__badge {
    @include flex-start;
    gap: 8px;
    width: fit-content;
    padding: 7px 14px;
    background-color: rgba($color-white, 0.1);
    border: 1px solid rgba($color-white, 0.18);
    border-radius: $radius-full;
    color: rgba($color-white, 0.85);
    font-size: $font-size-sm;
    font-weight: 600;

    .mdi { font-size: 16px; }
  }

  &__title {
    font-size: clamp($font-size-3xl, 4.5vw, $font-size-4xl);
    font-weight: 800;
    color: $color-white;
    line-height: 1.1;
    letter-spacing: -1px;
    margin: 0;
  }

  &__tagline {
    font-size: $font-size-lg;
    font-weight: 500;
    color: rgba($color-white, 0.75);
    margin: 0;
    margin-top: -$space-1;
  }

  &__desc {
    font-size: $font-size-base;
    color: rgba($color-white, 0.7);
    line-height: 1.7;
    max-width: 520px;
    margin: 0;
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

  &__plans-preview {
    display: none;

    @include respond-to('lg') {
      display: flex;
      flex-direction: column;
      gap: $space-2;
    }
  }
}

.trust-item {
  @include flex-start;
  gap: 6px;
  font-size: $font-size-sm;
  color: rgba($color-white, 0.65);

  .mdi { font-size: 16px; color: rgba($color-white, 0.4); }
}

.btn {
  @include btn-base;

  &--primary { @include btn-primary; }
  &--outline  { @include btn-outline-white; }
}

// Preview dos planos
.plans-preview {
  &__label {
    font-size: $font-size-xs;
    font-weight: 700;
    color: rgba($color-white, 0.4);
    text-transform: uppercase;
    letter-spacing: 1px;
    margin: 0;
  }

  &__grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: $space-2;
  }
}

.plan-chip {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: $space-2;
  background: rgba($color-white, 0.06);
  border: 1px solid rgba($color-white, 0.1);
  border-radius: $radius-md;
  transition: background $transition-fast, border-color $transition-fast;

  &:hover {
    background: rgba($color-white, 0.1);
    border-color: rgba($color-white, 0.2);
  }

  .mdi {
    font-size: 28px;
    color: rgba($color-white, 0.6);
  }

  span:not(.plan-chip__badge) {
    font-size: $font-size-sm;
    font-weight: 600;
    color: $color-white;
    line-height: 1.2;
  }

  &__badge {
    display: inline-block;
    width: fit-content;
    padding: 2px 8px;
    border-radius: $radius-full;
    font-size: $font-size-xs;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  &--navy .plan-chip__badge {
    background: rgba($color-navy-mid, 0.4);
    color: rgba($color-white, 0.8);
    border: 1px solid rgba($color-navy-mid, 0.5);
  }

  &--red .plan-chip__badge {
    background: rgba($color-red, 0.25);
    color: rgba($color-white, 0.9);
    border: 1px solid rgba($color-red, 0.4);
  }
}
</style>