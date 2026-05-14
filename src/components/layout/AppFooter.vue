<script setup>
const currentYear = new Date().getFullYear()

const columns = [
  {
    title: 'Soluções',
    links: [
      { label: 'CIAF Professional', href: '#' },
      { label: 'CIAF Emissor', href: '#' },
      { label: 'CIAF Automotivo', href: '#' },
      { label: 'Petsystem', href: '#' },
      { label: 'CIAF Essencial', href: '#' },
      { label: 'CIAF Online Web', href: '#' },
    ]
  },
  {
    title: 'Recursos',
    links: [
      { label: 'Downloads', href: '#' },
      { label: 'Suporte Help Desk', href: '#' },
      { label: 'Abrir Chamado', href: '#' },
      { label: 'Base de Conhecimento', href: '#' },
      { label: 'Área do Cliente', href: '#' },
    ]
  },
  {
    title: 'Empresa',
    links: [
      { label: 'Sobre nós', href: '#' },
      { label: 'Notícias', href: '#' },
      { label: 'Política de Privacidade', href: '#' },
      { label: 'Termos de Uso', href: '#' },
      { label: 'Contato', href: '#' },
    ]
  }
]
</script>

<template>
  <footer class="footer" role="contentinfo" aria-label="Rodapé do site">
    <div class="container footer__inner">

      <div class="footer__brand">
        <a href="/" class="footer__logo" aria-label="CIAF Sistemas — Página inicial">
          <span class="footer__logo-text">CIAF</span>
          <span class="footer__logo-sub">sistemas</span>
        </a>
        <p class="footer__tagline">Soluções completas para seu negócio!</p>
        <address class="footer__contact">
          <a href="tel:+553537213306" class="footer__contact-link">
            <i class="mdi mdi-phone-outline" aria-hidden="true" />
            (35) 3721-3306
          </a>
          <a href="https://wa.me/5535984698908" class="footer__contact-link" target="_blank" rel="noopener noreferrer">
            <i class="mdi mdi-whatsapp" aria-hidden="true" />
            (35) 98469-8908
          </a>
          <a href="tel:+553537122201" class="footer__contact-link">
            <i class="mdi mdi-headset" aria-hidden="true" />
            (35) 3712-2201 — Suporte
          </a>
        </address>
      </div>

      <nav
        v-for="col in columns"
        :key="col.title"
        class="footer__col"
        :aria-label="col.title"
      >
        <h3 class="footer__col-title">{{ col.title }}</h3>
        <ul role="list" class="footer__col-list">
          <li v-for="link in col.links" :key="link.label">
            <a :href="link.href" class="footer__col-link">{{ link.label }}</a>
          </li>
        </ul>
      </nav>

    </div>

    <div class="footer__bottom">
      <div class="container footer__bottom-inner">
        <p class="footer__copy">
          &copy; {{ currentYear }} CIAF Sistemas. Todos os direitos reservados.
        </p>
        <p class="footer__location">
          <i class="mdi mdi-map-marker-outline" aria-hidden="true" />
          Sul de Minas Gerais, Brasil
        </p>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  background-color: $color-navy;
  color: rgba($color-white, 0.75);

  &__inner {
    display: grid;
    grid-template-columns: 1fr;
    gap: $space-6;
    padding-block: $space-8;

    @include respond-to('md') {
      grid-template-columns: repeat(2, 1fr);
    }

    @include respond-to('lg') {
      grid-template-columns: 1.6fr repeat(3, 1fr);
      gap: $space-8;
    }
  }

  // ── Brand ────────────────────────────────────
  &__brand {
    display: flex;
    flex-direction: column;
    gap: $space-2;
  }

  &__logo {
    @include flex-start;
    gap: 6px;
    text-decoration: none;
    width: fit-content;

    &-text {
      font-size: 28px;
      font-weight: 800;
      color: $color-white;
      letter-spacing: 2px;
      line-height: 1;
    }

    &-sub {
      font-size: 11px;
      font-weight: 400;
      color: rgba($color-white, 0.5);
      letter-spacing: 1px;
      text-transform: uppercase;
      align-self: flex-end;
      margin-bottom: 2px;
    }
  }

  &__tagline {
    font-size: $font-size-sm;
    color: rgba($color-white, 0.6);
    font-style: italic;
    margin-top: -4px;
  }

  &__contact {
    display: flex;
    flex-direction: column;
    gap: $space-1;
    font-style: normal;
    margin-top: $space-1;
  }

  &__contact-link {
    @include flex-start;
    gap: 8px;
    font-size: $font-size-sm;
    color: rgba($color-white, 0.7);
    text-decoration: none;
    transition: color $transition-fast;

    .mdi {
      font-size: 16px;
      color: $color-red;
      flex-shrink: 0;
    }

    &:hover {
      color: $color-white;
    }

    @include focus-ring;
  }

  // ── Colunas de links ─────────────────────────
  &__col {
    display: flex;
    flex-direction: column;
    gap: $space-2;
  }

  &__col-title {
    font-size: $font-size-sm;
    font-weight: 700;
    color: $color-white;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  &__col-list {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  &__col-link {
    font-size: $font-size-sm;
    color: rgba($color-white, 0.65);
    text-decoration: none;
    transition: color $transition-fast;

    &:hover {
      color: $color-red;
    }

    @include focus-ring;
  }

  // ── Rodapé ───────────────────────────────────
  &__bottom {
    border-top: 1px solid rgba($color-white, 0.1);
  }

  &__bottom-inner {
    @include flex-between;
    flex-wrap: wrap;
    gap: $space-1;
    padding-block: $space-3;
  }

  &__copy,
  &__location {
    font-size: $font-size-xs;
    color: rgba($color-white, 0.45);
    margin: 0;
  }

  &__location {
    @include flex-start;
    gap: 4px;

    .mdi {
      font-size: 14px;
    }
  }
}
</style>
