const { Printer } = require("../models/printers")

const validateParams= async (req, res, next)=>{
    const param = await Printer.find(req.params)
    if(param !== null){
        next();
    } else {
        res.status(400).json({msg:'El parámetro de impresora es inválido'})
    }
}

module.exports = {validateParams}