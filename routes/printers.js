const express = require('express');
const router = express.Router();
const controllers = require('../controller/controller');
const { validateId, validateBrand, validateTypes } = require('../middleware/validations');
const { check } = require("express-validator")
const {axiosReq} = require('../controller/controller')

/* GET users listing. */
router.post('/createPrinter',
    [
        check("brand").not().isEmpty().withMessage("el campo esta vacío"),
        check("type").not().isEmpty().withMessage("el campo esta vacío"),
        check("features").not().isEmpty().withMessage("el campo esta vacío"),
        check("model").not().isEmpty().withMessage("el campo esta vacío"),
        check("serial").not().isEmpty().withMessage("el campo esta vacío")
    ],
    controllers.newPrinter)
router.get('/viewPrinter', controllers.viewPrinter)
router.get('/viewPrinter/:id', validateId, controllers.viewOnePrinter)
router.get('/brand/:brand', validateBrand,controllers.viewBrand);
router.get('/type/:type', validateTypes, controllers.viewType);
router.put('/editPrinter/:id', validateId,
    [
        check("brand").not().isEmpty().withMessage("el campo esta vacío"),
        check("type").not().isEmpty().withMessage("el campo esta vacío"),
        check("features").not().isEmpty().withMessage("el campo esta vacío"),
        check("model").not().isEmpty().withMessage("el campo esta vacío"),
        check("serial").not().isEmpty().withMessage("el campo esta vacío")
    ],
    controllers.editPrinter)
router.delete('/deletePrinter/:id', controllers.deletePrinter)
router.get('/pokemon', axiosReq)

module.exports = router;
