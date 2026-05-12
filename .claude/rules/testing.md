---
paths:
  - "**/*.test.js"
  - "**/*.spec.js"
  - "**/*.test.vue"
  - "tests/**"
  - "__tests__/**"
  - "src/**/*.test.*"
  - "src/**/*.spec.*"
---

# Testes — Regras

## Framework e ferramentas
- Test runner: **Vitest** (integrado com Vite — preferir a Jest)
- Componentes Vue: **@vue/test-utils** para mounting e interação
- Mocking: `vi.mock()`, `vi.fn()`, `vi.spyOn()` — built-in do Vitest
- Acessibilidade em testes: **@testing-library/vue** para queries semânticas

## Estrutura de testes
```
src/
├── components/__tests__/MyComponent.spec.js
├── composables/__tests__/useMyFeature.spec.js
└── utils/__tests__/myUtil.spec.js
```
Ou colocalizado: `MyComponent.vue` + `MyComponent.spec.js` no mesmo diretório.

## Nomenclatura
- `describe` com o nome do componente/função sendo testada
- `it` / `test` descrevem comportamento do usuário ou contrato da função:
  - ✅ `it('exibe mensagem de erro quando o email é inválido')`
  - ❌ `it('testa a prop email')`

## O que testar

### Componentes
- Renderização com diferentes combinações de props
- Interações do usuário (clique, input, submit)
- Emissão de eventos (`wrapper.emitted()`)
- Slots com conteúdo customizado
- Estados de loading/error/empty

### Composables
- Valores iniciais do estado
- Mutações de estado via funções expostas
- Integração com APIs mockadas
- Limpeza de efeitos colaterais

### Utilitários
- Casos felizes com entradas válidas
- Edge cases: null, undefined, string vazia, array vazio
- Casos de erro e exceção

## Regras de qualidade
- Testes devem ser independentes — sem ordem de execução necessária
- Sem `console.log` em testes — use `expect` para verificar comportamento
- Mocks limpos após cada teste: `afterEach(() => vi.clearAllMocks())`
- Não testar detalhes de implementação — testar comportamento observável
- Evitar `wrapper.vm.$data` direto — preferir queries de DOM ou `wrapper.emitted()`
- Um `describe` por arquivo; aninhar `describe` apenas para agrupar cenários relacionados
- Cobertura alvo: 80% para composables e utils; 70% para componentes

## Mocking de módulos externos
```js
vi.mock('../services/userService', () => ({
  fetchUser: vi.fn().mockResolvedValue({ id: 1, name: 'Test' })
}))
```
Axios deve ser sempre mockado em testes unitários — nunca fazer chamadas HTTP reais.
