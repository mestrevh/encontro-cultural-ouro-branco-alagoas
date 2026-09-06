---
name: branch-deploy-tdd
description: >-
  Orquestra a execução completa de planos de refatoração ou funcionalidades seguindo o workflow Branch Deploy:
  criação de branch dedicada a partir de develop, ciclo estrito de TDD (escreve testes -> implementa código ->
  executa vitest -> refatora) e finalização com abertura de Pull Request utilizando as credenciais mestrevh.
---

# Skill: Branch Deploy & TDD Plan Runner

Esta skill define e orquestra o ciclo de vida obrigatório para qualquer plano de desenvolvimento ou refatoração no projeto Encontro Cultural Ouro Branco.

## 1. Verificação de Credenciais Git
Antes de qualquer operação no repositório, garanta que as credenciais locais estejam configuradas:
```bash
git config --local user.name "mestrevh"
git config --local user.email "victor-torugo@hotmail.com"
```
Valide com `git config --local -l`.

## 2. Registro do Prompt do Usuário
Verifique se o prompt recebido já foi salvo em `.gemini/prompts/<N>.md`. Caso contrário, identifique o próximo número sequencial e salve-o imediatamente.

## 3. Workflow Branch Deploy (Criação de Branch para o Plano)
**Regra:** Nenhuma alteração é feita diretamente em `main` ou `develop`.
1. Garanta que a working tree esteja limpa ou arquivada:
   ```bash
   git status
   ```
2. Sincronize com a branch `develop`:
   ```bash
   git checkout develop
   git pull origin develop
   ```
3. Crie a branch específica do plano:
   ```bash
   git checkout -b feature/<nome-do-plano> # ou refactor/, chore/, bugfix/
   ```

## 4. Ciclo Estrito de TDD (Test-Driven Development)
Durante a execução de cada etapa ou subtarefa do plano:

### Passo A: Cria os Testes (Red)
- Escreva testes unitários ou de integração antes de alterar ou criar componentes/módulos.
- Local: `frontend/src/**/*.test.ts` ou `*.spec.ts`.
- Valide cenários de comportamento, acessibilidade (`getByRole`, `getByText`, etc.) e contratos de dados.

### Passo B: Faça o Código (Green)
- Escreva a implementação estrita necessária para satisfazer os testes criados.
- Respeite o padrão de componentes Astro, TypeScript estrito e classes utilitárias Tailwind CSS.

### Passo C: Execute os Testes
- Execute a suíte de testes no diretório `frontend/`:
  ```bash
  cd frontend
  npm run test
  ```
- Todos os testes devem ser executados e validados.

### Passo D: Refatoração (Refactor)
- Limpe o código, otimize estilos e garanta boas práticas sem quebrar nenhum teste.
- Re-execute `npm run test` para certificar que tudo continua 100% verde.

## 5. Finalização do Plano & Abertura de Pull Request
Quando todas as tarefas do plano estiverem concluídas e todos os testes estiverem passando:
1. Revise as alterações com `git status` e `git diff`.
2. Realize commits atômicos semânticos (Conventional Commits):
   ```bash
   git add <arquivos>
   git commit -m "<tipo>(<escopo>): <descrição clara>"
   ```
3. Envie a branch para o repositório remoto:
   ```bash
   git push -u origin <nome-da-branch>
   ```
4. Crie o Pull Request direcionado para a branch `develop`:
   ```bash
   gh pr create --base develop --head <nome-da-branch> --title "<tipo>: <título do plano>" --body "<resumo do plano e evidências dos testes>"
   ```
5. Apresente o link do Pull Request criado e o relatório final de execução ao usuário.
