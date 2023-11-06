const SuscritosController = require('../controllers/suscritos')

const express = require("express")
const router = express.Router()


router.get('/', SuscritosController.getAllSuscritos);
router.post('/new-suscribe', SuscritosController.createSuscritor);
router.patch('/edit/:id', SuscritosController.updateSuscritoById)

module.exports = router;