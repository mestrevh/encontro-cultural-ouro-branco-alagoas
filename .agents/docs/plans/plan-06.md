# Plano de Execução - Plan 06 (Release e Deploy)

## 1. Fluxo Git (Merge e Tag)
```bash
git checkout develop
git merge feature/ux-refinements -m "chore: merge feature/ux-refinements to develop"
git checkout main
git merge develop -m "chore: release v1.0.0"
git tag v1.0.0
```

## 2. Validação
Executaremos a suíte de testes finais e a geração do pacote estático otimizado:
```bash
cd frontend
npx vitest run
npm run build
```

## 3. Script de Automação
Vamos criar um `deploy.sh` na raiz do `/workspace` para o usuário rodar no futuro, contendo:
- Checagem de testes
- Build de produção
- Push para o repositório remoto
