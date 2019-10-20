const express         = require('express');
const router          = express.Router();
const starterController = require('../controllers/example.controller');

router.get('/url',starterController);

module.exports = router;
