const ProductModel = require('../models/producto')
const SuscribeModel = require('../models/suscrito')
const multer = require('multer');
const multerConfig = require('../utils/multerConfig')

const upload = multer(multerConfig).single('imagen')




const fileUpload =async(req,res,next)=>{
    upload(req,res, function(error){
        if(error){
            return next(new Error('Se produjo un error durante la carga de archivos'));
        }
        next();
    })
}


const getAllProducts = async(req,res,next)=>{
    try {
        const allProducts = await ProductModel.find();
        res.status(200).json(allProducts)
    } catch (error) {
    res.status(400).json({message:error})
    }
}

const createProduct = async(req,res) => {
    try {
        console.log("Entra")
        const productData = req.body
        const newProduct = new ProductModel({...productData})
        if(req.file && req.file.filename){
            newProduct.imagen = req.file.filename
        }
        await newProduct.save();
        res.status(201).json(newProduct)
    } catch (error) {
        res.status(400).json({message:error.message})
    }
}

const updateProductById = async (req, res) =>{
    try{
        const { id } = req.params;
        const productDataEdit = req.body;
        const producto = await ProductModel.findById(id)
        if((productDataEdit.descuento!=producto.descuento && productDataEdit.descuento>producto.descuento && productDataEdit.descuento!=0)){
            console.log("entra")
            changeDiscount(producto)
        }
        if(req.file && req.file.filename){
            newProduct.image = req.file.filename
        }else{
            productDataEdit.image = producto.image
        }
        const response= await ProductModel.findByIdAndUpdate(id, productDataEdit)
        res.status(200).json({message: "Actualización exitosa"});
    }catch(err){
        res.status(400).json({message : err.message});
    }
}

const deleteProductById = async (req, res) =>{
    try{
        const { id } = req.params;
        const response= await ProductModel.findByIdAndDelete(id);
        res.status(200).json({message: "Producto eliminado exitosamente"});
    }catch(err){
        res.status(400).json({message : err.message});
    }
}
const changeDiscount = async(res,req)=>{
   
        console.log(res)
        const allUsers = await SuscribeModel.find();
        const accountSid = 'ACfa71e5f8290afd813cf7812ac20ea8fc';
        const authToken = '981bb78866e729e97b3aeb7d88e2cd5c';
        const client = require('twilio')(accountSid, authToken);
        allUsers.forEach(user => {
            console.log(user)
            client.messages
            .create({
                body: `Hola ${user.name} , el producto ${res.nombre} tiene un descuento del ${res.descuento*100}%, nuevo precio: $${res.precio-(res.precio*res.descuento)}`,
                from: 'whatsapp:+14155238886',
                to: `whatsapp:+57${user.phone}`
            })
            .then(message => console.log(message.sid))
        });

}


module.exports={
    getAllProducts,
    createProduct,
    updateProductById,
    deleteProductById,
    changeDiscount,
    fileUpload
}