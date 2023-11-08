const ProductModel = require('../models/producto')
const SuscribeModel = require('../models/suscrito')
const multer = require('multer');
const multerConfig = require('../utils/multerConfig')
const { config } = require('dotenv');
const nodemailer = require('nodemailer')

const upload = multer(multerConfig).single('imagen')

const request = require("request");



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
            sendEmail(producto)
        }
        if(req.file && req.file.filename){
            console.log("entra 1")
            productDataEdit.imagen = req.file.filename
        }else{
            console.log("entra 2")
            productDataEdit.imagen = producto.imagen
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
    console.log("Entra Descuento")
        console.log(res)
        const allUsers = await SuscribeModel.find();
        allUsers.forEach(user => {
            var options = {
                method: 'POST',
                url: 'https://api.ultramsg.com/instance67860/messages/chat',
                headers: { 'content-type': ' application/x-www-form-urlencoded' },
                form: {
                    "token": process.env.WHATSAPP_TOKEN,
                    "to": `+57${user.phone}`,
                    "body": `EngineMasters Agency \nLe informamos que nuestro producto ${res.nombre} tiene un descuento del ${res.descuento}%\nPara comprar ingrese a: www.engineMasters-agency.com
                    `
                }
            };
            request(options, function (error, response, body) {
                if (error) throw new Error(error);
                console.log(body);
            });
        });
        };

        const sendEmail = async(res,req)=>{
            contraseña =  process.env.CONTRASENA
            correo = process.env.CORREO
            console.log(correo)
            console.log(contraseña)
            const allUsers = await SuscribeModel.find();
            allUsers.forEach((user)=>{
                const config = {
                    service: "gmail",
                    auth: {
                      user: correo,
                      pass: contraseña,
                    },
                };
            
                const mensaje ={
                    from :correo,
                    to:user.email,
                    subject: "Correo de pruebas",
                    html:`EngineMasters Agency \nLe informamos que nuestro producto ${res.nombre} tiene un descuento del ${res.descuento}%\nPara comprar ingrese a: <a href='http://localhost:3000/'>www.engineMasters-agency.com<a>
                    `
                }
                  const transport = nodemailer.createTransport(config)
            
                  transport.sendMail(mensaje, (error, info) => {
                    if (error) {
                      console.log('Error al enviar el correo:', error);
                    } else {
                      console.log('Correo enviado:', info.response);    
                    }
                  });
            
             
            })
        
        
        
        }   




module.exports={
    getAllProducts,
    createProduct,
    updateProductById,
    deleteProductById,
    changeDiscount,
    fileUpload
}