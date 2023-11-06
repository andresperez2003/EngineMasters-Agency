const mongoose = require("mongoose");

const ProductoSchema = mongoose.Schema({
    nombre: {
        type: String,
        require: true,
        unique: true
    },
    descripcion: {
        type: String,
        require: true
    },
    precio:{
        type:Number,
        require:true
    },
    descuento:{
        type:Number,
        require:true
    },
    imagen: {
        type: String
    },
    created_At:{
        type: Date,
        default: Date.now
    }
});
const Producto = mongoose.model("Producto", ProductoSchema);

module.exports = Producto;