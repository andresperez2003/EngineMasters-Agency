require('dotenv').config()
const userModel = require('../models/usuario');
const bcrypt = require('bcrypt')
const { generateToken, refreshToken } = require('../utils/jwt');
const nodemailer = require('nodemailer');
const { config } = require('dotenv');
const contraseña =  process.env.CONTRASENA
const correo = process.env.CORREO

//Crear la funcion para el registro - singIn

const signin = async (req, res) => {
    const { firstname, lastname, email, phone, password, rol } = req.body;

    try {
        if (!email) {
            res.status(400).jsono({ message: "El email es requerido" })
            throw new Error("El email es requerido");
        }
        if (!password) {
            res.status(400).jsono({ message: "la contraseña es requerida" })
            throw new Error("la contraseña es requerida");
        }
        const emailLowerCase = email.toLowerCase();
        const salt = await bcrypt.genSalt(10);
        const current_password_hash = await bcrypt.hash(password, salt);
        const allUsers = await userModel.find();
        /* 
        Formas de guardar un uaurio
        -> userModel.create
        -> new usermodel
        */
        const newUser = await userModel.create({
            firstname,
            lastname,
            email: emailLowerCase,
            phone,
            password: current_password_hash,
            rol: (allUsers.length == 0) ? "Administrador" : "Secretaria"
        })

        sendEmail(newUser._id, newUser.email)

        const userStorage = await newUser.save();
        res.status(201).json({message: "OK", userStorage});
        //Siempre que se crea un objeto, la respuesta debe ser un 201
    } catch (err) {
        console.log("error")
        res.status(400).json({ message: err.message })
    }
}

const sendEmail = async (id, email) => {
    const config = {
        service: "gmail",
        auth: {
            user: correo,
            pass: contraseña,
        },
    };

    const mensaje = {
        from: correo,
        to: email,
        subject: "Correo de pruebas",
        html:`
        <h1>¡Hola! </h1>
        <p>Para activar tu cuenta, por favor da click en el siguiente link</p>
        <a href='http://localhost:3000/login'>Activar cuenta</a>`
    }
    const transport = nodemailer.createTransport(config)

    transport.sendMail(mensaje, (error, info) => {
        if (error) {
            console.log('Error al enviar el correo:', error);
        } else {
            console.log('Correo enviado:', info.response);
        }
    });




}

const login = async (req, res) => {
    const { email, current_password } = req.body

    try {
        console.log(email, "email")
        if (!email || !current_password) {
            throw new Error("El email y la contraseña son obligatorias")
        }
        const emailLowerCase = email.toLowerCase();
        const userFind = await userModel.find({ email: emailLowerCase })
        const userStore = await userModel.findOne({ email: emailLowerCase }).exec();

        if (!userStore) {
            throw new Error("El usuario no existe")

        }

        if (!userStore.active) {
            throw new Error("El usuario no esta verificado")

        }

        const check = await bcrypt.compare(
            current_password,
            userStore.password
        )

        if (!check) {
            throw new Error("La contraseña no es correcta")
        }

        const token = await generateToken(userStore);
        const refresh = await refreshToken(userStore);


        res.status(200).json({
            message: "OK",
            access: token,
            refresh: refresh
        })
        /* res.status(200).json({token}) */
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
}

const getMe = async (req, res) => {
    try {
        const { _id } = req.user._doc;
        const userFind = await userModel.findById(_id).populate("rol");
        console.log(userFind);

        res.status(200).json(userFind);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

const activatedAccount = async (req, res) => {
    try {
        const { id } = req.params;
        console.log(id)
        const userActived = await userModel.findByIdAndUpdate(id, { active: true })
        console.log(userActived)
        res.redirect('http://localhost:3000/login')
    } catch (error) {

    }
}

module.exports = {
    signin,
    login,
    getMe,
    activatedAccount
};