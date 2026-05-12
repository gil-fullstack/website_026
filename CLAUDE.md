# website_026

Vue 3 + Vite SPA. JavaScript puro (sem TypeScript). Gerenciador de pacotes: Yarn.

## Stack
- Vue 3 (Composition API, `<script setup>`)
- Vite 8
- Yarn

## Estrutura do projeto
```
src/
├── components/    # Componentes Vue reutilizáveis
├── composables/   # Funções de composição (use*)
├── services/      # Serviços HTTP (Axios)
├── stores/        # Estado global (Pinia)
├── assets/        # Imagens, fontes
└── style.css      # Estilos globais
```

## Comandos
- `yarn dev` — servidor de desenvolvimento
- `yarn build` — build de produção
- `yarn preview` — preview do build
- `yarn test` — executa testes (quando configurado)

## Agentes especializados disponíveis
Os agentes são invocados automaticamente quando o contexto do input corresponde à sua especialidade.
Não são carregados globalmente — apenas quando necessário.

| Agente | Quando usar |
|--------|-------------|
| `ux-specialist` | UX, acessibilidade, layout, responsividade, micro-interações |
| `frontend-patterns-specialist` | Design patterns, SOLID, lógica de programação, arquitetura |
| `code-reuse-specialist` | Extração de composables, utilitários, eliminação de duplicação |
| `test-specialist` | Testes unitários, integração, cobertura, mocking |
| `vue-specialist` | Vue 3 API, componentes, Pinia, Vue Router, performance |
| `axios-specialist` | Integração HTTP, interceptors, tratamento de erros, contratos de API |

## Convenções
- Componentes: PascalCase (`MyComponent.vue`)
- Composables: camelCase com prefixo `use` (`useMyFeature.js`)
- Serviços: camelCase com sufixo `Service` (`userService.js`)
- Estilos: Scoped CSS no próprio componente; CSS global em `style.css`
- Props explícitas com `defineProps`, emits com `defineEmits`
