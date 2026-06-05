cd frontend
sudo chown -R $USER:$USER node_modules
rm -rf node_modules
rm -rf package-lock.json
npm install
npm run dev