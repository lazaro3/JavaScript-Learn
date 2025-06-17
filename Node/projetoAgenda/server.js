require('dotenv').config();

const express = require('express');
const app = express();
const routes = require('./routes')
const path = require('path');
const mongoose = require('mongoose');
const { middlewareGloabal } = require('./src/middleware/midleware');
// const connectionString = 'mongodb+srv://lazaroCuinica:lazaroluis@cluster0.e64q3n8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

mongoose.connect(process.env.CONNECTIONSTRING, {useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
    // console.log('Conectei abase de dados');
    app.emit('pronto');
}).catch(e => console.log(e));

const session = require('express-session');
const MongoStore = require('connect-mongo')
const flash = require('connect-flash')
app.use(flash());

app.use(express.urlencoded({extended: true}));

app.use(express.static(path.resolve(__dirname, 'public')));

app.use(express.static(path.resolve(__dirname, 'public')));


const sessionOptions = session({
    secret: 'akssdfg2345673+dggsgfds qwer quqewer yurte34 sadadsada()',
    store: MongoStore.create({ mongoUrl: process.env.CONNECTIONSTRING }),
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7,
        httpOnly: true
    }
});
app.use(sessionOptions);
app.use(middlewareGloabal);


app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

app.use(routes);



app.listen(3000, () => {
    console.log('Acessar http://localhost:3000')
    console.log('Servidor executando na porta 3000')
});