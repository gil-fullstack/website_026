---
paths:
  - "src/**/api/**"
  - "src/**/services/**"
  - "src/**/http/**"
  - "src/**/*.service.js"
  - "src/**/*.api.js"
  - "src/**/axios*"
---

# Integração de Endpoints com Axios — Regras

## Configuração central
- Instância Axios centralizada em `src/services/http.js` — nunca usar `axios` diretamente nos componentes
- Base URL via variável de ambiente: `import.meta.env.VITE_API_BASE_URL`
- Timeout padrão: 10000ms (10s)

```js
// src/services/http.js
import axios from 'axios'

const http = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 10_000,
  headers: { 'Content-Type': 'application/json' }
})

export default http
```

## Interceptors
- **Request interceptor**: adicionar token de autenticação via `config.headers.Authorization`
- **Response interceptor**: normalizar erros, fazer logout em 401, logar 5xx
- Interceptors registrados uma única vez na inicialização do módulo

## Serviços por domínio
- Um arquivo de serviço por recurso: `userService.js`, `productService.js`
- Serviços exportam funções puras que retornam Promises
- Nunca retornar `response.data.data.item` — normalizar na camada de serviço

```js
// src/services/userService.js
import http from './http'

export async function getUser(id) {
  const { data } = await http.get(`/users/${id}`)
  return data
}

export async function createUser(payload) {
  const { data } = await http.post('/users', payload)
  return data
}
```

## Tratamento de erros
- Sempre capturar erros no composable que chama o serviço — não no serviço
- Distinguir erros de rede (`!error.response`) de erros da API (`error.response.status`)
- Mensagens de erro ao usuário: nunca expor detalhes técnicos de API

## Cancelamento de requisições
- Usar `AbortController` em requisições iniciadas por componentes que podem ser desmontados
- Cancelar no `onUnmounted()` do composable

## Variáveis de ambiente
- `VITE_API_BASE_URL` — URL base da API
- `VITE_API_TIMEOUT` — timeout customizado (opcional)
- Nunca commitar `.env` com valores reais — apenas `.env.example`
