<script setup>
defineProps({
  plan: { type: Object, required: true }
})

const whatsappUrl = (planName) =>
  'https://wa.me/5535984698908?text=' +
  encodeURIComponent(`Olá! Tenho interesse no plano ${planName} do CIAF Professional.`)
</script>

<template>
  <section class="sub-hero" aria-labelledby="sub-hero-heading">
    <div class="sub-hero__bg-shape" aria-hidden="true" />

    <div class="container sub-hero__inner">
      <div class="sub-hero__content">
        <span class="sub-hero__family-tag">
          <i class="mdi mdi-briefcase-check-outline" aria-hidden="true" />
          CIAF Professional
        </span>

        <div class="sub-hero__plan-badge" :class="`sub-hero__plan-badge--${plan.highlightColor}`">
          {{ plan.highlight }}
        </div>

        <h1 id="sub-hero-heading" class="sub-hero__title">{{ plan.name }}</h1>
        <p class="sub-hero__tagline">{{ plan.tagline }}</p>
        <p class="sub-hero__audience">
          <i class="mdi mdi-account-tie-outline" aria-hidden="true" />
          {{ plan.targetAudience }}
        </p>

        <div class="sub-hero__actions">
          <a
            :href="whatsappUrl(plan.name)"
            class="btn btn--primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="mdi mdi-whatsapp" aria-hidden="true" />
            Quero este plano
          </a>
          <RouterLink to="/solucoes/ciaf-professional" class="btn btn--outline">
            <i class="mdi mdi-view-grid-outline" aria-hidden="true" />
            Ver todos os planos
          </RouterLink>
        </div>

        <ul class="sub-hero__differentials" aria-label="Diferenciais do plano">
          <li
            v-for="diff in plan.differentials"
            :key="diff"
            class="sub-hero__diff-item"
          >
            <i class="mdi mdi-check-circle" aria-hidden="true" />
            <span>{{ diff }}</span>
          </li>
        </ul>
      </div>

      <div class="sub-hero__icon-display" aria-hidden="true">
        <div class="icon-display__ring icon-display__ring--outer" />
        <div class="icon-display__ring icon-display__ring--inner" />
        <div class="icon-display__core">
          <i :class="['mdi', plan.icon]" />
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.sub-hero {
  position: relative;
  background: linear-gradient(135deg, $color-navy-dark 0%, $color-navy 100%);
  overflow: hidden;

  &__bg-shape {
    position: absolute;
    width: 600px;
    height: 600px;
    background: radial-gradient(ellipse, rgba($color-navy-mid, 0.3) 0%, transparent 70%);
    top: -150px;
    right: -100px;
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
      grid-template-columns: 60% 40%;
      align-items: center;
    }
  }

  &__content {
    display: flex;
    flex-direction: column;
    gap: $space-2;
  }

  &__family-tag {
    @include flex-start;
    gap: 7px;
    font-size: $font-size-xs;
    font-weight: 700;
    color: rgba($color-white, 0.5);
    text-transform: uppercase;
    letter-spacing: 1px;

    .mdi { font-size: 14px; }
  }

  &__plan-badge {
    display: inline-block;
    width: fit-content;
    padding: 4px 12px;
    border-radius: $radius-full;
    font-size: $font-size-xs;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 1px;

    &--red  { background: $color-red;  color: $color-white; }
    &--navy { background: $color-navy-mid; color: $color-white; }
  }

  &__title {
    font-size: clamp($font-size-2xl, 4vw, $font-size-4xl);
    font-weight: 800;
    color: $color-white;
    line-height: 1.1;
    letter-spacing: -0.8px;
    margin: 0;
  }

  &__tagline {
    font-size: $font-size-lg;
    font-weight: 400;
    color: rgba($color-white, 0.7);
    line-height: 1.4;
    margin: 0;
  }

  &__audience {
    @include flex-start;
    gap: 8px;
    font-size: $font-size-sm;
    color: rgba($color-white, 0.55);
    font-style: italic;
    margin: 0;

    .mdi { font-size: 16px; color: rgba($color-white, 0.35); }
  }

  &__actions {
    display: flex;
    flex-wrap: wrap;
    gap: $space-2;
    margin-top: $space-1;
  }

  &__differentials {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: $space-2;
    padding-top: $space-2;
    border-top: 1px solid rgba($color-white, 0.1);
  }

  &__diff-item {
    @include flex-start;
    gap: 8px;
    font-size: $font-size-sm;
    color: rgba($color-white, 0.8);

    .mdi {
      font-size: 16px;
      color: #4ade80;
      flex-shrink: 0;
    }
  }

  &__icon-display {
    display: none;

    @include respond-to('lg') {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 280px;
    }
  }
}

.btn {
  @include btn-base;
  &--primary { @include btn-primary; }
  &--outline  { @include btn-outline-white; }
}

.icon-display {
  &__ring {
    position: absolute;
    border-radius: 50%;
    border: 1px dashed rgba($color-white, 0.12);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    &--outer { width: 240px; height: 240px; }
    &--inner { width: 160px; height: 160px; border-style: solid; border-color: rgba($color-white, 0.08); }
  }

  &__core {
    @include flex-center;
    position: relative;
    width: 90px;
    height: 90px;
    background: rgba($color-white, 0.08);
    border: 2px solid rgba($color-white, 0.16);
    border-radius: 50%;
    backdrop-filter: blur(8px);
    z-index: 1;

    .mdi {
      font-size: 44px;
      color: rgba($color-white, 0.9);
    }
  }
}
</style>
