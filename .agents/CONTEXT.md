# Contexto do Projeto
## Identidade
Aplicação Web Mobile-First, utilizando Astro e Tailwind CSS. Foco extremo em UX/UI responsivo, performance, estado da arte em design (micro-animações, glassmorphism) e acessibilidade.

## Arquitetura
- **Framework:** Astro (SSG focado em performance, ilhas de hidratação parciais quando necessário).
- **Estilização:** Tailwind CSS (Utility-first, paletas de cores não genéricas, HSL).
- **Linguagem:** TypeScript estrito.
- **Testes:** Vitest + Testing Library (TDD é estritamente obrigatório).

## Git Flow
- `main`: Código em produção (deployável).
- `develop`: Código de integração.
- `feature/*`: Novas funcionalidades (ramificadas da `develop`).
- `bugfix/*`, `release/*`, `hotfix/*`: Fluxos secundários.

## Execução via Antigravity CLI
- Todos os passos devem ser guiados pelos arquivos em `docs/plans/`.
- Subagentes (`self` ou especializados) podem ser invocados para paralelizar tarefas como revisão de UX ou testes.