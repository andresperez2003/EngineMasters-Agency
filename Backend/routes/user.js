const UserController = require('../controllers/user')

const express = require("express")
const router = express.Router()


router.get('/allUsers', UserController.getAllUsers);
router.post('/create', UserController.createUser);
router.patch('/changeActive/:id', UserController.changeActive)


module.exports = router;