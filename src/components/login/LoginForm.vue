<script setup>
import { ref, computed } from 'vue'
import ciafLogo from '@/assets/ciaf560.png'

const cnpj = ref('')
const senha = ref('')
const showPassword = ref(false)
const formError = ref('')
const submitted = ref(false)

function formatCnpj(raw) {
  const d = raw.replace(/\D/g, '').slice(0, 14)
  return d
    .replace(/^(\d{2})(\d)/, '$1.$2')
    .replace(/^(\d{2})\.(\d{3})(\d)/, '$1.$2.$3')
    .replace(/\.(\d{3})(\d)/, '.$1/$2')
    .replace(/(\d{4})(\d)/, '$1-$2')
}

function onCnpjInput(e) {
  const formatted = formatCnpj(e.target.value)
  cnpj.value = formatted
  e.target.value = formatted
}

const cnpjDigits = computed(() => cnpj.value.replace(/\D/g, ''))
const isValid = computed(() => cnpjDigits.value.length === 14 && senha.value.length > 0)

function onSubmit(e) {
  formError.value = ''
  if (cnpjDigits.value.length !== 14) {
    e.preventDefault()
    formError.value = 'Informe um CNPJ válido com 14 dígitos.'
    return
  }
  if (!senha.value) {
    e.preventDefault()
    formError.value = 'A senha é obrigatória.'
    return
  }
  submitted.value = true
}
</script>

<template>
  <div class="login-card" role="main" aria-labelledby="login-title">
    <div class="login-card__brand">
      <img :src="ciafLogo" alt="CIAF Sistemas" class="login-card__logo" />
      <div class="login-card__divider" aria-hidden="true" />
    </div>

    <div class="login-card__header">
      <h1 id="login-title" class="login-card__title">Área do Cliente</h1>
      <p class="login-card__subtitle">
        Acesse sua conta para gerenciar sistemas, chamados e assinaturas.
      </p>
    </div>

    <form
      class="login-form"
      method="POST"
      action="https://site.ciaf.com.br/login_cliente"
      @submit="onSubmit"
      novalidate
      aria-label="Formulário de acesso à área do cliente"
    >
      <div class="form-group">
        <label for="cnpj" class="form-label">CNPJ da Empresa</label>
        <div class="input-wrapper">
          <span class="input-icon" aria-hidden="true">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect x="2" y="7" width="20" height="14" rx="2" />
              <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
            </svg>
          </span>
          <input
            id="cnpj"
            name="cnpj"
            type="text"
            class="form-input"
            :class="{ 'form-input--error': formError && cnpjDigits.length !== 14 }"
            :value="cnpj"
            @input="onCnpjInput"
            placeholder="00.000.000/0000-00"
            autocomplete="organization"
            inputmode="numeric"
            aria-required="true"
            :aria-invalid="formError && cnpjDigits.length !== 14 ? 'true' : 'false'"
            aria-describedby="cnpj-hint"
          />
        </div>
        <span id="cnpj-hint" class="form-hint">Somente números — o formato é aplicado automaticamente</span>
      </div>

      <div class="form-group">
        <label for="senha" class="form-label">Senha</label>
        <div class="input-wrapper">
          <span class="input-icon" aria-hidden="true">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
          </span>
          <input
            id="senha"
            name="senha"
            :type="showPassword ? 'text' : 'password'"
            class="form-input form-input--password"
            v-model="senha"
            placeholder="Sua senha de acesso"
            autocomplete="current-password"
            aria-required="true"
          />
          <button
            type="button"
            class="toggle-password"
            :aria-label="showPassword ? 'Ocultar senha' : 'Mostrar senha'"
            @click="showPassword = !showPassword"
          >
            <svg v-if="!showPassword" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
            <svg v-else width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
              <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
              <line x1="1" y1="1" x2="23" y2="23" />
            </svg>
          </button>
        </div>
      </div>

      <div v-if="formError" role="alert" class="form-error" aria-live="polite">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="8" x2="12" y2="12" />
          <line x1="12" y1="16" x2="12.01" y2="16" />
        </svg>
        {{ formError }}
      </div>

      <button
        type="submit"
        class="btn-submit"
        :disabled="submitted"
        :aria-busy="submitted ? 'true' : 'false'"
      >
        <svg v-if="submitted" class="btn-spinner" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
          <path d="M21 12a9 9 0 1 1-6.219-8.56" />
        </svg>
        {{ submitted ? 'Acessando…' : 'Acessar' }}
      </button>
    </form>

    <div class="login-card__footer">
      <p class="login-card__help">
        Problemas para acessar?
        <RouterLink to="/suporte" class="login-card__link">Fale com o suporte</RouterLink>
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/variables' as *;
@use '@/assets/scss/mixins' as *;

.login-card {
  background: $color-white;
  border-radius: $radius-lg;
  box-shadow: 0 24px 64px rgba($color-navy-dark, 0.28);
  padding: $space-6 $space-5;
  width: 100%;
  max-width: 440px;

  @media (max-width: #{$bp-sm - 1px}) {
    padding: $space-4 $space-3;
    border-radius: $radius-md;
  }
}

// ── Brand ────────────────────────────────────
.login-card__brand {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: $space-3;
  margin-bottom: $space-4;
}

.login-card__logo {
  height: 38px;
  width: auto;
  display: block;
}

.login-card__divider {
  width: 48px;
  height: 3px;
  background: linear-gradient(90deg, $color-red 0%, $color-navy-mid 100%);
  border-radius: $radius-full;
}

// ── Header ────────────────────────────────────
.login-card__header {
  text-align: center;
  margin-bottom: $space-5;
}

.login-card__title {
  font-size: $font-size-2xl;
  font-weight: 700;
  color: $color-navy;
  letter-spacing: -0.3px;
  margin-bottom: $space-1;
}

.login-card__subtitle {
  font-size: $font-size-sm;
  color: $color-gray-600;
  line-height: 1.5;
}

// ── Form ─────────────────────────────────────
.login-form {
  display: flex;
  flex-direction: column;
  gap: $space-3;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.form-label {
  font-size: $font-size-sm;
  font-weight: 600;
  color: $color-gray-800;
}

.input-wrapper {
  position: relative;
  display: flex;
  align-items: center;
}

.input-icon {
  position: absolute;
  left: 14px;
  color: $color-gray-400;
  display: flex;
  pointer-events: none;
}

.form-input {
  width: 100%;
  padding: 12px 14px 12px 44px;
  font-size: $font-size-base;
  font-family: $font-sans;
  color: $color-gray-800;
  background: $color-gray-50;
  border: 1.5px solid $color-gray-200;
  border-radius: $radius-sm;
  transition: border-color $transition-fast, box-shadow $transition-fast;
  outline: none;

  &::placeholder {
    color: $color-gray-400;
  }

  &:focus {
    background: $color-white;
    border-color: $color-navy-mid;
    box-shadow: 0 0 0 3px rgba($color-navy-mid, 0.15);
  }

  &--password {
    padding-right: 48px;
  }

  &--error {
    border-color: $color-red;
    background: $color-red-light;

    &:focus {
      box-shadow: 0 0 0 3px rgba($color-red, 0.12);
    }
  }
}

.toggle-password {
  position: absolute;
  right: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  color: $color-gray-400;
  background: none;
  border: none;
  border-radius: $radius-sm;
  cursor: pointer;
  transition: color $transition-fast;

  &:hover {
    color: $color-gray-600;
  }

  @include focus-ring;
}

.form-hint {
  font-size: $font-size-xs;
  color: $color-gray-400;
}

.form-error {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 14px;
  background: $color-red-light;
  border: 1px solid rgba($color-red, 0.25);
  border-radius: $radius-sm;
  color: $color-red-dark;
  font-size: $font-size-sm;
  font-weight: 500;
}

// ── Submit ────────────────────────────────────
.btn-submit {
  @include btn-primary;
  width: 100%;
  padding: 14px;
  font-size: $font-size-base;
  margin-top: $space-1;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
}

.btn-spinner {
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

// ── Footer ────────────────────────────────────
.login-card__footer {
  margin-top: $space-4;
  padding-top: $space-3;
  border-top: 1px solid $color-gray-200;
  text-align: center;
}

.login-card__help {
  font-size: $font-size-sm;
  color: $color-gray-600;
}

.login-card__link {
  color: $color-navy-mid;
  font-weight: 600;
  text-decoration: none;
  transition: color $transition-fast;

  &:hover {
    color: $color-navy;
    text-decoration: underline;
  }

  @include focus-ring;
}
</style>
