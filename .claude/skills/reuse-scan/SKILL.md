---
name: reuse-scan
description: Escaneia o projeto inteiro em busca de duplicações de código, lógica repetida, componentes similares e oportunidades de extração para composables ou utilitários. Retorna um relatório priorizado de o que extrair. Use antes de uma sessão de refatoração. Exemplo: /reuse-scan src/
argument-hint: <diretório-alvo>
user-invocable: true
allowed-tools:
  - Read
  - Bash(grep *)
  - Bash(find *)
  - Bash(ls *)
---

# Scan de Oportunidades de Reuso

Diretório alvo: **$ARGUMENTS**

## Passo 1 — Inventário de arquivos

```!
find $ARGUMENTS -type f \( -name "*.vue" -o -name "*.js" \) | sort
```

## Passo 2 — Detectar padrões repetidos

### 2a. Lógica de fetch/loading/error repetida
```!
grep -rn "const loading = ref(false)\|const error = ref(null)\|const data = ref(" $ARGUMENTS --include="*.vue" --include="*.js" -l
```
Se 3+ arquivos → candidato a composable `useFetch` ou `useAsync`.

### 2b. Handlers de formulário repetidos
```!
grep -rn "handleSubmit\|onSubmit\|submitForm" $ARGUMENTS --include="*.vue" -l
```

### 2c. Validações repetidas
```!
grep -rn "\.trim()\|\.length > 0\|\.includes('@')" $ARGUMENTS --include="*.vue" --include="*.js" -l
```
Se 3+ arquivos → candidato a `src/utils/validationUtils.js`.

### 2d. Formatações repetidas
```!
grep -rn "toFixed\|toLocaleDateString\|toLocaleString\|padStart" $ARGUMENTS --include="*.vue" --include="*.js" -l
```
Se 3+ arquivos → candidato a `src/utils/formatUtils.js`.

### 2e. Blocos de template similares
Leia os arquivos `.vue` identificados e procure blocos de template com estrutura similar (cards, list items, form fields).

## Passo 3 — Análise de composables existentes
```!
ls $ARGUMENTS/../composables 2>/dev/null || echo "sem diretório composables"
```
Verifique se existem composables que já resolvem alguns padrões detectados.

## Passo 4 — Relatório priorizado

```
## Scan de Reuso — [diretório]

### Alta prioridade (extrair agora)
| Padrão | Ocorrências | Tipo de extração | Arquivos |
|--------|-------------|-----------------|---------|
| loading/error/data | 5 arquivos | composable useAsync | ... |

### Média prioridade (extrair quando tocar esses arquivos)
| Padrão | Ocorrências | Tipo de extração | Arquivos |
|--------|-------------|-----------------|---------|

### Baixa prioridade (monitorar)
| Padrão | Ocorrências | Razão para esperar |
|--------|-------------|-------------------|

### Já bem reutilizado ✓
- item
```

Ofereça executar `/extract-composable` para os itens de alta prioridade.
