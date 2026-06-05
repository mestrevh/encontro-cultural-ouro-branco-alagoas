# Plano de Execução - Plan 04 (Páginas de Conteúdo)

**Objetivo:** Implementar as páginas estáticas com alto desempenho (zero JS no client) e orientadas por TDD, consumindo dados mockados.

## 1. Comandos Git Flow
```bash
git checkout develop
git merge feature/base-architecture -m "chore: merge feature/base-architecture to develop"
git checkout -b feature/content-pages
```

## 2. Arquitetura de Dados Mockados
O coração desta etapa será criar um repositório estático em `frontend/src/data/mock.ts` contendo:
* **`artistas`**: Array de objetos contendo `id`, `name`, `genre` e `time`.
* **`agenda`**: Array estruturado por dia e palco.
* **`sobre`**: Objeto com parágrafos da história do evento.

## 3. Planejamento de Testes e TDD (Baby Steps)

**Passo 1: Criação do Mock e Página de Programação**
* **Red:** Criar o teste `Programacao.spec.ts` validando se a página consegue ler o Mock e renderizar na tela o artista principal listado para o dia 1.
* **Green & Refactor:** Desenvolver a página `src/pages/programacao.astro`, englobando no `<Layout>` existente, iterando na agenda com `map()` e estilizando com grid responsiva do Tailwind.

**Passo 2: Página de Artistas**
* **Red:** `Artistas.spec.ts` exigirá a presença semântica de `<article>` e exibição do nome dos artistas importados.
* **Green & Refactor:** Desenvolver `src/pages/artistas.astro` usando cartões premium (efeito glassmorphism/hover).

**Passo 3: Página Sobre**
* Teste simples para checar a renderização do texto institucional e criação de `src/pages/sobre.astro`.

## 4. Trilha de Commits Esperada
1. `chore: branch for content pages`
2. `feat: add local mock database for event content`
3. `test: add integration specs for content pages`
4. `feat: implement SSG content pages (programacao, artistas, sobre)`
