---
name: design-patterns
description: Aplica um design pattern específico (Container/Presenter, Strategy, Observer, Composite, Decorator, Factory) em componentes ou módulos Vue existentes. Exemplo: /design-patterns Container/Presenter no UserDashboard.vue
argument-hint: <pattern> em <arquivo-ou-componente>
user-invocable: true
allowed-tools:
  - Read
  - Edit
  - Write
  - Bash(find *)
  - Bash(grep *)
---

# Aplicar Design Pattern

Aplicar padrão: **$ARGUMENTS**

## Passo 1 — Identificar o padrão e o alvo

Parse os argumentos para identificar:
- **Padrão solicitado**: Container/Presenter, Strategy, Observer, Composite, Decorator, Factory, etc.
- **Arquivo alvo**: caminho do componente ou módulo

Leia o arquivo alvo completamente antes de qualquer modificação.

## Passo 2 — Análise do código atual

Identifique:
- Responsabilidades atuais do arquivo (o que faz?)
- O que causou a necessidade do padrão (problema que resolve)
- Dependências e contratos com outros arquivos

## Passo 3 — Plano de refatoração

Antes de editar, apresente:
```
## Plano de aplicação do padrão [NOME]

**Problema**: descrição do problema atual
**Solução**: como o padrão resolve
**Arquivos afetados**: lista de arquivos que serão criados/modificados
**Trade-offs**: vantagens e custos da mudança
```

Aguarde confirmação antes de implementar.

## Passo 4 — Implementação

### Container/Presenter
- Extrair lógica de dados para `*Container.vue` (usa composable, gerencia estado)
- Manter template em `*Presenter.vue` (recebe props, emite eventos)

### Strategy
- Definir interface comum (assinatura de função/objeto retornado)
- Criar implementações concretas em `src/strategies/`
- Injetar via prop ou provide/inject

### Observer (Pinia)
- Criar store em `src/stores/`
- Substituir comunicação direta por subscription ao store

### Composite (Slots)
- Transformar variações de conteúdo em slots nomeados
- Manter apenas estrutura/comportamento no componente pai

### Decorator (Composable wrapping)
- Criar composable novo que importa e extende o original
- Adicionar comportamento sem modificar a implementação base

## Passo 5 — Verificação

Após implementar:
1. Confirmar que todos os imports estão corretos
2. Confirmar que a API pública do componente não quebrou
3. Listar arquivos criados e modificados
