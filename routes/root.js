/*!
 * rest-rsa-service
 * RESTful RSA Service - Root routes
 * Copyright(c) 2020 Mohammadreza Mostafavi
 */

/**
* Module dependencies.
*/
const express = require('express');
const root = require('../controllers/root.js');
const router = express.Router();

/**
 * Define routes.
 */
router.get('/status', root.status);
router.post('/openssh/generate', root.keyGen);
module.exports = router;