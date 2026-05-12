---
paths:
  - "src/**/*.vue"
  - "src/**/*.css"
  - "src/**/*.scss"
  - "public/**/*.html"
  - "index.html"
---

# UX Design — Regras

## Acessibilidade (WCAG 2.1 AA)
- Todo elemento interativo precisa de texto acessível: `aria-label`, `aria-labelledby`, ou texto visível
- Contraste mínimo: 4.5:1 para texto normal, 3:1 para texto grande (>18px bold ou >24px)
- Navegação por teclado: `tabindex` correto, foco visível (nunca `outline: none` sem alternativa)
- Imagens decorativas: `alt=""`. Imagens informativas: `alt` descritivo
- Formulários: `<label>` associado a cada `<input>` via `for`/`id` ou wrapper
- Elementos de ação: usar `<button>` para ações, `<a>` para navegação
- Semântica HTML: `<main>`, `<header>`, `<nav>`, `<section>`, `<article>`, `<footer>`

## Hierarquia visual
- Apenas 1 `<h1>` por página; hierarquia sequencial (h1 → h2 → h3)
- Espaçamento consistente: usar escala de 8px (8, 16, 24, 32, 48, 64)
- Comprimento de linha ideal: 60–80 caracteres para leiturabilidade
- Densidade de informação: respeitar espaço em branco; não comprimir demais

## Responsividade
- Mobile-first: estilos base para mobile, `@media (min-width: ...)` para telas maiores
- Breakpoints padrão: 480px (mobile-lg), 768px (tablet), 1024px (desktop), 1280px (desktop-lg)
- Touch targets mínimos: 44x44px para elementos interativos
- Evitar hover como única indicação de funcionalidade (não existe em touch)

## Feedback e micro-interações
- Estados de loading devem ser visíveis (skeleton, spinner, progress)
- Erros devem ser próximos ao elemento com problema, legíveis e acionáveis
- Sucesso confirma a ação concluída de forma não intrusiva
- Transições: 150–300ms para feedback imediato; 300–500ms para transições de página
- Usar `prefers-reduced-motion` para desabilitar animações quando solicitado

## Formulários
- Validação em tempo real após o campo perder foco (não durante a digitação)
- Mensagens de erro em vermelho com ícone + texto (nunca só cor)
- Placeholder não substitui label — ambos devem existir
- Botão de submit desabilitado apenas se a razão for óbvia para o usuário
