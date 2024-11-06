import mongoose from "mongoose";
import Tcomputador from "../modules/tcomputadoras.module.js";


export const getAllTcomputadoras = async (req, res) =>{
    console.log('Mostrando toda la lista de productos'.grey)
    try {
        const tcomputadoras = await Tcomputador.find({},{_v:0})
        if(tcomputadoras.length === 0){
            return res.status(404).json({
                msg:'No hay elementos dentro de la lista'
            })
        }

        return res.status(200).json({
            tcomputadoras
        })
    } catch (error) {
        return res.status(500).json({
            error: error
        })
    }
}

export const getIdTcomputador = async (req, res) => {
    console.log('Trayendo los elementos por id'.grey)
    const id = req.params.id;
    try {
        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(400).json({
                error: 'Id no falido'
            })
        }

        const computador = await Tcomputador.findById(id);
        if(!computador){
            return res.status(404).json({
                error: 'No se ha encontrado elementos con ese id'
            })
        }

        return res.status(200).json({
            computador
        })
    } catch (error) {
        return res.status(500).json({
            error: error
        })
    }
}

export const postTcomputadores = async(req, res) => {
    console.log('Agregando elementos a la base de datos'.grey)

    const body = req.body
    const newComputador = new Tcomputador(body)
    try {
        const validarError = newComputador.validateSync();
        if(validarError){
            const errorMesage = Object.values(validarError.errors).map(error => error.message)
            return res.status(404).json({
                errorMesage
            })
        }

        await newComputador.save();
        return res.status(200).json({
            msg: 'Se ha agregado nuevo elemento',
            newComputador
        })
    } catch (error) {
        return res.status(500).json({
            error: error
        })
    }
}

export const putTcomputador = async(req, res) => {
    console.log('Actualizando elemento'.blue)
    const body = req.body
    const id = req.params.id
    try {
        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(400).json({
                error: 'Id no falido'
            })
        }
        const computador = await Tcomputador.findByIdAndUpdate(id, body, {new:true, runValidators:true})
        if(!computador){
            return res.status(404).json({
                error: 'No se ha encontrado elementos con ese id'
            })
        }
        return res.status(200).json({
            msg: 'Elemento actualizado',
            computador
        })
    } catch (error) {
        return res.status(500).json({
            error: error
        })
    }
}

export const deleteTComputador = async(req, res) =>{
    console.log('Eliminando elemento')
    const id = req.params.id

    try {
        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(400).json({
                error: 'Id no falido'
            })
        }

        const deleteElement = await Tcomputador.findByIdAndDelete(id)

        if(!deleteElement){
            return res.status(404).json({
                error: 'No se ha encontrado elementos con ese id'
            })
        }

        return res.status(200).json({
            msg: 'Elemento eliminado',
            deleteElement
        })
    } catch (error) {
        return res.status(500).json({
            error: error
        })
    }
}