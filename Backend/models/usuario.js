const mongoose = require("mongoose");

const UsuarioSchema = mongoose.Schema({
    firstname:{
        type: String,
        require: true
    },
    lastname:{
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    phone: {
        type: String,
        require: true,
        unique: true
    },
    password: {
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
