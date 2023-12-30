const path = require("path");
const express = require("express");
const { getAddProduct, postAddProduct, getProducts, getEditProduct, updateProduct } = require("../controllers/admin" );

const router = express.Router();

router.get("/add-product", getAddProduct);
router.post("/add-product", postAddProduct);
router.get('/products', getProducts);
router.get('/edit-product/:productId', getEditProduct);
router.post('/edit-product', updateProduct);

module.exports = router;
