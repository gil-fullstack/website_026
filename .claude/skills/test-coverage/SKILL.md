---
name: test-coverage
description: Analisa a cobertura de testes do projeto ou de um diretório específico, identifica arquivos sem cobertura e prioriza o que testar primeiro. Pode configurar relatório de cobertura no Vitest. Exemplo: /test-coverage src/composables/
argument-hint: <diretório-ou-arquivo>
user-invocable: true
allowed-tools:
  - Read
  - Edit
  - Bash(yarn *)
  - Bash(find *)
  - Bash(grep *)
  - Bash(ls *)
---

# Análise de Cobertura de Testes

Alvo: **$ARGUMENTS**

## Passo 1 — Verificar configuração de cobertura

```!
cat vite.config.js 2>/dev/null || cat vite.config.ts 2>/dev/null
```

Se cobertura não estiver configurada no Vitest, adicionar ao `vite.config.js`:

```js
test: {
  coverage: {
    provider: 'v8',
    reporter: ['text', 'json', 'html'],
    include: ['src/**/*.{vue,js}'],
    exclude: ['src/main.js', 'src/assets/**']
  }
}
```

E instalar: `yarn add -D @vitest/coverage-v8`

## Passo 2 — Inventário de arquivos testáveis

```!
find $ARGUMENTS -type f \( -name "*.vue" -o -name "*.js" \) | grep -v "spec\|test\|node_modules\|main.js" | sort
```

## Passo 3 — Inventário de arquivos de teste existentes

```!
find $ARGUMENTS -type f \( -name "*.spec.js" -o -name "*.test.js" \) | sort
```

## Passo 4 — Análise de lacunas

Compare os dois inventários e identifique:
- Arquivos sem nenhum teste (cobertura 0%)
- Composables testados (alta prioridade para cobertura)
- Componentes críticos sem teste

## Passo 5 — Executar cobertura (se Vitest estiver configurado)

```!
cd $CLAUDE_PROJECT_DIR && yarn test --coverage --reporter=verbose 2>&1 | tail -50
```

## Passo 6 — Priorização

Apresente relatório:

```
## Relatório de Cobertura — $ARGUMENTS

### Sem cobertura (criar agora)
| Arquivo | Criticidade | Razão |
|---------|------------|-------|
| src/composables/useAuth.js | Alta | Lógica de autenticação crítica |

### Cobertura parcial (melhorar)
| Arquivo | Estimativa | O que falta |
|---------|-----------|-------------|

### Bem coberto ✓
| Arquivo | Status |
|---------|--------|

### Metas recomendadas
- Composables e utils: 80% de cobertura
- Componentes: 70% de cobertura
- Serviços (com mocks): 85% de cobertura
```

## Passo 7 — Plano de ação

Liste em ordem de prioridade os arquivos para os quais deve-se executar `/test-generate`.
Ofereça executar `/test-generate` no arquivo de maior prioridade imediatamente.
