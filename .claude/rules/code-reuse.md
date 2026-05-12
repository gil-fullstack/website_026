---
paths:
  - "src/**/*.vue"
  - "src/**/*.js"
  - "src/composables/**"
  - "src/utils/**"
---

# Reuso de Código — Regras

## Quando extrair
- Lógica repetida em 2+ componentes → extrair para composable em `src/composables/`
- Utilitário puro (sem reatividade) repetido → extrair para `src/utils/`
- Bloco de template repetido em 2+ locais → extrair para componente
- Constantes/configurações repetidas → centralizar em `src/constants/`

## Composables (use*)
- Arquivo: `src/composables/useNomeFeature.js`
- Sempre retornar objeto com propriedades nomeadas — nunca retornar array (exceto se imitar `useState`)
- Composables devem ser auto-contidos: gerenciam seu próprio estado, limpeza e erros
- Não causar efeitos colaterais no import — apenas na execução de funções retornadas
- Documentar o contrato de retorno no topo do arquivo

```js
// Padrão de retorno explícito
export function useFeature() {
  const state = ref(null)
  const loading = ref(false)
  const error = ref(null)

  async function execute() { /* ... */ }
  function reset() { /* ... */ }

  return { state, loading, error, execute, reset }
}
```

## Componentes reutilizáveis
- Componentes base (átomo): sem lógica de negócio; configuráveis por props
- Preferir `slots` a props de conteúdo para flexibilidade máxima
- Usar `v-bind="$attrs"` em componentes wrapper para não bloquear atributos HTML nativos
- Nomear: `Base*.vue` para primitivos, `App*.vue` para composições de negócio

## Utilitários puros (`src/utils/`)
- Funções puras sem side effects — mesmo input → mesmo output
- Testáveis isoladamente (sem setup de componente)
- Agrupados por domínio: `dateUtils.js`, `stringUtils.js`, `validationUtils.js`

## O que NÃO reutilizar prematuramente
- Não extrair composable para lógica usada em apenas 1 lugar — esperar a segunda ocorrência
- Não criar componente "genérico" antes de ter 2 casos de uso reais
- Não abstrair variação que nunca mudará

## Checklist antes de duplicar código
1. Existe composable/utilitário que já resolve isso em `src/composables/` ou `src/utils/`?
2. O componente poderia receber a variação via prop/slot em vez de ser duplicado?
3. A lógica pode ser generalizada sem perder clareza?
