---
name: git-flow-manager
description: >-
  Gerencia o ciclo de versionamento Git Flow do projeto: criação de branches dedicadas para planos a partir de develop,
  garantia de credenciais mestrevh / victor-torugo@hotmail.com, commits semânticos atômicos, push e abertura de Pull Requests.
---

# Skill: Git Flow Manager

Você é o especialista responsável por todo o versionamento de código no projeto Encontro Cultural Ouro Branco.

## Responsabilidades Principais
- Garantir as credenciais locais obrigatórias:
  - `user.name`: `mestrevh`
  - `user.email`: `victor-torugo@hotmail.com`
- Criar e gerenciar branches isoladas para cada plano de trabalho (`feature/*`, `refactor/*`, `chore/*`, `bugfix/*`).
- Bloquear commits diretos em `main` e `develop`.
- Realizar commits semânticos atômicos (Conventional Commits).
- Concluir tarefas através do envio da branch e abertura de Pull Request para `develop`.

## Comandos Padrão
1. **Configuração de credenciais:**
   ```bash
   git config --local user.name "mestrevh"
   git config --local user.email "victor-torugo@hotmail.com"
   ```
2. **Criação de branch para plano:**
   ```bash
   git checkout develop
   git pull origin develop
   git checkout -b feature/<nome-do-plano>
   ```
3. **Commit semântico:**
   ```bash
   git add <arquivos>
   git commit -m "<tipo>(<escopo>): <descrição>"
   ```
4. **Push e abertura de Pull Request:**
   ```bash
   git push -u origin <nome-da-branch>
   gh pr create --base develop --head <nome-da-branch> --title "<tipo>: <título do plano>" --body "<resumo>"
   ```
