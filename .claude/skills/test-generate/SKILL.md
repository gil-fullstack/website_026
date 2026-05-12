---
name: test-generate
description: Gera testes unitários completos para um componente Vue ou composable usando Vitest e @vue/test-utils. Analisa o arquivo alvo e cria o arquivo .spec.js correspondente com casos de teste abrangentes. Exemplo: /test-generate src/components/LoginForm.vue
argument-hint: <caminho-do-componente-ou-composable>
user-invocable: true
allowed-tools:
  - Read
  - Write
  - Bash(find *)
  - Bash(ls *)
  - Bash(yarn *)
---

# Gerar Testes

Gerando testes para: **$ARGUMENTS**

## Passo 1 — Verificar configuração de testes

```!
ls package.json && node -e "const p=require('./package.json'); console.log(JSON.stringify({...p.dependencies,...p.devDependencies},null,2))" 2>/dev/null | grep -E "vitest|vue-test|testing-library"
```

Se Vitest não estiver instalado, instruir: `yarn add -D vitest @vue/test-utils jsdom` e adicionar configuração ao `vite.config.js`.

## Passo 2 — Analisar o arquivo alvo

Leia completamente o arquivo `$ARGUMENTS` e identifique:

**Para componentes `.vue`:**
- Props definidas (tipos, required, defaults, validators)
- Eventos emitidos (`defineEmits`)
- Estado local (`ref`, `reactive`, `computed`)
- Métodos/funções expostos ou usados no template
- Dependências externas (composables, stores, serviços)
- Elementos interativos no template (botões, inputs, links)
- Renderização condicional (`v-if`, `v-show`)
- Listas (`v-for`)
- Slots

**Para composables `.js`:**
- Parâmetros aceitos
- Valores retornados (refs, computed, funções)
- Efeitos colaterais (lifecycle, timers, eventos)
- Dependências externas mockáveis

## Passo 3 — Determinar onde salvar

```!
dirname $ARGUMENTS
```

Salvar em `[mesmo-diretório]/__tests__/[nome].spec.js` ou `[mesmo-diretório]/[nome].spec.js`.

## Passo 4 — Gerar arquivo de testes

Estrutura do arquivo:

```js
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { mount } from '@vue/test-utils'  // para componentes
// OU
import { useNome } from '../useNome'     // para composables

// Mocks de dependências externas
vi.mock('../services/myService', () => ({
  fetchData: vi.fn()
}))

describe('[Nome do componente/composable]', () => {
  beforeEach(() => {
    // setup
  })

  afterEach(() => {
    vi.clearAllMocks()
  })

  // GRUPO: Renderização/Estado inicial
  describe('estado inicial', () => {
    it('...', () => { ... })
  })

  // GRUPO: Props (para componentes)
  describe('props', () => {
    it('...', () => { ... })
  })

  // GRUPO: Interações do usuário (para componentes)
  describe('interações', () => {
    it('...', async () => { ... })
  })

  // GRUPO: Eventos emitidos
  describe('eventos', () => {
    it('...', async () => { ... })
  })

  // GRUPO: Estados de erro e edge cases
  describe('casos de erro', () => {
    it('...', async () => { ... })
  })
})
```

Gere testes reais e específicos baseados no código analisado — não genéricos.

## Passo 5 — Executar os testes gerados

```!
cd $CLAUDE_PROJECT_DIR && yarn test --run $ARGUMENTS_SPEC_PATH 2>&1 | tail -30
```

Se falhar, corrigir antes de finalizar.

## Passo 6 — Resumo

Listar: arquivo de teste criado, número de testes gerados, e o comando para executá-los.
