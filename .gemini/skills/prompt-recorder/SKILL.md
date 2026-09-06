---
name: prompt-recorder
description: >-
  Arquiva todo prompt recebido do usuário em arquivos numerados sequencialmente no diretório .gemini/prompts/<N>.md,
  mantendo o histórico completo e auditável de instruções no repositório.
---

# Skill: Prompt Recorder

Esta skill é responsável por garantir que todo e qualquer prompt recebido do usuário seja preservado no repositório do projeto.

## Diretório de Destino
- Diretório: `.gemini/prompts/`
- Padrão de Nomenclatura: `<N>.md` (exemplo: `1.md`, `2.md`, ..., `12.md`, `13.md`...)

## Procedimento de Execução

1. **Determinar o Próximo Índice Numérico:**
   - Liste os arquivos existentes em `.gemini/prompts/` com extensão `.md` que sejam números.
   - Encontre o maior número `N` existente.
   - O próximo arquivo será `<N+1>.md`.

2. **Gravar o Conteúdo do Prompt:**
   - Crie o arquivo `.gemini/prompts/<N+1>.md` com exatamente o texto literal enviado pelo usuário no prompt atual.
   - Preserve formatações, quebras de linha e menções originais.

3. **Validação:**
   - Verifique se o arquivo foi criado com sucesso e confira se seu tamanho/conteúdo corresponde à mensagem recebida.
