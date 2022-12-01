const { Printer } = require("../models/printers")

const validateId = async (req, res, next) => {
    const printer = await Printer.findById(req.params.id)
    if (printer !== null) {
        next();
    } else {
        res.status(400).json({ msg: "El ID es inválido" })
    }
}


module.exports = {validateId}