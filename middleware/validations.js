const { Printer } = require("../models/printers")
const validateId = async (req, res, next) => {
    const printer = await Printer.findById(req.params.id)
    if (printer !== null) {
        next();
    } else {
        res.status(400).json({ msg: "El ID es inválido" })
    }
}
const validateTypes = async (req, res, next)=>{
    const type = await Printer.find(req.params.type)
    if(type !== null){
        next();
    } else {
        res.status(400).json({msg:'El tipo de impresora es inválido'})
    }
}
const validateBrand = async (req, res, next)=>{
    const brand = await Printer.find(req.params.brand)
    if(brand !== null){
        next();
    } else {
        res.status(400).json({msg:'La marca de impresora es inválido'})
    }
}

module.exports = {validateId, validateTypes, validateBrand}