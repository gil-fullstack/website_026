<script setup>
import ciafLogo from '@/assets/ciaf560.png'
const currentYear = new Date().getFullYear()

const columns = [
  {
    title: 'Soluções',
    links: [
      { label: 'CIAF Professional', href: '/solucoes/ciaf-professional' },
      { label: 'CIAF Emissor', href: '#' },
      { label: 'CIAF Automotivo', href: '/solucoes/ciaf-automotivo' },
      { label: 'Petsystem', href: '/solucoes/petsystem' },
      { label: 'CIAF Essencial', href: '/solucoes/ciaf-essencial' },
      { label: 'CIAF Online Web', href: '#' },
    ]
  },
  {
    title: 'Recursos',
    links: [
      { label: 'Comprar Online', href: '/comprar' },
      { label: 'Downloads', href: '#' },
      { label: 'Suporte Help Desk', href: '/suporte' },
      { label: 'Abrir Chamado', href: 'http://tvsistemas.mysuite.com.br/central.php' },
      { label: 'Base de Conhecimento', href: '/suporte#perguntas-frequentes' },
      { label: 'Área do Cliente', href: 'https://site.ciaf.com.br/login_cliente' },
    ]
  },
  {
    title: 'Empresa',
    links: [
      { label: 'Sobre nós', href: '/sobre' },
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
        <a href="/" class="footer__logo" aria-label="CIAF Soluções em Software — Página inicial">
          <img :src="ciafLogo" alt="CIAF Soluções em Software" class="footer__logo-img" />
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
            <RouterLink
              v-if="link.href.startsWith('/')"
              :to="link.href"
              class="footer__col-link"
            >{{ link.label }}</RouterLink>
            <a
              v-else
              :href="link.href"
              class="footer__col-link"
              :target="link.href.startsWith('http') ? '_blank' : undefined"
              :rel="link.href.startsWith('http') ? 'noopener noreferrer' : undefined"
            >{{ link.label }}</a>
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
    display: inline-flex;
    align-items: center;
    text-decoration: none;
    width: fit-content;
    background-color: $color-white;
    border-radius: $radius-sm;
    padding: 6px 12px;
    transition: opacity $transition-fast;

    &:hover {
      opacity: 0.9;
    }

    @include focus-ring;

    &-img {
      display: block;
      height: 44px;
      width: auto;
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
