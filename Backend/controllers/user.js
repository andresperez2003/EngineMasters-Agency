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


const changeActive = async(req,res)=>{
    try {
        const {id} = req.params

        //Buscar el usuario por el id
        const user = await UserModel.findById(id);

        //No se puede cambiar el estado del administrador
        if(user.rol == "Administrador"){
            res.status(400).json({message:"No se puede cambiar el estado al administrador"})
        }
        console.log("hola")
        //Una vez se valida que no es Administrador, se actualiza el estado poniendo el contrario del que tenia anteriormente
        const userEdit = await UserModel.findByIdAndUpdate(id, {active:(!user.active)});
        console.log(user)        
        res.status(200).json(userEdit)
    } catch (error) {
        
    }
}


module.exports={
    getAllUsers,
    createUser,
    changeActive
}