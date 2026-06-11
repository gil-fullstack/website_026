<script setup>
defineProps({
  channels: { type: Array, required: true }
})
</script>

<template>
  <section class="support-channels" aria-labelledby="support-channels-heading">
    <div class="container">
      <div class="section-header">
        <h2 id="support-channels-heading">Outros canais de atendimento</h2>
        <p>Prefere falar diretamente? Use um dos contatos abaixo.</p>
      </div>

      <ul class="support-channels__grid" role="list">
        <li v-for="channel in channels" :key="channel.label" class="channel-card">
          <span class="channel-card__icon">
            <i :class="['mdi', channel.icon]" aria-hidden="true" />
          </span>
          <div class="channel-card__body">
            <span class="channel-card__label">{{ channel.label }}</span>
            <a
              v-if="channel.href"
              :href="channel.href"
              class="channel-card__value"
              target="_blank"
              rel="noopener noreferrer"
            >
              {{ channel.value }}
            </a>
            <span v-else class="channel-card__value channel-card__value--static">
              {{ channel.value }}
            </span>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.support-channels {
  @include section-padding;
  background-color: $color-gray-100;

  &__grid {
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
}

.channel-card {
  @include flex-start;
  gap: $space-2;
  padding: $space-3;
  background-color: $color-white;
  border: 1px solid $color-gray-200;
  border-radius: $radius-md;

  &__icon {
    @include flex-center;
    flex-shrink: 0;
    width: 44px;
    height: 44px;
    border-radius: $radius-md;
    background-color: $color-navy-light;
    color: $color-navy-mid;
    font-size: 22px;
  }

  &__body {
    display: flex;
    flex-direction: column;
    gap: 2px;
    min-width: 0;
  }

  &__label {
    font-size: $font-size-xs;
    font-weight: 600;
    color: $color-gray-600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  &__value {
    font-size: $font-size-base;
    font-weight: 700;
    color: $color-navy;
    text-decoration: none;

    &--static {
      font-weight: 600;
      color: $color-gray-800;
    }
  }

  a.channel-card__value {
    @include focus-ring;

    &:hover {
      color: $color-red;
    }
  }
}
</style>
