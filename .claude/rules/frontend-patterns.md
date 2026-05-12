---
paths:
  - "src/**/*.vue"
  - "src/**/*.js"
  - "src/composables/**"
  - "src/stores/**"
---

# Design Patterns para Frontend — Regras

## SOLID no contexto Vue/JS
- **S** — Cada componente/função tem uma única responsabilidade clara
- **O** — Componentes extensíveis via props/slots/emits; não modificar para adicionar variação
- **L** — Composables intercambiáveis se respeitam a mesma interface de retorno
- **I** — Props granulares; não passar objeto gigante quando só um campo é necessário
- **D** — Componentes dependem de abstrações (composables, serviços) — não de implementações concretas

## Padrões aplicáveis

### Container/Presenter (Smart/Dumb)
- Container: busca dados, gerencia estado, coordena lógica
- Presenter: recebe dados via props, emite eventos, sem lógica de negócio

### Composable Strategy
```js
// Trocar implementação sem alterar o componente
const { data, loading } = useUserData(userDataStrategy)
```

### Observer via Events
- Use `mitt` ou EventBus para comunicação entre componentes não relacionados
- Preferir Pinia para estado global compartilhado

### Factory de Componentes
- `defineAsyncComponent` com factory para criar instâncias dinâmicas baseadas em tipo

### Decorator via Composable
- Estender comportamento de um composable base sem modificá-lo:
```js
function useEnhancedFetch(url) {
  const base = useFetch(url)
  return { ...base, retry: () => base.execute() }
}
```

## Lógica de programação
- Funções com menos de 20 linhas — extrair se maior
- Máximo 2 níveis de indentação; early return para reduzir aninhamento
- Nomes de função começam com verbo: `getUserById`, `calculateTotal`, `formatDate`
- Evitar flags booleanos como parâmetro; preferir objetos de opção
- Guard clauses antes da lógica principal para validações
- Mutações de estado sempre através de funções explícitas — nunca inline no template

## Anti-patterns a evitar
- Prop drilling além de 2 níveis → usar Pinia ou provide/inject
- Lógica de negócio no template → mover para computed ou composable
- `watch` que re-implementa `computed` → usar computed
- Componente com mais de 300 linhas → decompor
- `any` implícito em objetos → tipar props com validators
