const router = require('express').Router()
const productController = require('../controller/product.controller')

router.get('/show-product-form', productController.showProductForm)
router.post('/add-product', productController.addProduct)
router.get('/show-product-table', productController.showProductTable)

module.exports = router
