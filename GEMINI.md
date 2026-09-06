# Contexto do Projeto

## Identidade
Aplicação Web Mobile-First, utilizando Astro e Tailwind CSS. Foco extremo em UX/UI responsivo, performance, estado da arte em design (micro-animações, glassmorphism) e acessibilidade.

## Arquitetura
- **Framework:** Astro (SSG focado em performance, ilhas de hidratação parciais quando necessário).
- **Estilização:** Tailwind CSS (Utility-first, paletas de cores não genéricas, HSL).
- **Linguagem:** TypeScript estrito.
- **Testes:** Vitest + Testing Library (TDD é estritamente obrigatório).
- **Diretório de código:** `frontend/`

---

## 1. Registro Obrigatório de Prompts
- **Regra:** Todo prompt enviado pelo usuário DEVE ser salvo no histórico em `.gemini/prompts/<N>.md`.
- **Sequência:** O arquivo deve seguir a numeração incremental sequencial (ex: `1.md`, `2.md`, ..., `12.md`, `13.md`, etc.).
- **Conteúdo:** O arquivo deve conter exatamente o texto original do prompt enviado pelo usuário.

---

## 2. Credenciais Git do Projeto
Todas as operações Git (commits, tags, pushes, PRs) dentro deste projeto DEVEM utilizar estritamente as credenciais:
- **User:** `mestrevh`
- **Email:** `victor-torugo@hotmail.com`

Configuração local obrigatória no repositório:
```bash
git config --local user.name "mestrevh"
git config --local user.email "victor-torugo@hotmail.com"
```

---

## 3. Workflow Branch Deploy para Execução de Planos
- **Regra Geral:** NUNCA commitar ou fazer alterações de código diretamente nas branches `main` ou `develop`.
- **Criação de Branch para o Plano:** Todo plano de trabalho ou nova tarefa DEVE iniciar com a criação de uma nova branch ramificada de `develop`:
  ```bash
  git checkout develop
  git pull origin develop
  git checkout -b feature/<nome-do-plano> # ou bugfix/, chore/, refactor/
  ```
- Todas as alterações, testes e arquivos do plano devem ser trabalhados dentro dessa branch dedicada.

---

## 4. Ciclo TDD Estrito (Test-Driven Development)
Dentro de qualquer plano, a implementação DEVE seguir estritamente o ciclo TDD:
1. **Cria os testes (Red):**
   - Escreva ou atualize os testes unitários/integração usando Vitest + Testing Library antes do código funcional.
   - Localização: `frontend/src/**/*.test.ts` ou `.spec.ts`.
   - Use seletores semânticos e orientados a acessibilidade (`getByRole`, `getByLabelText`, etc.).
2. **Faça o código (Green):**
   - Desenvolva a implementação mínima necessária em TypeScript/Astro para atender aos requisitos dos testes.
3. **Execute os testes:**
   - Execute o comando de teste no diretório do frontend:
     ```bash
     cd frontend && npm run test # ou npx vitest run
     ```
4. **Se todos os testes passarem:**
   - Realize refatoração limpa do código mantendo os testes 100% verdes.
   - Faça commits semânticos atômicos seguindo o padrão Conventional Commits (`feat:`, `fix:`, `test:`, `refactor:`, `chore:`).

---

## 5. Finalização do Plano com Pull Request
Após a aprovação integral dos testes (todos passando com sucesso):
1. Confirme que todos os arquivos modificados e testes estão commitados com as credenciais configuradas (`mestrevh` / `victor-torugo@hotmail.com`).
2. Faça o push da branch para o origin:
   ```bash
   git push -u origin <nome-da-branch>
   ```
3. Finalize o plano criando um **Pull Request** apontando para `develop`:
   ```bash
   gh pr create --base develop --head <nome-da-branch> --title "<tipo>: <título do plano>" --body "<descrição das alterações e cobertura de testes>"
   ```
4. O plano é dado como concluído após a abertura bem-sucedida do Pull Request e o relato ao usuário.

---

## Execução via Antigravity CLI e Skills
- Utilize as skills em `.gemini/skills/` para guiar a execução das etapas:
  - `branch-deploy-tdd`: Orquestra o ciclo completo (Branch -> TDD -> PR).
  - `prompt-recorder`: Garante o salvamento dos prompts em `.gemini/prompts/`.
  - `git-flow-manager`: Garante regras de versionamento e credenciais.
  - `tdd-vitest-runner`: Executa e audita os testes com Vitest.
  - `astro-component-builder`, `tailwind-styler`, `ux-ui-reviewer`: Construção e revisão de código.
