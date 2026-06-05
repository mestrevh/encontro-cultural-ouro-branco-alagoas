# Plano de Execução - Plan 02 (Design System & TDD)

**Objetivo:** Implementar Botões Globais e variáveis do Design System via TDD.

## 1. Comando Git (Criação de Branch)
* Comando: `git checkout -b feature/design-system`
* Regra Associada: `git-flow-rules.md`

## 2. Estrutura Planejada de Arquivos
* `frontend/src/components/ui/Button.astro` (Componente de UI isolado)
* `frontend/src/components/ui/__tests__/Button.spec.ts` (Especificações)
* `frontend/src/styles/global.css` (Adição de tokens do Design System)

## 3. Plano de TDD (Red-Green-Refactor)
**A. Red (Escrever o teste para falhar):**
Vamos criar o `Button.spec.ts` validando o seguinte comportamento com *Testing Library*:
1. Verifica se o componente renderiza o `<slot/>` corretamente (`getByRole('button', { name: /texto/ })`).
2. Verifica se aceita os diferentes estilos visuais pelas `Props` (ex: `variant: "primary" | "secondary"`).
3. Garante que repassa corretamente atributos padrão do HTML como `type="submit"` ou `disabled`.
*Expectativa:* O teste irá falhar porque o componente não existe.

**B. Green (Mínimo para passar):**
Vamos criar o arquivo `Button.astro` apenas com a lógica de Props estrita com TypeScript e renderizar a tag `<button><slot/></button>`. O teste deverá passar.

**C. Refactor (Design Wow):**
Com os testes passando, vamos aplicar classes do Tailwind no componente para criar um visual premium: gradientes sutis, transições suaves de hover, pseudo-estados limpos para acessibilidade (focus-visible). Os testes certificarão que a mecânica do botão não quebrou durante o design.
