---
name: axios-endpoint
description: Integra um endpoint de API REST usando Axios seguindo a arquitetura de serviços do projeto. Cria ou atualiza o serviço de domínio, configura a instância Axios se necessário, e cria o composable Vue que consome o serviço. Exemplo: /axios-endpoint GET /api/users com paginação
argument-hint: <método> <endpoint> [descrição]
user-invocable: true
allowed-tools:
  - Read
  - Write
  - Edit
  - Bash(yarn *)
  - Bash(find *)
  - Bash(ls *)
  - Bash(grep *)
paths:
  - "src/services/**"
  - "src/composables/**"
---

# Integrar Endpoint com Axios

Endpoint: **$ARGUMENTS**

## Passo 1 — Análise do ambiente

```!
ls src/services/ 2>/dev/null || echo "services: não existe"
ls src/composables/ 2>/dev/null || echo "composables: não existe"
grep -r "axios" package.json 2>/dev/null || echo "axios: não instalado"
cat .env.example 2>/dev/null || cat .env 2>/dev/null | grep -v "SECRET\|PASSWORD\|KEY" | head -10
```

## Passo 2 — Instalar Axios se necessário

Se Axios não estiver instalado:
```!
cd $CLAUDE_PROJECT_DIR && yarn add axios
```

## Passo 3 — Criar/verificar instância HTTP central

Verificar se `src/services/http.js` existe:

```!
cat src/services/http.js 2>/dev/null || echo "CRIAR"
```

Se não existir, criar `src/services/http.js`:

```js
import axios from 'axios'

const http = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || '/api',
  timeout: 10_000,
  headers: { 'Content-Type': 'application/json' }
})

http.interceptors.request.use((config) => {
  const token = localStorage.getItem('token')
  if (token) config.headers.Authorization = `Bearer ${token}`
  return config
})

http.interceptors.response.use(
  (res) => res,
  (err) => {
    if (!err.response) return Promise.reject(new Error('Sem conexão'))
    const msg = err.response.data?.message || `Erro ${err.response.status}`
    return Promise.reject(new Error(msg))
  }
)

export default http
```

Criar também `.env.example`:
```
VITE_API_BASE_URL=https://api.exemplo.com
```

## Passo 4 — Criar/atualizar serviço de domínio

Parse `$ARGUMENTS` para determinar o domínio (ex: `/users` → `userService.js`).

Verificar se o serviço existe e adicionar/criar a função:

```js
// src/services/[domainService].js
import http from './http'

export async function [functionName](params) {
  const { data } = await http.[method]('[endpoint]', params)
  return data
}
```

Padrões por método HTTP:
- `GET /resource` → `async function getResources(params)` → `http.get('/resource', { params })`
- `GET /resource/:id` → `async function getResourceById(id)` → `http.get('/resource/${id}')`
- `POST /resource` → `async function createResource(payload)` → `http.post('/resource', payload)`
- `PUT /resource/:id` → `async function updateResource(id, payload)` → `http.put('/resource/${id}', payload)`
- `DELETE /resource/:id` → `async function deleteResource(id)` → `http.delete('/resource/${id}')`

## Passo 5 — Criar composable Vue

Criar `src/composables/use[Domain].js` que usa o serviço:

```js
import { ref } from 'vue'
import { functionName } from '../services/domainService'

export function useDomain() {
  const data = ref(null)
  const loading = ref(false)
  const error = ref(null)

  async function execute(params) {
    loading.value = true
    error.value = null
    try {
      data.value = await functionName(params)
    } catch (e) {
      error.value = e.message
    } finally {
      loading.value = false
    }
  }

  return { data, loading, error, execute }
}
```

## Passo 6 — Criar/atualizar .env.example

Garantir que `VITE_API_BASE_URL` está documentado.

## Passo 7 — Resumo

Listar todos os arquivos criados/modificados e mostrar exemplo de uso no componente:

```vue
<script setup>
import { useDomain } from '../composables/useDomain'
const { data, loading, error, execute } = useDomain()
</script>
```
