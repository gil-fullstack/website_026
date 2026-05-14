<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

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
  { label: 'Soluções', href: '#solucoes' },
  { label: 'Comprar', href: '#comprar' },
  { label: 'Downloads', href: '#downloads' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Notícias', href: '#noticias' },
  { label: 'Suporte', href: '#suporte' },
  { label: 'Contato', href: '#contato' },
]
</script>

<template>
  <header :class="['header', { 'header--scrolled': isScrolled }]" role="banner">
    <a href="#main-content" class="skip-link">Ir para o conteúdo</a>

    <div class="container header__inner">
      <a href="/" class="logo" aria-label="CIAF Sistemas — Página inicial" @click="closeMenu">
        <span class="logo__text">CIAF</span>
        <span class="logo__sub">sistemas</span>
      </a>

      <nav
        id="main-nav"
        class="nav"
        :class="{ 'nav--open': isMenuOpen }"
        aria-label="Navegação principal"
      >
        <ul role="list" class="nav__list">
          <li v-for="link in navLinks" :key="link.href" class="nav__item">
            <a :href="link.href" class="nav__link" @click="closeMenu">
              {{ link.label }}
            </a>
          </li>
        </ul>

        <div class="header__actions">
          <a href="#area-cliente" class="btn btn--outline" @click="closeMenu">
            Área do Cliente
          </a>
          <a href="#abrir-chamado" class="btn btn--primary" @click="closeMenu">
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
    height: 70px;
    gap: $space-3;
  }

  &__actions {
    display: flex;
    align-items: center;
    gap: $space-2;
    flex-shrink: 0;
  }
}

// ── Logo ──────────────────────────────────────
.logo {
  @include flex-start;
  gap: 6px;
  flex-shrink: 0;
  text-decoration: none;

  &__text {
    font-size: 26px;
    font-weight: 800;
    color: $color-white;
    letter-spacing: 2px;
    line-height: 1;
  }

  &__sub {
    font-size: 11px;
    font-weight: 400;
    color: rgba($color-white, 0.65);
    letter-spacing: 1px;
    text-transform: uppercase;
    align-self: flex-end;
    margin-bottom: 2px;
  }
}

// ── Nav ──────────────────────────────────────
.nav {
  &__list {
    display: flex;
    align-items: center;
    gap: $space-1;
  }

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