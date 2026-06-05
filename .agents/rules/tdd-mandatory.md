# Test-Driven Development (TDD) Rules

1. **Red-Green-Refactor:** Nenhuma linha de código de implementação pode ser escrita antes de haver um teste correspondente falhando.
2. **Cobertura:** Componentes de interface e funções utilitárias devem estar cobertos por testes unitários ou de integração (Vitest).
3. **Testing Library:** Focar os testes no comportamento e na acessibilidade do usuário. 
   - **Use:** `getByRole`, `getByLabelText`, `getByText`.
   - **Evite:** `getByTestId` (a menos que não haja alternativa semântica).
4. **Isolamento:** Testar o componente isoladamente, mockando dependências externas (como APIs ou stores globais) sempre que possível.
