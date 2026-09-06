# Git Flow & Versioning Rules

1. **Credenciais Obrigatórias do Projeto:**
   - Todos os commits e pushes devem ser realizados com as credenciais configuradas localmente:
     - `user.name`: `mestrevh`
     - `user.email`: `victor-torugo@hotmail.com`
   - Comando de verificação/garantia:
     ```bash
     git config --local user.name "mestrevh"
     git config --local user.email "victor-torugo@hotmail.com"
     ```

2. **Branch Protection:**
   - NUNCA commitar diretamente na branch `main` ou `develop`.

3. **Workflow Branch Deploy para Planos:**
   - Todo plano de trabalho DEVE ser executado em uma nova branch criada a partir de `develop` (`git checkout -b feature/<nome-do-plano>`).
   - Todo o código, testes e refatorações são isolados nessa branch.

4. **Nomenclatura de Branches:**
   - Funcionalidades/Planos: `feature/nome-da-funcionalidade`
   - Correções: `bugfix/nome-do-bug` ou `hotfix/nome-do-bug`
   - Tarefas técnicas: `chore/nome-da-tarefa`
   - Refatorações: `refactor/nome-da-refatoracao`

5. **Conventional Commits:**
   - Commits atômicos e semânticos:
     - `feat:` (nova funcionalidade)
     - `fix:` (correção de bug)
     - `docs:` (alteração em documentação)
     - `style:` (formatação, CSS, etc.)
     - `refactor:` (refatoração de código)
     - `test:` (adição/modificação de testes)
     - `chore:` (atualização de tarefas de build, pacotes, etc.)

6. **Finalização com Pull Request:**
   - Ao concluir o plano e validar todos os testes com sucesso:
     1. Realizar push da branch para o origin (`git push -u origin <branch>`).
     2. Abrir um Pull Request apontando para `develop` (`gh pr create --base develop ...`).

7. **Segurança e Repositório Único:**
   - Nunca utilizar `git push --force` ou `git push -f` em branches compartilhadas.
   - Não inicialize novos repositórios com `git init` em subpastas; utilize sempre a raiz do projeto.
