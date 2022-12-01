const express = require('express');
const router= express.Router();
const {axiosReq} = require('../controllers/controller');

router.get('/', axiosReq);

module.exports = router;