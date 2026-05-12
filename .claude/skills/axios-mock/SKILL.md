---
name: axios-mock
description: Configura mocks de Axios para testes Vitest e/ou mock server de desenvolvimento (MSW - Mock Service Worker). Use quando precisar testar componentes e composables que dependem de chamadas HTTP, ou criar dados falsos para desenvolvimento sem backend. Exemplo: /axios-mock userService para testes
argument-hint: <serviço-ou-endpoint> [para testes|para desenvolvimento]
user-invocable: true
allowed-tools:
  - Read
  - Write
  - Edit
  - Bash(yarn *)
  - Bash(find *)
  - Bash(grep *)
  - Bash(ls *)
paths:
  - "src/services/**"
  - "tests/**"
  - "src/**/*.spec.*"
  - "src/**/*.test.*"
---

# Configurar Mocks de Axios

Alvo: **$ARGUMENTS**

## Passo 1 — Identificar contexto

Parse `$ARGUMENTS`:
- Qual serviço ou endpoint mockar
- Para qual finalidade: testes (`spec.js`) ou desenvolvimento (`MSW`)

```!
ls src/services/ 2>/dev/null
ls tests/ 2>/dev/null || ls src/__tests__ 2>/dev/null || echo "sem diretório de testes"
```

## Opção A — Mock para Testes Vitest

### A1. Mock do módulo de serviço (mais simples)

Nos arquivos `.spec.js`:

```js
import { vi } from 'vitest'
import { getUsers } from '../services/userService'

// Mock do módulo inteiro
vi.mock('../services/userService', () => ({
  getUsers: vi.fn(),
  createUser: vi.fn(),
  deleteUser: vi.fn()
}))

describe('useUsers', () => {
  beforeEach(() => {
    getUsers.mockResolvedValue([
      { id: 1, name: 'Test User', email: 'test@example.com' }
    ])
  })

  afterEach(() => vi.clearAllMocks())

  it('carrega usuários com sucesso', async () => {
    const { data, execute } = useUsers()
    await execute()
    expect(data.value).toHaveLength(1)
    expect(getUsers).toHaveBeenCalledOnce()
  })

  it('trata erro de rede', async () => {
    getUsers.mockRejectedValue(new Error('Sem conexão'))
    const { error, execute } = useUsers()
    await execute()
    expect(error.value).toBe('Sem conexão')
  })
})
```

### A2. Fixtures de dados de teste

Criar `tests/fixtures/[domínio].js`:

```js
// tests/fixtures/users.js
export const mockUser = {
  id: 1,
  name: 'Test User',
  email: 'test@example.com',
  createdAt: '2025-01-01T00:00:00Z'
}

export const mockUsers = [
  mockUser,
  { id: 2, name: 'Another User', email: 'another@example.com', createdAt: '2025-01-02T00:00:00Z' }
]

export const mockPaginatedResponse = {
  data: mockUsers,
  total: 2,
  page: 1,
  pageSize: 10
}
```

### A3. Setup global de mocks (tests/setup.js)

Se tiver `vitest.config.js` com `setupFiles`:

```js
// tests/setup.js
import { vi, afterEach } from 'vitest'

// Limpar todos os mocks após cada teste
afterEach(() => {
  vi.clearAllMocks()
})

// Mock global do http se necessário
vi.mock('./src/services/http', () => ({
  default: {
    get: vi.fn(),
    post: vi.fn(),
    put: vi.fn(),
    delete: vi.fn()
  }
}))
```

## Opção B — Mock Service Worker (desenvolvimento sem backend)

Se a finalidade for desenvolvimento:

### B1. Instalar MSW

```!
cd $CLAUDE_PROJECT_DIR && yarn add -D msw
```

### B2. Criar handlers

```js
// src/mocks/handlers.js
import { http, HttpResponse } from 'msw'
import { mockUsers } from './data/users'

export const handlers = [
  http.get('/api/users', () => {
    return HttpResponse.json(mockUsers)
  }),

  http.get('/api/users/:id', ({ params }) => {
    const user = mockUsers.find(u => u.id === Number(params.id))
    if (!user) return new HttpResponse(null, { status: 404 })
    return HttpResponse.json(user)
  }),

  http.post('/api/users', async ({ request }) => {
    const body = await request.json()
    return HttpResponse.json({ id: Date.now(), ...body }, { status: 201 })
  })
]
```

### B3. Inicializar no ambiente de desenvolvimento

```js
// src/main.js — adicionar antes de createApp
if (import.meta.env.DEV) {
  const { worker } = await import('./mocks/browser')
  await worker.start({ onUnhandledRequest: 'bypass' })
}
```

## Passo 2 — Criar os arquivos necessários

Baseado na opção escolhida, criar todos os arquivos necessários.

## Passo 3 — Verificar

Para mocks de teste:
```!
cd $CLAUDE_PROJECT_DIR && yarn test --run 2>&1 | tail -20
```

Listar todos os arquivos criados/modificados.
