const ProductController = require('../controllers/producto')

const express = require("express")
const router = express.Router()


router.get('/', ProductController.getAllProducts);
router.post('/new-product', ProductController.fileUpload,ProductController.createProduct);
router.patch('/:id', ProductController.fileUpload, ProductController.updateProductById);
router.delete('/:id', ProductController.deleteProductById);
router.get('/sendMessage', ProductController.changeDiscount)

module.exports = router;