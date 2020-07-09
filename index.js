'use strict';
const express = require('express');
//const axios = require('axios');
const morgan = require('morgan');
const cors = require('cors');
const env = require('dotenv').config();

//Settings
const port = process.env.PORT || process.env.NODE_PORT || 8080;
const app = express();
app.set('trust proxy', true);

//Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());

// Routes files
const apiRoutes = require('./components/api/apiRoutes');

//routes urls
app.use('/v1', apiRoutes);

/* test conection */
app.get('/', function (req, res) { res.send('Hello Flow Challenge')});

//server
try{
    app.listen(port, function () {
        console.log(`application up and running on port: ${port}`);
    });
}catch (e) {
    console.log(e.message)
}