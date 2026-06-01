<script setup>
const logos = [
  { name: 'Amor Pet',          file: 'amor-pet.webp' },
  { name: 'Artplac',           file: 'artplac.webp' },
  { name: 'Dias Transportes',  file: 'dias-transportes.webp' },
  { name: 'Fabiano Joaquim',   file: 'fabiano-joaquim.webp' },
  { name: 'Haust',             file: 'haust.webp' },
  { name: 'Telas Cardoso',     file: 'telas-cardoso.webp' },
]

const getLogoUrl = (file) =>
  new URL(`../../assets/images/logos_corp/${file}`, import.meta.url).href
</script>

<template>
  <section class="clients" aria-label="Clientes satisfeitos">
    <div class="container">
      <p class="clients__title">Clientes Felizes com os softwares Ciaf</p>
    </div>

    <div class="clients__carousel" aria-hidden="true">
      <div class="clients__track">
        <img
          v-for="(logo, i) in [...logos, ...logos]"
          :key="`${logo.file}-${i}`"
          :src="getLogoUrl(logo.file)"
          :alt="logo.name"
          class="clients__logo"
        />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.clients {
  padding: $space-1 0 $space-6;
  background: $color-gray-50;
  overflow: hidden;

  &__title {
    text-align: center;
    font-size: $font-size-3xl;
    font-weight: 600;
    color: $color-navy;
    margin: 0 0 $space-5;
    letter-spacing: -0.2px;
  }

  &__carousel {
    width: 100%;
    overflow: hidden;
    mask-image: linear-gradient(
      to right,
      transparent 0%,
      black 8%,
      black 92%,
      transparent 100%
    );
  }

  &__track {
    display: flex;
    align-items: center;
    gap: $space-8;
    width: max-content;
    animation: scroll-logos 22s linear infinite;

    @media (prefers-reduced-motion: reduce) {
      animation: none;
      flex-wrap: wrap;
      justify-content: center;
      width: 100%;
      padding: 0 $space-3;
    }
  }

  &__logo {
    height: 3rem;
    width: auto;
    object-fit: contain;
    filter: grayscale(100%);
    opacity: 0.55;
    transition: filter $transition-base, opacity $transition-base;
    flex-shrink: 0;

    &:hover {
      filter: grayscale(0%);
      opacity: 1;
    }
  }
}

@keyframes scroll-logos {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}
</style>