---
name: ux-components
description: Cria componentes Vue com foco em UX, acessibilidade e design consistente. Use para gerar botões, formulários, modais, alertas, cards, inputs e outros elementos de UI prontos para produção. Exemplo: /ux-components Button primary com ícone e loading state
argument-hint: <tipo-de-componente> [variações]
user-invocable: true
allowed-tools:
  - Read
  - Write
  - Edit
  - Bash(ls *)
paths:
  - "src/components/**"
---

# Criar Componente UX

Crie o componente Vue solicitado: **$ARGUMENTS**

## Contexto do projeto

Verifique a estrutura existente antes de criar:

```!
ls src/components/ 2>/dev/null
ls src/style.css 2>/dev/null && head -50 src/style.css
```

## Requisitos obrigatórios para todos os componentes

### Acessibilidade
- Roles ARIA adequados para o tipo de componente
- `aria-label` ou texto visível em todos os elementos interativos
- Suporte a navegação por teclado (Tab, Enter, Space, Escape quando aplicável)
- Foco visível (nunca remover `outline` sem substituição)
- Atributos `disabled` nativos para estados desabilitados

### API do componente (props e emits)
- `defineProps` com validators quando aplicável
- `defineEmits` com todos os eventos documentados
- `v-bind="$attrs"` no elemento raiz para herança de atributos HTML

### Estados do componente
- Normal, hover, focus, active, disabled, loading, error (quando aplicável ao tipo)

### Responsividade
- Funciona em mobile (320px) até desktop (1440px)
- Touch targets ≥ 44x44px

## Template padrão do componente

```vue
<script setup>
const props = defineProps({
  // definir props
})

const emit = defineEmits([/* eventos */])
</script>

<template>
  <!-- HTML semântico e acessível -->
</template>

<style scoped>
/* CSS com variáveis, estados, responsividade */
</style>
```

## Após criar o componente

1. Listar o arquivo criado com seu caminho completo
2. Mostrar exemplo de uso no componente pai
3. Listar props disponíveis com tipos e defaults
4. Listar eventos emitidos com payloads
