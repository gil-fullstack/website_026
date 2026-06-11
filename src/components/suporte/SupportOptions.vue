<script setup>
defineProps({
  options: { type: Array, required: true }
})
</script>

<template>
  <section id="opcoes-suporte" class="support-options" aria-labelledby="support-options-heading">
    <div class="container">
      <div class="section-header">
        <h2 id="support-options-heading">Como podemos ajudar?</h2>
        <p>Escolha o canal mais rápido para o seu atendimento.</p>
      </div>

      <ul class="support-options__grid" role="list">
        <li v-for="option in options" :key="option.id" class="option-card">
          <span class="option-card__icon">
            <i :class="['mdi', option.icon]" aria-hidden="true" />
          </span>
          <h3 class="option-card__title">{{ option.title }}</h3>
          <p class="option-card__desc">{{ option.description }}</p>
          <a
            :href="option.href"
            class="option-card__action"
            target="_blank"
            rel="noopener noreferrer"
          >
            {{ option.actionLabel }}
            <i class="mdi mdi-arrow-right" aria-hidden="true" />
          </a>
        </li>
      </ul>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.support-options {
  @include section-padding;

  &__grid {
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
}

.option-card {
  @include card-base;
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
    flex: 1;
  }

  &__action {
    @include flex-start;
    gap: 6px;
    margin-top: $space-1;
    font-size: $font-size-sm;
    font-weight: 700;
    color: $color-red;
    text-decoration: none;
    transition: gap $transition-fast;

    .mdi { font-size: 16px; }

    @include focus-ring;
  }

  &:hover &__action {
    gap: 10px;
  }
}
</style>
