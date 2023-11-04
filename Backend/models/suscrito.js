const mongoose = require("mongoose");

const SuscritoSchema = mongoose.Schema({
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
    active:{
        type: Boolean,
        default: true
    }
});
const Suscrito = mongoose.model("Suscrito", SuscritoSchema);

module.exports = Suscrito;
