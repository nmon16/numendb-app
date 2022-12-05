const express = require('express');
const { getPokemon } = require('../controller/controller');
const router = express.Router();

/* GET home page. */
router.get('/', getPokemon );

module.exports = router;
