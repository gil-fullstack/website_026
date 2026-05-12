---
name: vue-composable
description: Cria um composable Vue 3 (função use*) com estado reativo, tratamento de erros, limpeza de efeitos colaterais e contrato de retorno documentado. Exemplo: /vue-composable usePagination para listas com pageSize configurável
argument-hint: <nome-do-composable> [descrição]
user-invocable: true
allowed-tools:
  - Read
  - Write
  - Bash(ls *)
  - Bash(find *)
paths:
  - "src/composables/**"
---

# Criar Composable Vue 3

Composable: **$ARGUMENTS**

## Passo 1 — Verificar composables existentes

```!
ls src/composables/ 2>/dev/null || echo "diretório composables não existe — será criado"
```

Verifique se algum composable existente já resolve parcialmente o problema (composição em vez de duplicação).

## Passo 2 — Definir contrato

Parse `$ARGUMENTS` para identificar o nome (deve começar com `use`) e o propósito.

Defina antes de implementar:
```
Nome: useNome
Parâmetros: { param1: tipo, param2: tipo }
Retorno:
  - state: ref — descrição
  - loading: ref<boolean> — true enquanto operação executa
  - error: ref<Error|null> — erro da última operação ou null
  - execute(): Promise — descrição
  - reset(): void — volta ao estado inicial
Efeitos internos: lista o que gerencia (timers, listeners, etc.)
Dependências: lista o que injeta (serviços, outros composables)
```

## Passo 3 — Implementar

Template base para composable com operação assíncrona:

```js
import { ref, computed, onMounted, onUnmounted } from 'vue'

export function useNome(options = {}) {
  // --- Estado ---
  const data = ref(null)
  const loading = ref(false)
  const error = ref(null)

  // --- Computed ---

  // --- Operações ---
  async function execute() {
    loading.value = true
    error.value = null
    try {
      // lógica principal
      data.value = result
    } catch (e) {
      error.value = e instanceof Error ? e : new Error(String(e))
    } finally {
      loading.value = false
    }
  }

  function reset() {
    data.value = null
    loading.value = false
    error.value = null
  }

  // --- Lifecycle ---
  onMounted(() => {
    // setup inicial se necessário
  })

  onUnmounted(() => {
    reset()
    // limpar listeners, cancelar requests, etc.
  })

  // --- API pública ---
  return {
    data,
    loading,
    error,
    execute,
    reset
  }
}
```

## Padrões específicos por tipo

**Composable de fetch de dados:**
- AbortController para cancelamento em `onUnmounted`
- Cache opcional com `Map` ou `localStorage`
- Retry com backoff exponencial para erros de rede

**Composable de formulário:**
- Estado de campos como `reactive({})` (não ref individual)
- Função `validate()` separada de `submit()`
- `isDirty` e `isValid` como computed

**Composable de localStorage/sessionStorage:**
- Inicializar do storage; sincronizar em watch
- Graceful degradation se storage não disponível

**Composable de evento DOM:**
- `addEventListener` em `onMounted`
- `removeEventListener` em `onUnmounted` (mesma referência de função)

## Passo 4 — Salvar e exportar

Salvar em `src/composables/use[Nome].js`.

Confirmar que o composable é importável:
```js
import { useNome } from './composables/useNome'
const { data, loading, error, execute } = useNome()
```
