const express = require ('express');
const routes = require ('./routes');
const cors = require ('cors');
const { errors } = require ('celebrate');

const server = express();

server.use(cors());
server.use(express.json());

server.use(routes);

server.use(error());

/* Porta para ser "ouvida" pelo express */
server.listen(3333);