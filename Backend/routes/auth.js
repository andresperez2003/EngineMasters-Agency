const authController = require("../controllers/auth");

const ensureAuth= require("../middlewares/authenticatedValidation")

const express = require("express");
const router = express.Router();

//Sigin, Login  -> se usa el metodo Post

router.post('/signin', authController.signin);
router.post('/login', authController.login);
router.get('/get-me', ensureAuth, authController.getMe);
router.get('/activatedAccount/:id', authController.activatedAccount)


module.exports = router;