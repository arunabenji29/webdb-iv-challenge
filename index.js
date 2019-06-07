const knex = require('knex')
const knexConfig = require('./knexfile.js')

const db = knex(knexConfig.development)

const express = require('express')
const helmet = require('helmet')

const server = express();

server.use(helmet());

server.use(express.json());

const port = 3500;

server.listen(port, ()=>
console.log(`api running at http://localhost:${port}`)
)