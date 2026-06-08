# Plano de Ação: Melhoria de Responsividade Mobile

## Objetivo
Melhorar significativamente a experiência do usuário (UX) e interface (UI) no site do **Encontro Cultural Ouro Branco** em dispositivos móveis, utilizando o conceito de Mobile-First.

## Metodologia de Trabalho (TDD Estrito)
Toda e qualquer alteração no projeto seguirá rigidamente o fluxo de TDD (Test-Driven Development):
1. **Modificação de Componente Existente:** Alterar teste -> Rodar TDD (falha esperada) -> Modificar componente -> Rodar TDD (sucesso) -> Finalizar subplano.
2. **Criação de Feature/Componente Novo:** Criar teste -> Rodar TDD (falha esperada) -> Criar componente -> Rodar TDD (sucesso) -> Finalizar subplano.

## Subplanos de Execução

### Subplano 1: Infraestrutura de Testes e Layout Global
- **Ação:** Garantir que o Vitest e Testing Library estejam configurados corretamente para renderização de componentes Astro/React.
- **TDD:** Criar testes para o `Layout.astro` (verificando a renderização da meta tag viewport, header e footer).
- **Mobile UI:** Implementar Menu Hamburger e navegação inferior amigável para polegares (touch targets mínimos de 44px).

### Subplano 2: Refatoração da Home (`index.astro`)
- **TDD:** Escrever testes validando a visibilidade e o tamanho dos botões CTA ("Garantir Ingresso", "Ver Programação") em viewport mobile.
- **Mobile UI:** Ajustar o *Hero Section*, tamanho de fontes tipográficas responsivas (`text-5xl` ajustado para mobile), empilhamento de botões (flex-col em mobile e flex-row a partir de `sm`).

### Subplano 3: Página de Programação (`programacao.astro`)
- **TDD:** Testar renderização condicional ou layout de listas vs. cards da programação dependendo do tamanho da tela.
- **Mobile UI:** Criar componentes de Timeline ou Accordion adaptados para celular, evitando overflow horizontal indesejado.

### Subplano 4: Página de Artistas (`artistas.astro`)
- **TDD:** Testar a exibição da grade de artistas para garantir que haja 1 a 2 colunas no celular.
- **Mobile UI:** Ajustar o grid de CSS/Tailwind (ex: `grid-cols-1` ou `grid-cols-2` para celular), melhorar os cards com glassmorphism e micro-animações otimizadas para touch.

### Subplano 5: Página Sobre (`sobre.astro`)
- **TDD:** Validar legibilidade do texto e estruturação semântica.
- **Mobile UI:** Ajustar margens, line-height, e tamanho das imagens no fluxo do documento, melhorando a escaneabilidade do texto.

## Critérios de Aceite
- Todos os testes Vitest passam com sucesso.
- O site não apresenta barras de rolagem horizontais em telas < 400px.
- Botões e links possuem áreas de toque acessíveis.
- Carregamento visual responsivo impecável.
