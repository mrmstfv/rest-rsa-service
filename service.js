/*!
 * rest-rsa-service
 * RESTful RSA Service
 * Copyright(c) 2020 Mohammadreza Mostafavi
 */

'use strict';

/**
* Module dependencies.
*/

const http = require('http');
const serviceApp = require('./app');


/**
 * Create server instance 
 */

const server = http.createServer(serviceApp);

let port = process.env.PORT || 8080;

server.listen(port, () => {
    console.log(`RSA Service listening to port : ${port}`);
});