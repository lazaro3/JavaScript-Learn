const express = require('express');
const route = express.Router();
const homeControlers = require('./src/controllers/homeControlers');
const contactoController = require('./src/controllers/contactoController')


route.get('/', homeControlers.paginaInicial); 
route.post('/', homeControlers.trataPost);

route.get('/contacto', contactoController.paginaInicial)

module.exports = route;