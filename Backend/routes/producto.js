const ProductController = require('../controllers/producto')

const express = require("express")
const router = express.Router()


router.get('/', ProductController.getAllProducts);
router.post('/new-product', ProductController.createProduct);
router.put('/:id', ProductController.updateProductById);
router.delete('/:id', ProductController.deleteProductById);

module.exports = router;