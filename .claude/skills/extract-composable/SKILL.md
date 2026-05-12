---
name: extract-composable
description: Extrai lógica reativa repetida de componentes Vue para um composable reutilizável em src/composables/. Pode extrair de um componente específico ou de múltiplos arquivos de uma vez. Exemplo: /extract-composable lógica de fetch de usuários de UserList.vue e UserDetail.vue
argument-hint: <descrição-da-lógica> de <arquivo(s)>
user-invocable: true
allowed-tools:
  - Read
  - Write
  - Edit
  - Bash(grep *)
  - Bash(find *)
  - Bash(ls *)
---

# Extrair Composable

Extraindo: **$ARGUMENTS**

## Passo 1 — Entender o contexto

Identifique nos argumentos:
- Qual lógica extrair (fetch de dados? validação? timer? localStorage?)
- De quais arquivos ela vem

Leia todos os arquivos mencionados antes de continuar.

## Passo 2 — Analisar a lógica a extrair

Para cada arquivo fonte, identifique:
- Variáveis reativas envolvidas (`ref`, `reactive`, `computed`)
- Funções que operam sobre essas variáveis
- Lifecycle hooks usados (`onMounted`, `onUnmounted`)
- Imports necessários
- Parâmetros que variam entre as implementações (serão os parâmetros do composable)

## Passo 3 — Definir a API do composable

Antes de criar, defina:
- **Nome**: `use[Descrição]` (ex: `useUserData`, `usePagination`, `useFormValidation`)
- **Parâmetros**: o que varia entre os usos
- **Retorno**: o que os componentes precisam
- **Efeitos colaterais**: o que o composable gerencia internamente

```
## API proposta: useNome(params)

Parâmetros:
- param1: tipo — descrição

Retorna:
- state: ref — descrição
- loading: ref<boolean>
- error: ref<Error|null>
- execute: function — descrição

Efeitos internos:
- onMounted: ...
- onUnmounted: cleanup de ...
```

## Passo 4 — Criar o composable

Crie em `src/composables/use[Nome].js`:

```js
import { ref, onMounted, onUnmounted } from 'vue'
// outros imports necessários

export function useNome(/* parâmetros */) {
  const data = ref(null)
  const loading = ref(false)
  const error = ref(null)

  async function execute() {
    loading.value = true
    error.value = null
    try {
      // lógica
    } catch (e) {
      error.value = e
    } finally {
      loading.value = false
    }
  }

  function reset() {
    data.value = null
    error.value = null
  }

  onMounted(execute)
  onUnmounted(reset)

  return { data, loading, error, execute, reset }
}
```

## Passo 5 — Refatorar os arquivos fonte

Para cada arquivo de origem:
1. Remover a lógica extraída
2. Importar o composable: `import { useNome } from '../composables/useNome'`
3. Usar: `const { data, loading, error } = useNome(params)`
4. Ajustar referências no template

## Passo 6 — Verificação

Listar todos os arquivos criados/modificados e confirmar que as referências estão corretas.
