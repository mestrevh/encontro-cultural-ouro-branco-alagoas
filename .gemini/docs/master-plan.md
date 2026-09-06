# Planejamento do Ciclo de Prompts (6 Passos)
1. **Prompt 1 (Plan 01):** Inicializar projeto em `frontend/` Astro (create-astro), configurar Vitest, TailwindCSS, tipografia e limpar repositório base. Iniciar develop.
2. **Prompt 2 (Plan 02):** Implementar e testar o Design System (Cores, Fontes, Botões Globais) via TDD.
3. **Prompt 3 (Plan 03):** TDD da arquitetura base (Header, Navigation Mobile, Footer, Layout Wrapper).
4. **Prompt 4 (Plan 04):** TDD das páginas de conteúdo. Consumo de dados locais ou API, focando na performance de renderização estática.
5. **Prompt 5 (Plan 05 - Refinamento):** Invocar o subagente revisor de UX. Adicionar animações, micro-interações, corrigir contraste e adequar para um visual premium (Wow effect).
6. **Prompt 6 (Plan 06 - Deploy):** Fechar branch de release, merge em main, tagear a versão e gerar build final/scripts de deploy.

# Gargalos e Pontos Críticos a Evitar
- **Context Window no TDD:** O ciclo contínuo de testes pode inundar o histórico. **Solução:** Executar comandos de teste silenciosamente e pedir o log focado apenas nas falhas atuais usando grep ou subagentes temporários.
- **Acoplamento em TDD de UI:** Testar classes exatas do Tailwind quebra facilmente. **Solução:** Focar os testes em comportamentos, acessibilidade (ARIA roles) e presença de slots.
- **Fluxo Git Autônomo:** Conflitos de merge travam o agente. **Solução:** Limitar o escopo de cada branch rigidamente para evitar edições simultâneas nos mesmos arquivos base.
