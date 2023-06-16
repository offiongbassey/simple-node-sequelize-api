const express = require('express');
const router = express.Router();
const { postAddProduct, getProducts, getProduct, getEditProduct, patchEditProduct, deleteProduct } = require("../controllers.js/admin");

router.post('/create-product', postAddProduct);
router.get('/product/:productId', getProduct);
router.get('/products', getProducts);
router.get('/edit-product/:productId', getEditProduct);
router.patch('/edit-product/:productId', patchEditProduct);
router.delete('/product/:productId', deleteProduct);


module.exports = router;