---
name: ux-audit
description: Audita componentes Vue e arquivos CSS em busca de problemas de UX, acessibilidade (WCAG 2.1 AA), responsividade e hierarquia visual. Use quando quiser revisar a qualidade UX de um componente existente. Exemplo de uso: /ux-audit src/components/LoginForm.vue
argument-hint: <caminho-do-componente-ou-diretório>
user-invocable: true
allowed-tools:
  - Read
  - Bash(grep *)
  - Bash(find *)
  - Bash(ls *)
paths:
  - "src/**/*.vue"
  - "src/**/*.css"
---

# UX Audit

Realize uma auditoria completa de UX no arquivo ou diretório: **$ARGUMENTS**

## Passo 1 — Mapeamento

Se `$ARGUMENTS` for um diretório, liste todos os arquivos `.vue` e `.css` nele.
Se for um arquivo específico, trabalhe diretamente nele.

```!
find $ARGUMENTS -name "*.vue" -o -name "*.css" 2>/dev/null | head -20
```

## Passo 2 — Checklist de Acessibilidade (WCAG 2.1 AA)

Para cada arquivo `.vue` encontrado, verifique:

**Estrutura semântica:**
- `<h1>` único por página/view?
- Hierarquia de headings sequencial (h1 → h2 → h3)?
- Uso correto de `<main>`, `<nav>`, `<section>`, `<article>`, `<footer>`?
- Links (`<a>`) usados para navegação; botões (`<button>`) para ações?

**Elementos interativos:**
- Todo `<button>` tem texto visível ou `aria-label`?
- Todo `<input>` tem `<label>` associado via `for`/`id` ou wrapping?
- Imagens com `alt` descritivo (ou `alt=""` se decorativa)?
- Nunca `outline: none` sem alternativa de foco?

**Contraste e cores:**
- Listar todas as definições de `color` e `background-color` para verificação manual
- Alertar sobre cores que podem ter baixo contraste

**Touch e responsividade:**
- Elementos interativos têm dimensões mínimas de 44x44px?
- Media queries presentes para diferentes breakpoints?
- `prefers-reduced-motion` respeitado em animações?

## Passo 3 — Análise de Feedback Visual

Verificar presença de:
- Estados de loading (skeleton, spinner, progress)
- Mensagens de erro próximas ao elemento problema
- Confirmação de ações bem-sucedidas
- Estados vazios (empty states) para listas

## Passo 4 — Relatório

Apresente o resultado em formato:

```
## Auditoria UX — [nome do arquivo]

### Crítico (bloqueia acessibilidade)
- [ ] item

### Importante (impacta usabilidade)
- [ ] item

### Sugestão (melhoria de qualidade)
- [ ] item

### Aprovado ✓
- item aprovado
```

Ofereça corrigir os itens críticos imediatamente.
