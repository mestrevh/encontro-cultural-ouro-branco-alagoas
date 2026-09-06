# Plano de Execução - Plan 01 (Inicialização do Projeto)

**Data de Aprovação:** 2026-06-05

## Passo 1: Inicializar a branch `develop`
* Comando: `git checkout -b develop`
* Motivo: Seguir a regra de git flow para não comitar na main.

## Passo 2: Inicializar o Projeto Astro
* Comando: `npx create-astro@latest ./frontend --template basics --typescript strict --install no --git no --yes`
* Motivo: Base limpa de Astro com TypeScript e sem git duplicado (já temos na raiz).

## Passo 3: Dependências Base, Tailwind e Vitest
* Comandos em `/frontend`:
  * `npm install`
  * `npx astro add tailwind --yes`
  * `npm install -D vitest @vitest/ui jsdom @testing-library/dom`

## Passo 4: Configurar Tipografia e Arquivos
* `vitest.config.ts` (raiz do frontend)
* `tailwind.config.mjs` (customização de fontes)
* `src/styles/global.css` (reset e injeção de base)

## Passo 5: Limpeza
* Remoção de `src/components/Card.astro`.
* Limpeza de boilerplate no `src/pages/index.astro`.
