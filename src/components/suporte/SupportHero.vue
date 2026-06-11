<script setup>
defineProps({
  badge: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  highlights: { type: Array, default: () => [] }
})

const whatsappUrl = 'https://wa.me/5535984698908?text=' +
  encodeURIComponent('Olá! Preciso de suporte com um sistema CIAF.')
</script>

<template>
  <section class="support-hero" aria-labelledby="support-hero-heading">
    <div class="support-hero__bg-shape" aria-hidden="true" />

    <div class="container support-hero__inner">
      <span class="support-hero__badge">
        <i class="mdi mdi-lifebuoy" aria-hidden="true" />
        {{ badge }}
      </span>

      <h1 id="support-hero-heading" class="support-hero__title">{{ title }}</h1>
      <p class="support-hero__desc">{{ description }}</p>

      <div class="support-hero__actions">
        <a :href="whatsappUrl" class="btn btn--primary" target="_blank" rel="noopener noreferrer">
          <i class="mdi mdi-whatsapp" aria-hidden="true" />
          Falar no WhatsApp
        </a>
        <a href="#opcoes-suporte" class="btn btn--outline">
          <i class="mdi mdi-arrow-down" aria-hidden="true" />
          Ver canais de atendimento
        </a>
      </div>

      <div v-if="highlights.length" class="support-hero__highlights">
        <span v-for="item in highlights" :key="item.label" class="highlight-item">
          <i :class="['mdi', item.icon]" aria-hidden="true" />
          {{ item.label }}
        </span>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.support-hero {
  position: relative;
  background: linear-gradient(135deg, $color-navy-dark 0%, $color-navy 100%);
  overflow: hidden;

  &__bg-shape {
    position: absolute;
    width: 500px;
    height: 500px;
    background: radial-gradient(ellipse, rgba($color-navy-mid, 0.35) 0%, transparent 70%);
    top: -150px;
    right: -100px;
    pointer-events: none;
    border-radius: 50%;
  }

  &__inner {
    position: relative;
    z-index: 1;
    @include flex-center;
    flex-direction: column;
    gap: $space-3;
    text-align: center;
    max-width: 720px;
    margin-inline: auto;
    padding-block: $space-8 $space-9;
  }

  &__badge {
    @include flex-center;
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

  &__desc {
    font-size: $font-size-md;
    color: rgba($color-white, 0.75);
    line-height: 1.7;
    max-width: 560px;
    margin: 0;
  }

  &__actions {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: $space-2;
    margin-top: $space-1;
  }

  &__highlights {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: $space-2;
    margin-top: $space-1;
  }
}

.highlight-item {
  @include flex-center;
  gap: 6px;
  font-size: $font-size-sm;
  color: rgba($color-white, 0.65);

  .mdi { font-size: 16px; color: rgba($color-white, 0.4); }
}

.btn {
  @include btn-base;

  &--primary { @include btn-primary; }
  &--outline { @include btn-outline-white; }
}
</style>
