---
name: logic-review
description: Revisa a lógica de programação de um arquivo ou função Vue/JS identificando complexidade desnecessária, código morto, violações de SOLID, aninhamento excessivo e oportunidades de simplificação. Exemplo: /logic-review src/composables/useCheckout.js
argument-hint: <caminho-do-arquivo>
user-invocable: true
allowed-tools:
  - Read
  - Edit
  - Bash(grep *)
---

# Revisão de Lógica de Programação

Revisando: **$ARGUMENTS**

## Passo 1 — Leitura completa

Leia o arquivo inteiro e compreenda o que ele faz antes de qualquer análise.

## Passo 2 — Métricas de complexidade

Para cada função no arquivo, verifique:

| Métrica | Limiar aceitável | Ação se exceder |
|---------|-----------------|-----------------|
| Linhas por função | ≤ 20 | Extrair subfunções |
| Níveis de aninhamento | ≤ 2 | Early return / extração |
| Parâmetros por função | ≤ 3 | Usar objeto de opções |
| Branches (if/else/switch) | ≤ 5 por função | Simplificar ou extrair |
| Dependências externas | ≤ 5 por módulo | Revisar acoplamento |

## Passo 3 — Checklist de qualidade

**Clareza:**
- [ ] Nomes descrevem intenção (verbo + substantivo para funções)
- [ ] Sem abreviações obscuras (`calc` → `calculateTotal`)
- [ ] Sem números mágicos (extrair para constante nomeada)
- [ ] Sem flags booleanas como parâmetro (`processUser(true)` → `processUserAsAdmin()`)

**Estrutura:**
- [ ] Early returns para validações — lógica principal sem aninhamento
- [ ] Sem `else` após `return` (desnecessário)
- [ ] Código morto removido (variáveis nunca usadas, blocos nunca atingidos)
- [ ] Repetição eliminada (DRY)

**Vue específico:**
- [ ] Sem lógica de negócio no template (mover para `computed` ou função)
- [ ] `watch` não reimplementa o que `computed` faria
- [ ] Dependências reativas não acessadas fora de contexto reativo

**Erros:**
- [ ] Erros capturados em todos os `await` ou `.then()`
- [ ] Sem `catch(e) {}` vazio — pelo menos logar ou relançar

## Passo 4 — Relatório e refatoração

Apresente:
```
## Revisão de Lógica — [nome do arquivo]

### Problemas encontrados
| Função | Linha | Problema | Severidade |
|--------|-------|---------|-----------|
| nomeFunc | 42 | aninhamento de 4 níveis | alta |

### Sugestões de refatoração
[código antes → código depois para cada item]
```

Ofereça implementar as correções de alta e média severidade imediatamente.
