const ProductController = require('../controllers/producto')

const express = require("express")
const router = express.Router()


router.get('/', ProductController.getAllProducts);
router.post('/new-product', ProductController.createProduct);
router.patch('/:id', ProductController.updateProductById);
router.delete('/:id', ProductController.deleteProductById);
router.get('/sendMessage', ProductController.changeDiscount)

module.exports = router;