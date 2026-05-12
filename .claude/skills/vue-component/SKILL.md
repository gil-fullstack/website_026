---
name: vue-component
description: Cria um componente Vue 3 completo com <script setup>, props tipadas, emits declarados, estados de loading/error, e <style scoped>. Seguindo Composition API e boas práticas. Exemplo: /vue-component DataTable com paginação e ordenação
argument-hint: <nome-e-descrição-do-componente>
user-invocable: true
allowed-tools:
  - Read
  - Write
  - Bash(ls *)
  - Bash(find *)
paths:
  - "src/components/**"
---

# Criar Componente Vue 3

Componente solicitado: **$ARGUMENTS**

## Passo 1 — Análise do contexto

```!
ls src/components/ 2>/dev/null
ls src/composables/ 2>/dev/null
```

Verifique se existe composable reutilizável que o componente deve usar, e se há convenções estabelecidas no projeto.

## Passo 2 — Planejar o componente

Identifique a partir de `$ARGUMENTS`:
- **Nome do componente** (PascalCase)
- **Props necessárias** (com tipos, required, defaults)
- **Eventos que emite**
- **Estado interno** necessário
- **Composables** que deve usar
- **Comportamento** principal

## Passo 3 — Criar o componente

Template base com `<script setup>`:

```vue
<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
// imports de composables se necessário

/**
 * Props
 */
const props = defineProps({
  // definir com tipos e validators
})

/**
 * Emits
 */
const emit = defineEmits([
  // 'eventName'
])

/**
 * Estado
 */
const loading = ref(false)
const error = ref(null)

/**
 * Computed
 */

/**
 * Métodos
 */

/**
 * Lifecycle
 */
</script>

<template>
  <!-- Template semântico e acessível -->
</template>

<style scoped>
/* Estilos com variáveis CSS e estados */
</style>
```

## Requisitos que todo componente deve atender

**Reatividade:**
- `ref()` para primitivos; `reactive()` para objetos complexos
- `computed()` para valores derivados — nunca recalcular no template
- Limpar subscriptions e timers em `onUnmounted`

**Props e Emits:**
- Props com `type`, `required`, e `default` explícitos
- Validators para enums: `validator: (v) => ['a', 'b'].includes(v)`
- Emits documentados com payloads

**Template:**
- Sem lógica complexa no template — usar `computed` ou funções
- `v-for` sempre com `:key` estável e único
- `v-if` e `v-for` nunca no mesmo elemento

**Estilos:**
- Usar variáveis CSS para valores reutilizáveis
- Estados: `:hover`, `:focus`, `:disabled`, `.loading`, `.error`
- Responsivo: funcional em mobile (min 320px)

## Passo 4 — Mostrar uso do componente

Fornecer exemplo de como usar o componente no template pai:

```vue
<MeuComponente
  :prop="valor"
  @evento="handler"
/>
```

## Passo 5 — Onde salvar

- Componentes genéricos/reutilizáveis: `src/components/[Nome].vue`
- Componentes de feature: `src/components/[feature]/[Nome].vue`
