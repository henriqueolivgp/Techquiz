// Importar node packages
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const fs = require('fs');
require('dotenv').config();

//--REST SERVER--//
const app = express();

// output dados de pedido HTTP
app.use(morgan("short"));

// Live Server CORS options
// aqui é o link do site a correr com o live server
const corsOptions = {
  origin: "http://localhost:3000",
};

app.use(cors(corsOptions));

// parse dados dos pedidos no content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
// envia uma mensagem de erro caso a o pedido nao funcione


//ROUTES VÃO SER COLOCADOS AQUI!
const router = require('./routes/index.js');
app.use('/api', router);

//Fazer ligação à Base de Dados
const database = require('./data/context/database');

try {
	database.sync({ force: false, alter: true });
} catch (error) {
	console.info(error);
}

//ROUTES VÃO SER COLOCADOS AQUI!
const PORT = process.env.SERVER_PORT || 1400;
const HOST = process.env.SERVER_HOST || "localhost";

// correr server no url host:port definido em .env
// Mostra uma mensagem no terminal a dizer que o server esta a correr
// em conjunto com um link para abrir o server com os dados do .env
// correr server no url host:port definido em .env
app.listen(PORT, HOST, () => {
  console.log("Server up and running at http://%s:%s/api", HOST, PORT);
});
