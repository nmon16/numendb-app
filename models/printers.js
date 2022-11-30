const mongoose = require('mongoose')

const Schema = mongoose.Schema
const storeSchema = new Schema({
    brand: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    features: {
        type: String,
        required: true
    },
    model: {
        type: Number,
        require: true,
    },
    serial: {
        type: String,
        required: true,
        unique: true
    },
})

const Printer = mongoose.model('Printer', storeSchema)
module.exports = {Printer};