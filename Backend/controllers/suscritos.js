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
    const {name,email,phone} = req.body;
    try {
        if(!name){
            res.status(400).jsono({message:"El nombre es requerido"})
            throw new Error("El nombre es requerido");
        }
        if(!email){
            res.status(400).jsono({message:"El email es requerido"})
            throw new Error("El email es requerido");
        }
        if(!phone){
            res.status(400).jsono({message:"El numero de telefono es requerido"})
            throw new Error("El numero de telefono es requerido");
        }
        const emailLowerCase = email.toLowerCase();
        const newSusc = await suscritoModel.create({
            name,
            email:emailLowerCase,
            phone
        })
        const suscStorage = await newSusc.save();
        console.log(newSusc)
        res.status(201).json(newSusc)
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