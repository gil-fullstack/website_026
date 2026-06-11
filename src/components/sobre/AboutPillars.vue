<script setup>
defineProps({
  pillars: { type: Array, required: true }
})
</script>

<template>
  <section class="about-pillars" aria-labelledby="about-pillars-heading">
    <div class="container">
      <h2 id="about-pillars-heading" class="visually-hidden">Missão, visão e valores</h2>

      <ul class="about-pillars__grid" role="list">
        <li v-for="pillar in pillars" :key="pillar.id" class="pillar-card">
          <span class="pillar-card__icon">
            <i :class="['mdi', pillar.icon]" aria-hidden="true" />
          </span>
          <h3 class="pillar-card__title">{{ pillar.title }}</h3>
          <p class="pillar-card__desc">{{ pillar.description }}</p>
        </li>
      </ul>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.about-pillars {
  @include section-padding;

  &__grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: $space-3;

    @include respond-to('md') {
      grid-template-columns: repeat(3, 1fr);
    }
  }
}

.pillar-card {
  @include card-base;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: $space-1;

  &__icon {
    @include flex-center;
    width: 56px;
    height: 56px;
    border-radius: $radius-md;
    background-color: $color-navy-light;
    color: $color-navy-mid;
    font-size: 28px;
    margin-bottom: $space-1;
  }

  &__title {
    font-size: $font-size-lg;
    font-weight: 700;
    color: $color-navy;
    margin: 0;
  }

  &__desc {
    font-size: $font-size-sm;
    color: $color-gray-600;
    line-height: 1.7;
  }
}

.visually-hidden {
  @include visually-hidden;
}
</style>
