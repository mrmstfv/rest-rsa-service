/*!
 * rest-rsa-service
 * RESTful RSA Service - RSA Model
 * Copyright(c) 2020 Mohammadreza Mostafavi
 */

/**
* Module dependencies.
*/
const RSA = require('node-rsa');

/**
 * Initiate RSA object
 */
exports.keyGen = (options) => {
    const key = new RSA(options);
    return key;
}