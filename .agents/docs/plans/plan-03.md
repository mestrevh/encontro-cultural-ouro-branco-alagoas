# Plano de Execução - Plan 03 (Arquitetura Base & Navegação)

**Objetivo:** Construir o esqueleto estrutural (Layout, Header, Nav, Footer) do Encontro Cultural Ouro Branco.

## 1. Fluxo Git (Branching & Merge)
Vamos executar os seguintes comandos sequenciais para orquestrar as branches:
```bash
git checkout develop
git merge feature/design-system -m "merge: incorpora design system base e componentes iniciais"
git checkout -b feature/base-architecture
```

## 2. Estratégia de Commits
Seguindo o `git-flow-rules.md`, os commits da iteração serão separados logicamente:
1. `chore: merge feature/design-system to develop`
2. `feat: implement root Layout wrapper with global css`
3. `test: add Header and Navigation specs`
4. `feat: build responsive Header and Mobile menu`
5. `test: add Footer specs`
6. `feat: implement global Footer`

## 3. Planejamento TDD: Fase 1 (Layout & Header)
Para respeitar a regra de não causar gargalos na janela de contexto, faremos em passos.

**Passo 1: Layout Wrapper**
* **Teste (Red):** `Layout.spec.ts` validará se a página retorna a estrutura principal HTML (`<head>`, `<title>`, `<body>`) e se injeta corretamente o conteúdo via `<slot/>`.
* **Componente (Green):** Modificaremos/criaremos o `src/layouts/Layout.astro`.

**Passo 2: Header Responsivo**
* **Teste (Red):** `Header.spec.ts` buscará pelas *roles* de navegação (`getByRole('navigation')`), checará os links principais e exigirá que o botão "Menu" (mobile) exista e tenha o estado de visibilidade correto.
* **Componente (Refactor):** Faremos a renderização do `Header.astro`. Usaremos `sm:hidden` e `md:flex` do TailwindCSS para alternar entre versão Mobile-First e Desktop Premium.

## 4. Próximos Passos
Após essas primeiras iterações passarem no Vitest, repetiremos o ciclo para o Footer e finalizaremos o plan.
