<script setup>
defineProps({
  eyebrow:  { type: String, default: 'Comece agora' },
  title:    { type: String, default: 'Pronto para transformar\na gestão da sua empresa?' },
  subtitle: { type: String, default: 'Fale com um consultor e descubra qual solução CIAF é ideal para o seu negócio. Atendimento personalizado sem compromisso.' },
  ctaLabel: { type: String, default: 'Ver soluções' },
  ctaTo:    { type: String, default: '#solucoes' }
})

const whatsappNumber = '5535984698908'
const whatsappMessage = encodeURIComponent('Olá! Gostaria de conhecer as soluções da CIAF para minha empresa.')
const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`
</script>

<template>
  <section id="contato" class="cta-section" aria-labelledby="cta-heading">
    <div class="cta-section__bg-shape" aria-hidden="true" />

    <div class="container cta-section__inner">
      <div class="cta-section__content">
        <span class="cta-section__eyebrow">
          <i class="mdi mdi-rocket-launch-outline" aria-hidden="true" />
          {{ eyebrow }}
        </span>

        <h2 id="cta-heading" class="cta-section__title">
          {{ title.split('\n')[0] }}<br v-if="title.includes('\n')" />
          {{ title.split('\n')[1] || '' }}
        </h2>

        <p class="cta-section__subtitle">{{ subtitle }}</p>

        <div class="cta-section__actions">
          <a
            :href="whatsappUrl"
            class="btn btn--white"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="mdi mdi-whatsapp" aria-hidden="true" />
            WhatsApp Comercial
          </a>
          <a :href="ctaTo" class="btn btn--outline-white">
            <i class="mdi mdi-eye-outline" aria-hidden="true" />
            {{ ctaLabel }}
          </a>
        </div>

        <div class="cta-section__features">
          <span class="cta-feature">
            <i class="mdi mdi-check" aria-hidden="true" />
            Suporte gratuito incluído
          </span>
          <span class="cta-feature">
            <i class="mdi mdi-check" aria-hidden="true" />
            Sem taxa de implantação
          </span>
          <span class="cta-feature">
            <i class="mdi mdi-check" aria-hidden="true" />
            Treinamento incluído
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.cta-section {
  position: relative;
  background-color: $color-red;
  overflow: hidden;
  @include section-padding;

  &__bg-shape {
    position: absolute;
    width: 600px;
    height: 600px;
    background: rgba($color-white, 0.04);
    border-radius: 50%;
    right: -150px;
    top: -200px;
    pointer-events: none;
  }

  &__inner {
    position: relative;
    z-index: 1;
  }

  &__content {
    @include flex-center;
    flex-direction: column;
    gap: $space-3;
    text-align: center;
    max-width: 680px;
    margin-inline: auto;
  }

  &__eyebrow {
    @include flex-center;
    gap: 8px;
    font-size: $font-size-sm;
    font-weight: 600;
    color: rgba($color-white, 0.8);
    text-transform: uppercase;
    letter-spacing: 1px;

    .mdi {
      font-size: 18px;
    }
  }

  &__title {
    font-size: clamp($font-size-2xl, 4vw, $font-size-4xl);
    font-weight: 800;
    color: $color-white;
    line-height: 1.15;
    letter-spacing: -0.5px;
    margin: 0;
  }

  &__subtitle {
    font-size: $font-size-md;
    color: rgba($color-white, 0.85);
    line-height: 1.65;
    max-width: 520px;
  }

  &__actions {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: $space-2;
    margin-top: $space-1;
  }

  &__features {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: $space-2;
    margin-top: $space-1;
  }
}

.cta-feature {
  @include flex-start;
  gap: 6px;
  font-size: $font-size-sm;
  color: rgba($color-white, 0.8);

  .mdi {
    font-size: 16px;
    color: rgba($color-white, 0.6);
  }
}

.btn {
  @include btn-base;

  &--white {
    background-color: $color-white;
    color: $color-red;
    border-color: $color-white;

    &:hover {
      background-color: rgba($color-white, 0.92);
      transform: translateY(-1px);
      box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
    }
  }

  &--outline-white {
    @include btn-outline-white;
  }
}
</style>