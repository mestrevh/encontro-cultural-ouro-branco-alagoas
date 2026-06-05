#!/bin/bash
set -e

echo "🚀 Iniciando deploy do Encontro Cultural Ouro Branco..."

echo "📦 Entrando na pasta do frontend..."
cd frontend

echo "🧪 Rodando testes (Vitest)..."
npx vitest run

echo "🏗️  Gerando pacote estático (Astro Build)..."
npm run build

echo "✅ Build finalizado com sucesso! Os arquivos otimizados estão em frontend/dist/"
echo "🌐 Para visualizar localmente, rode: npm run preview"
