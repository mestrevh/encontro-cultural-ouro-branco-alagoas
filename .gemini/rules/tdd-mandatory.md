# Test-Driven Development (TDD) Rules

1. **Fluxo Estrito do TDD para Planos:**
   Dentro de qualquer plano de desenvolvimento ou refatoração, siga rigorosamente a sequência:
   - **Passo 1: Cria os Testes (Red):** Escreva testes unitários ou de integração antes de qualquer código funcional (`*.test.ts` ou `*.spec.ts`). Garanta que eles expressem claramente o comportamento esperado.
   - **Passo 2: Faça o Código (Green):** Escreva a implementação estrita necessária para fazer os testes passarem.
   - **Passo 3: Execute os Testes:** Execute a suíte de testes no frontend (`npm run test` em `frontend/`).
   - **Passo 4: Validação Total & Refactor:** Se houver falhas, corrija o código até que 100% dos testes passem. Refatore para melhorar a clareza e manutenibilidade.
   - **Passo 5: Finalização do Plano com Pull Request:** Apenas após todos os testes passarem com sucesso, comite as alterações, envie para a branch remota e crie o Pull Request para `develop`.

2. **Cobertura:** Componentes de interface, stores e funções utilitárias devem estar devidamente cobertos por testes unitários ou de integração via Vitest.

3. **Testing Library & Acessibilidade:** Focar os testes no comportamento e na acessibilidade do usuário:
   - **Use:** `getByRole`, `getByLabelText`, `getByText`, `getByAltText`.
   - **Evite:** `getByTestId` (a menos que não haja alternativa semântica).

4. **Isolamento:** Testar o componente isoladamente, mockando dependências externas (como chamadas de rede ou APIs Cloudflare/Astro) sempre que apropriado.
