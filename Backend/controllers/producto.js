const ProductModel = require('../models/producto')

const getAllProducts = async(req,res)=>{
    try {
        const allProducts = await ProductModel.find();
        res.status(200).json(allProducts)
    } catch (error) {
    res.status(400).json({message:error})
    }
}

const createProduct = async(req,res) => {
    try {
        const productData = req.body
        const newProduct = new ProductModel({...productData})
        await newProduct.save();
        console.log(newProduct)
        res.status(201).json(newProduct)
    } catch (error) {
        res.status(400).json({message:error.message})
    }
}

const updateProductById = async (req, res) =>{
    try{
        const { id } = req.params;
        const productDataEdit = req.body;
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


module.exports={
    getAllProducts,
    createProduct,
    updateProductById,
    deleteProductById
}