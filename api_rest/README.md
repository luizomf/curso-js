# Iniciando a API
Antes de mais nada, execute:

```
npm i
```
Para instalar os módulos.

crie um arquivo .env na raiz do projeto com o seguinte:

```
DATABASE=??  
DATABASE_HOST=??  
DATABASE_PORT=??  
DATABASE_USERNAME=??  
DATABASE_PASSWORD=??  

TOKEN_SECRET=??  
TOKEN_EXPIRATION=??  

APP_PORT=??  
APP_URL=??
```
Substitua ?? pelos valores corretos para sua aplicação.

Ao rodar a aplicação com o PM2, utilizar o comando:

```
pm2 start /caminho/dist/server.js --name="api" --node-args="--require 'dotenv/config'"
```

Caso tenha dúvidas, verifique os outros passos na aula referente a esta API.