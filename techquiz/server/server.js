// Importar node packages
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const Router = require('express');
const fs = require('fs');
require('dotenv').config();

// Parse to JSON
//const data = JSON.parse(datajson);

//--ROUTES--//
const router = Router();

// GET all data method route
router.get("/data", (req, res) => {
  res.send(data);
});

// GET nome method route
router.get("/nome", (req, res) => {
  res.send(data.nome);
});

// POST new data method route
router.post("/new_data", (req, res) => {
  const new_dataJSON = req.body;
  //   console.log(req.body);
  // const new_dataJSON = {
  //   name: "João Palma",
  //   data: "dados",
  // };

  const new_data = JSON.stringify(new_dataJSON);
  fs.writeFileSync("new_data.json", new_data, "utf-8");
  res.send("added new data successfully!");
});

//--REST SERVER--//
const app = express();

// Live Server CORS options
// aqui é o link do site a correr com o live server
const corsOptions = {
  origin: "http://127.0.0.1:3000",
};

app.get('/', (req, res) =>{
    res.send('Welcome')
});

app.get('/api', (req, res) =>{
  res.send('Welcome to the API')
});

app.use(cors(corsOptions));
// output dados de pedido HTTP
app.use(morgan("short"));
// parse dados dos pedidos no content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.use((req, res) =>{
  res.send(404).send('Page Not Found');
});


/*app.get('/', (req, res) => {
  console.log('server running');
});*/

// correr server no url host:port definido em .env
app.listen(process.env.SERVER_PORT, process.env.SERVER_HOST, () => {
  console.log(
    "Server up and running at http://%s:%s",
    process.env.SERVER_HOST,
    process.env.SERVER_PORT,
  );
});
