<script setup>
import LoginForm from '@/components/login/LoginForm.vue'
</script>

<template>
  <section class="login-page" aria-label="Acesso à Área do Cliente">
    <div class="login-page__bg" aria-hidden="true">
      <div class="login-page__blob login-page__blob--1" />
      <div class="login-page__blob login-page__blob--2" />
    </div>

    <div class="login-page__content">
      <LoginForm />

      <p class="login-page__tagline">
        Ainda não é cliente?
        <RouterLink to="/comprar" class="login-page__link">Conheça nossos planos</RouterLink>
      </p>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/variables' as *;
@use '@/assets/scss/mixins' as *;

.login-page {
  position: relative;
  min-height: calc(100vh - 70px);
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(145deg, $color-navy-dark 0%, $color-navy 55%, #0e3d6e 100%);
  padding: $space-6 $space-3;
  overflow: hidden;
}

// Blobs decorativos de fundo
.login-page__bg {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.login-page__blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.18;

  &--1 {
    width: 500px;
    height: 500px;
    background: $color-navy-mid;
    top: -100px;
    right: -80px;
  }

  &--2 {
    width: 380px;
    height: 380px;
    background: $color-red;
    bottom: -60px;
    left: -60px;
  }
}

.login-page__content {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: $space-3;
  width: 100%;
}

.login-page__tagline {
  font-size: $font-size-sm;
  color: rgba($color-white, 0.75);
  text-align: center;
}

.login-page__link {
  color: $color-white;
  font-weight: 600;
  text-decoration: underline;
  text-underline-offset: 3px;
  transition: opacity $transition-fast;

  &:hover {
    opacity: 0.85;
  }

  @include focus-ring($color-white);
}
</style>
