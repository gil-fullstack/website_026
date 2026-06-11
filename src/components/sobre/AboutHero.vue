<script setup>
defineProps({
  badge: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true }
})
</script>

<template>
  <section class="about-hero" aria-labelledby="about-hero-heading">
    <div class="about-hero__bg-shape" aria-hidden="true" />

    <div class="container about-hero__inner">
      <span class="about-hero__badge">
        <i class="mdi mdi-domain" aria-hidden="true" />
        {{ badge }}
      </span>

      <h1 id="about-hero-heading" class="about-hero__title">{{ title }}</h1>
      <p class="about-hero__desc">{{ description }}</p>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.about-hero {
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
}
</style>
