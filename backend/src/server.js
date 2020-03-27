const express = require ('express');
const routes = require ('./routes');
const cors = require ('cors');

const server = express();

server.use(cors());
server.use(express.json());

server.use(routes);

/* Porta para ser "ouvida" pelo express */
server.listen(3333);