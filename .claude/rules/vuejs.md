---
paths:
  - "src/**/*.vue"
  - "src/composables/**"
  - "src/stores/**"
  - "src/router/**"
---

# Vue 3 — Regras de desenvolvimento

## Composition API
- Sempre usar `<script setup>` (açúcar sintático do Composition API)
- Props explícitas com `defineProps({ prop: { type: Type, required: true } })`
- Emits declarados com `defineEmits(['eventName'])`
- Expor métodos ao pai somente via `defineExpose` — não por padrão
- Preferir `ref()` para primitivos, `reactive()` para objetos complexos
- Usar `computed()` para derivações — nunca recalcular no template
- Limpar watchers e listeners em `onUnmounted()`

## Componentes
- Um componente por arquivo; nome igual ao filename (PascalCase)
- Props devem ser somente leitura dentro do componente (não mutá-las)
- Emitir eventos para comunicar ao pai — nunca modificar prop diretamente
- `v-for` sempre com `:key` único e estável (não índice se lista pode mudar)
- `v-if` e `v-for` nunca no mesmo elemento — usar `<template>` como wrapper

## Performance
- Componentes pesados: `defineAsyncComponent(() => import('./Heavy.vue'))`
- Listas longas: `v-memo` para evitar re-renders desnecessários
- Evitar watchers com `deep: true` em objetos grandes
- `shallowRef` / `shallowReactive` para dados que não precisam de reatividade profunda

## Estilos
- Estilos no próprio componente com `<style scoped>`
- CSS global apenas em `src/style.css`
- Variáveis CSS para temas: `--color-primary`, `--spacing-sm`, etc.
- Evitar `!important`; resolver especificidade com seletores adequados
