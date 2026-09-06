# Plano de Execução - Plan 05 (Refinamento de UX)

## 1. Fluxo Git
```bash
git checkout develop
git merge feature/content-pages -m "chore: merge feature/content-pages to develop"
git checkout -b feature/ux-refinements
```

## 2. Ações de UX e UI Premium
- **Global:** Injetar `@keyframes fade-in` e classes de utilidade no `global.css`.
- **Index/Hero:** Refatorar `index.astro` (que estava vazio desde o Plan 01) para uma seção "Hero" impactante. 
  - Fundo escuro com blur em gradientes (estilo aurora borealis).
  - Texto grande entrando com `fade-in`.
  - Botões para "Ver Programação" e "Comprar Ingresso".

## 3. Estratégia de Commits
1. `chore: merge feature/content-pages and branch for ux`
2. `style: add global animations to tailwind config/css`
3. `feat: implement premium landing page (Hero Section) with wow effect`
