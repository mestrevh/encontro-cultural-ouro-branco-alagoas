## Execução do projeto

``` bash
cd frontend
sudo chown -R $USER:$USER node_modules
rm -rf node_modules
rm -rf package-lock.json
npm install
npm run dev
```

## Execução dos testes

``` bash
cd frontend
npx vitest run
npx vitest
```