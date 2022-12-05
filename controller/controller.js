const res = require('express/lib/response')
const { Printer } = require("../models/printers");
const { validationResult } = require("express-validator")
const axios = require('axios')

const controllers = {

    myIndex(req, res) {
        res.render('index', { title: 'Printer DB' });
    },
    newPrinter: async (req, res) => {
        try {
            const error = validationResult(req)
            if (error.isEmpty()) {
                const printer = new Printer(req.body);
                await printer.save()
                res.status(201).json({ printer, msg: "Impresora añadida correctamente:" })
            } else {
                res.status(501).json(error)
            }
        }
        catch (err) {
            res.status(501).json({ msg: "No se puede crear la impresora en la base de datos" }, err)
        }
    },
    viewPrinter: async (req, res) => {
        const printers = await Printer.find()
        res.json({ printers })
    },
    viewOnePrinter: async (req, res) => {
        try {
            const printer = await Printer.findById(req.params.id);
            res.json({ printer })
        } catch (error) {
            res.status(400).json({ msg: "Error con el id", error })
        }
    },
    editPrinter: async (req, res) => {
        try {
            const error = validationResult(req)
            if (error.isEmpty()) {
                const { id } = req.params
                const update = await Printer.findByIdAndUpdate(id, req.body)
                res.status(202).json({ body: req.body, update })
            } else {
                res.status(501).json(error)
            }
        } catch (error) {
            res.status(501).json({ msg: "Error al actualizar datos" })
        }
    },
    deletePrinter: async (req, res) => {
        try {
            const printer = await Printer.findByIdAndDelete(req.params.id)
            res.json({ msg: "Impresora eliminada:", printer })
        } catch (error) {
            res.status(400).json(({ msg: "Hubo un problema al eliminar la impresora " }))
        }
    },
    viewBrand: async (req, res) => {
        const brand = req.params.brand;
        Printer.find({ brand: brand }, function (err, printerBD) {
            if (err) {
                return res.json({ msg: 'No hay impresoras de esa marca', err })
            } else {
                return res.json({ succes: true, printer: printerBD });
            }
        })
    },
    viewType: async (req, res) => {
        const type = req.params.type;
        Printer.find({ type: type }, function (err, printerBD) {
            if (err) {
                return res.json({ msg: 'No se encontro ese tipo de impresora', err })
            } else {
                return res.json({ succes: true, printer: printerBD });
            }
        })
    },
}
const getPokemon = async(req,res)=>{
    try {
        const respuesta = await axios.get("https://pokeapi.co/api/v2/pokemon/ditto" ,{timeout:10000})
        res.json({status: respuesta.status, data: respuesta.data})
    } catch (error) {
        res.json({status: error.response.status, data: error.response.status })
    }
}


module.exports = { controllers, getPokemon }