const suscritoModel = require('../models/suscrito');

const getAllSuscritos = async(req,res)=>{
    try {
        const allSuscritos = await suscritoModel.find();
        res.status(200).json(allSuscritos)
    } catch (error) {
    res.status(400).json({message:error})
    }
};

const createSuscritor = async(req,res) => {
    try {
        const suscritoData = req.body
        const newSuscrito = new suscritoModel({...suscritoData})
        await newSuscrito.save();
        console.log(newSuscrito)
        res.status(201).json(newSuscrito)
    } catch (error) {
        res.status(400).json({message:error.message})
    }
};

const updateSuscritoById = async (req, res) => {
    try {
        const { id } = req.params;
        const suscritorDataEdit = req.body;
        console.log(suscritorDataEdit);
        await suscritoModel.findByIdAndUpdate(id, suscritorDataEdit);
        res.status(200).json({ message: "Cambio exitoso" });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

const deleteSuscritoById = async (req, res) => {
    try {
        const { id } = req.params;
        await suscritoModel.findByIdAndDelete(id);
        res.status(200).json({ message: "Suscritor eliminado exitosamente" })
    } catch (err) {
        res.status(400).json({ message: err })
    }
};

module.exports = {
    createSuscritor,
    getAllSuscritos,
    updateSuscritoById,
    deleteSuscritoById
};