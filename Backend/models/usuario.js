const mongoose = require("mongoose");

const UsuarioSchema = mongoose.Schema({
    email: {
        type: String,
        require: true,
        unique: true
    },
    telefono: {
        type: String,
        require: true,
        unique: true
    },
    contraseña: {
        type: String,
        require: true
    },
    rol: {
        type: String,
        require: true,
        default: "Secretaria"
    },
    active:{
        type: Boolean,
        default: true
    }
});
const Usuario = mongoose.model("Usuario", UsuarioSchema);

module.exports = Usuario;
