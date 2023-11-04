const UserModel = require('../models/usuario')

const getAllUsers = async(req,res)=>{
    try {
        const allUsers = await UserModel.find();
        res.status(200).json(allUsers)
    } catch (error) {
    res.status(400).json({message:error})
    }
}


const createUser = async(req,res) => {
    try {
        const userData = req.body
        const allUsers = await UserModel.find();
        const newUser = new UserModel({...userData})
        newUser.rol = allUsers.length ==0 ? "Administrador": "Secretaria";
        await newUser.save();
        console.log(newUser)
        res.status(201).json(newUser)
    } catch (error) {
        res.status(400).json({message:error.message})
    }

}



module.exports={
    getAllUsers,
    createUser
}