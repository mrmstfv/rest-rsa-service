const express = require('express');
const root = require('../controllers/root.js');
const router = express.Router();

router.get('/status', root.status);
router.post('/openssh/generate', root.keyGen);
module.exports = router;