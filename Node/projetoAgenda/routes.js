const express = require('express');
const route = express.Router();

const homeControler = require('./src/controllers/homeControler');
const loginControler = require('./src/controllers/loginControler');


//rotas home
route.get('/', homeControler.index); 

//rotas de login
// route.get('/login/back' , loginControler.index) ;
route.get('/login/index', loginControler.index);
route.post('/login/register', loginControler.register);
route.post('/login/login', loginControler.login);




module.exports = route;