# Git Flow & Versioning Rules

1. **Branch Protection:** Nunca commitar diretamente na branch `main` ou `develop`.
2. **Nomenclatura de Branches:**
   - Funcionalidades: `feature/nome-da-funcionalidade`
   - Correções: `bugfix/nome-do-bug` ou `hotfix/nome-do-bug`
   - Tarefas técnicas: `chore/nome-da-tarefa`
3. **Conventional Commits:** Todos os commits devem seguir o padrão:
   - `feat:` (nova funcionalidade)
   - `fix:` (correção de bug)
   - `docs:` (alteração em documentação)
   - `style:` (formatação, ponto e vírgula, etc)
   - `refactor:` (refatoração de código)
   - `test:` (adição/modificação de testes)
   - `chore:` (atualização de tarefas de build, pacotes, etc)
4. **Segurança:** Nunca utilizar `git push --force` ou `git push -f` em branches compartilhadas. Utilizar `push --force-with-lease` se estritamente necessário em feature branches privadas.
