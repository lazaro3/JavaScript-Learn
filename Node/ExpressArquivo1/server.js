require ('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');

// const connectionString = 'mongodb+srv://lazaroCuinica:lazaroluis@cluster0.e64q3n8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
mongoose.connect(process.env.CONNECTIONSTRING, {useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
    console.log('Conectei abase de dados');
    app.emit('pronto');
}).catch(e => console.log(e));


const routes = require('./routes')
const path = require('path');
const { connect } = require('http2');


app.use(express.urlencoded({extended: true}));
app.use(express.static(path.resolve(__dirname, 'public')))
app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

app.use(routes);


app.on('pronto', () =>{
    app.listen(3000, () => {
    console.log('Acessar http://localhost:3000')
    console.log('Servidor executando na porta 3000')
});
})

