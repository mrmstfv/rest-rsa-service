/*!
 * rest-rsa-service
 * RESTful RSA Service
 * Copyright(c) 2020 Mohammadreza Mostafavi
 */


/**
* Module dependencies.
*/
const express = require('express');
const bodyParser = require('body-parser');
const root = require('./routes/root');

/**
* Initiate express.
*/
const service = express();

/**
* Initiate middlewares.
*/
service.use((req, res, next) => {
    next();
});

service.use(bodyParser.urlencoded({ extended: true }));
service.use(bodyParser.json());

/**
* Set HTTP Headers.
*/
service.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Authorization, X-Custom-Header, Origin, X-Requested-With, Content-Type, Accept, Cache-Control");
    res.header("Access-Control-Expose-Headers", "Authorization, Content-Type, Allow, X-Response-Time, Cache-Control");
    if (req.method === 'OPTIONS') {
        res.header("Access-Control-Allow-Methods", "GET, PUT, POST, PATCH, DELETE");
        return res.status(200).json({});
    }
    next();
});

/**
* Initiate routes.
*/

service.use('/', root);


/**
* Handling invalid routes
*/
service.use((req, res, next) => {
    const error = new Error("Not Found!");
    error.code = 404;
    next(error);
});

/**
* Handling errors
*/
service.use((error, req, res, next) => {
    res.status(error.code || 500).json({ "message": error.message });
});

module.exports = service;