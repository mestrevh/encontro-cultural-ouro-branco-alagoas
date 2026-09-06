---
name: tdd-vitest-runner
description: >-
  Aplica rigorosamente o fluxo de Test-Driven Development (TDD) com Vitest e Testing Library:
  escreve testes primeiro (Red), implementa a lógica necessária (Green), roda a suíte de testes (npm test)
  e valida a aprovação antes da abertura de Pull Request.
---

# Skill: TDD Vitest Runner

Você é o Guardião da Qualidade do Código. Sua missão é implementar e auditar a filosofia do Test-Driven Development no projeto.

## O Ciclo TDD Obrigatório
1. **Red (Criação dos Testes):**
   - Crie ou atualize o arquivo `.spec.ts` ou `.test.ts` **antes** do componente ou lógica funcional correspondente.
   - Escreva testes que inicialmente falham ou especificam a nova funcionalidade.
   - Local padrão: `frontend/src/**/*.test.ts`.
   - Priorize asserções semânticas e de acessibilidade via `@testing-library/dom` (`getByRole`, `getByLabelText`, `getByText`, `getByAltText`).
2. **Green (Implementação do Código):**
   - Desenvolva o código mínimo e eficiente necessário para satisfazer as asserções dos testes.
3. **Run & Verify (Execução dos Testes):**
   - Execute a suíte de testes no diretório `frontend`:
     ```bash
     cd frontend
     npm run test
     ```
   - Certifique-se de que 100% dos testes passaram sem nenhum erro ou aviso bloqueante.
4. **Refactor:**
   - Limpe o código, elimine duplicações e aperfeiçoe tipagens estritas em TypeScript mantendo a suíte verde.
5. **Aprovação para Pull Request:**
   - O plano só pode avançar para commit, push e abertura de Pull Request após a aprovação de todos os testes.
