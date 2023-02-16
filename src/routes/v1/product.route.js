const express = require('express');
const productController = require('../../controllers/product.controller')
const auth = require('../../middlewares/auth')
const validate = require('../../middlewares/validate')
const router = express();
router.
    route('/')
    .get(
        auth,
        productController.getProducts
    )
    .post(
        auth,
        productController.addProduct
    )
router.
    route('/:productId')
    .get(
        auth,
        productController.getProduct
    )
router.
    route('/add-to-cart')
    .post(
        auth,
        productController.addProductToCart
    )
router.
    route('/update-product-quantity')
    .post(
        auth,
        productController.updateProductQuantity
    )
    module.exports = router;
