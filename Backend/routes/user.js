const UserController = require('../controllers/user')

const express = require("express")
const router = express.Router()


router.get('/allUsers', UserController.getAllUsers);
router.post('/create', UserController.createUser);
router.patch('/changeActive/:id', UserController.changeActive)
router.get('/UserbyId/:id', UserController.getUserById)
router.patch('/editUser/:id', UserController.updateUserById)
router.delete('/:id', UserController.deleteUserById);



module.exports = router;