<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import ciafLogo from '@/assets/ciaf560.png'

const isMenuOpen = ref(false)
const isScrolled = ref(false)

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value
}

function closeMenu() {
  isMenuOpen.value = false
}

function handleScroll() {
  isScrolled.value = window.scrollY > 20
}

onMounted(() => window.addEventListener('scroll', handleScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))

const navLinks = [
  { label: 'Soluções', to: '/#solucoes' },
  { label: 'Comprar', to: '/comprar' },
  { label: 'Downloads', to: '/#downloads' },
  { label: 'Sobre', to: '/sobre' },
  // { label: 'Notícias', href: '#noticias' },
  { label: 'Suporte', to: '/suporte' },
  { label: 'Contato', to: '/#contato' },
]
</script>

<template>
  <header :class="['header', { 'header--scrolled': isScrolled }]" role="banner">
    <a href="#main-content" class="skip-link">Ir para o conteúdo</a>

    <div class="container header__inner">
      <a href="/" class="logo" aria-label="CIAF Soluções em Software — Página inicial" @click="closeMenu">
        <img :src="ciafLogo" alt="CIAF Soluções em Software" class="logo__img" />
      </a>

      <nav
        id="main-nav"
        class="nav"
        :class="{ 'nav--open': isMenuOpen }"
        aria-label="Navegação principal"
      >
        <ul role="list" class="nav__list">
          <li v-for="link in navLinks" :key="link.label" class="nav__item">
            <RouterLink v-if="link.to" :to="link.to" class="nav__link" @click="closeMenu">
              {{ link.label }}
            </RouterLink>
            <a v-else :href="link.href" class="nav__link" @click="closeMenu">
              {{ link.label }}
            </a>
          </li>
        </ul>

        <div class="header__actions">
          <a
            href="https://site.ciaf.com.br/login_cliente"
            class="btn btn--outline"
            target="_blank"
            rel="noopener noreferrer"
            @click="closeMenu"
          >
            Área do Cliente
          </a>
          <a
            href="http://tvsistemas.mysuite.com.br/central.php"
            class="btn btn--primary"
            target="_blank"
            rel="noopener noreferrer"
            @click="closeMenu"
          >
            Abrir Chamado
          </a>
        </div>
      </nav>

      <button
        class="menu-toggle"
        :aria-expanded="isMenuOpen.toString()"
        aria-controls="main-nav"
        :aria-label="isMenuOpen ? 'Fechar menu' : 'Abrir menu'"
        @click="toggleMenu"
      >
        <span class="menu-toggle__bar" />
        <span class="menu-toggle__bar" />
        <span class="menu-toggle__bar" />
      </button>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  position: sticky;
  top: 0;
  z-index: $z-header;
  background-color: $color-navy;
  transition: box-shadow $transition-base;

  &--scrolled {
    box-shadow: $shadow-header;
  }

  &__inner {
    @include flex-between;
    align-items: center;
    padding-block: $space-1;
    gap: $space-3;
    min-height: 70px;
  }

  &__actions {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: $space-2;
  }
}

// ── Logo ──────────────────────────────────────
.logo {
  width: 10%;
  height: 50%;
  display: inline-flex;
  align-items: center;
  flex-shrink: 0;
  text-decoration: none;
  background-color: $color-white-opacity;
  border-radius: $radius-sm;
  padding: 7px 14px;
  transition: opacity $transition-fast;

  &:hover {
    opacity: 0.92;
  }

  @include focus-ring;

  &__img {
    display: block;
    height: 35px;
    width: auto;
  }
}

// ── Nav ──────────────────────────────────────
.nav {
  &__link {
    display: block;
    padding: 6px 10px;
    color: rgba($color-white, 0.85);
    font-size: 14px;
    font-weight: 500;
    text-decoration: none;
    border-bottom: 2px solid transparent;
    transition: color $transition-fast, border-color $transition-fast;
    white-space: nowrap;

    &:hover {
      color: $color-white;
      border-bottom-color: $color-red;
    }

    @include focus-ring($color-navy-mid);
  }
}

// Layout coluna (desktop) — links acima, botões abaixo
@include respond-to('lg') {
  .nav {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 6px;

    &__list {
      display: flex;
      align-items: center;
      gap: $space-1;
    }
  }
}

// ── Botões ────────────────────────────────────
.btn {
  @include btn-base;
  font-size: 14px;
  padding: 10px 18px;

  &--outline {
    background-color: transparent;
    color: $color-white;
    border-color: rgba($color-white, 0.5);

    &:hover {
      background-color: rgba($color-white, 0.1);
      border-color: $color-white;
    }
  }

  &--primary {
    background-color: $color-red;
    color: $color-white;
    border-color: $color-red;

    &:hover {
      background-color: $color-red-dark;
      border-color: $color-red-dark;
    }
  }
}

// ── Menu toggle (mobile) ──────────────────────
.menu-toggle {
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  width: 44px;
  height: 44px;
  padding: 8px;
  flex-shrink: 0;
  @include focus-ring;

  &__bar {
    display: block;
    width: 100%;
    height: 2px;
    background-color: $color-white;
    border-radius: 2px;
    transition: transform $transition-base, opacity $transition-base;
  }
}

// ── Responsividade ────────────────────────────
@media (max-width: #{$bp-lg - 1px}) {
  .header__inner {
    height: 64px;
  }

  .menu-toggle {
    display: flex;
  }

  .nav {
    position: absolute;
    top: 64px;
    left: 0;
    right: 0;
    background-color: $color-navy-dark;
    max-height: 0;
    overflow: hidden;
    transition: max-height $transition-slow;

    &--open {
      max-height: 500px;
    }

    &__list {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding: $space-2 $space-3;
      gap: 0;
    }

    &__item {
      width: 100%;
    }

    &__link {
      width: 100%;
      padding: 14px 0;
      font-size: $font-size-base;
      border-bottom: 1px solid rgba($color-white, 0.08);
    }
  }

  .header__actions {
    flex-direction: column;
    padding: $space-2 $space-3 $space-3;
    gap: $space-1;

    .btn {
      width: 100%;
      justify-content: center;
    }
  }
}
</style>