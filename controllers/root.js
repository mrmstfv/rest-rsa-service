/*!
 * rest-rsa-service
 * RESTful RSA Service - Root Controller
 * Copyright(c) 2020 Mohammadreza Mostafavi
 */

/**
* Module dependencies.
*/
const RSA = require('../models/rsa');

/**
* Check API Status.
*/
exports.status = (req, res, next) => {
    res.status(200).json(
        {
            status: 'OK'
        });
}

/**
* OPENSSH RSA Key generation.
*/
exports.keyGen = (req, res, next) => {
    let keyLength = req.body.lenght;
    if ((keyLength !== undefined) &&
        ((keyLength === '256') ||
            (keyLength === '512') ||
            (keyLength === '1024') ||
            (keyLength === '2048') ||
            (keyLength === '4096'))) {
        const key = RSA.keyGen({ b: keyLength });
        let publicKey = key.exportKey('openssh-public'),
            privateKey = key.exportKey('openssh-private');
        console.log(key);
        res.status(200).json(
            {
                public: publicKey,
                private: privateKey
            });
    } else {
        res.status(404).json(
            {
                "message": "invalid key lenght!"
            }
        )
    }
}