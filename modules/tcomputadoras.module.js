import mongoose from "mongoose";

const tComputadorasSchema = new mongoose.Schema({
    marca:{
        type: String,
        required: true
    },

    tRam:{
        type: String,
        required: true
    },

    ramC: {
        type: Number,
        required: true
    },

    tMemoria: {
        type: String,
        required: true
    },

    cMemoria: {
        type: Number,
        required: true
    },

    procesador: {
        type: String,
        required: true
    },

    tarjetaDrafica: {
        type: String,
        required: false
    },

    precio: {
        type: Number,
        required: true
    }
})

const Tcomputador = mongoose.model('tComputador', tComputadorasSchema)

export default Tcomputador