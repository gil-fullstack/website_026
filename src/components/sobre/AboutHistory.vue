<script setup>
defineProps({
  heading: { type: String, required: true },
  paragraphs: { type: Array, required: true },
  timeline: { type: Array, required: true }
})
</script>

<template>
  <section class="about-history" aria-labelledby="about-history-heading">
    <div class="container about-history__inner">
      <div class="about-history__text">
        <h2 id="about-history-heading">{{ heading }}</h2>
        <p v-for="(paragraph, index) in paragraphs" :key="index">{{ paragraph }}</p>
      </div>

      <ol class="about-history__timeline" aria-label="Linha do tempo da CIAF">
        <li v-for="item in timeline" :key="item.id" class="timeline-item">
          <span class="timeline-item__icon">
            <i :class="['mdi', item.icon]" aria-hidden="true" />
          </span>
          <div class="timeline-item__body">
            <span class="timeline-item__year">{{ item.year }}</span>
            <h3 class="timeline-item__title">{{ item.title }}</h3>
            <p class="timeline-item__desc">{{ item.description }}</p>
          </div>
        </li>
      </ol>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.about-history {
  @include section-padding;
  background-color: $color-gray-100;

  &__inner {
    display: grid;
    grid-template-columns: 1fr;
    gap: $space-8;

    @include respond-to('lg') {
      grid-template-columns: 1fr 1fr;
      align-items: start;
    }
  }

  &__text {
    display: flex;
    flex-direction: column;
    gap: $space-2;

    h2 {
      font-size: $font-size-2xl;
      color: $color-navy;
      margin-bottom: $space-1;

      @include respond-to('lg') {
        font-size: $font-size-3xl;
      }
    }

    p {
      font-size: $font-size-base;
      color: $color-gray-600;
      line-height: 1.75;
    }
  }
}

.about-history__timeline {
  display: flex;
  flex-direction: column;
  gap: $space-3;
  list-style: none;
}

.timeline-item {
  display: flex;
  gap: $space-2;

  &__icon {
    @include flex-center;
    flex-shrink: 0;
    width: 44px;
    height: 44px;
    border-radius: $radius-full;
    background-color: $color-white;
    border: 1px solid $color-gray-200;
    color: $color-navy-mid;
    font-size: 20px;
  }

  &__body {
    display: flex;
    flex-direction: column;
    gap: 2px;
    padding-bottom: $space-1;
  }

  &__year {
    font-size: $font-size-xs;
    font-weight: 700;
    color: $color-red;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  &__title {
    font-size: $font-size-base;
    font-weight: 700;
    color: $color-navy;
    margin: 0;
  }

  &__desc {
    font-size: $font-size-sm;
    color: $color-gray-600;
    line-height: 1.6;
  }

  &:not(:last-child) {
    position: relative;

    &::after {
      content: '';
      position: absolute;
      left: 21px;
      top: 44px;
      bottom: -$space-3;
      width: 1px;
      background-color: $color-gray-200;
    }
  }
}
</style>
