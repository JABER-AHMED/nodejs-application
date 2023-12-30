const path = require("path");
const express = require("express");

const router = express.Router();
const { getProducts, getIndex, getCart, getCheckout, getOrders, getProduct, postCart } = require("../controllers/shop");

router.get("/", getIndex);
router.get("/products", getProducts);
router.get('/products/:productID', getProduct);
router.get("/cart", getCart);
router.post('/cart', postCart);
router.get("/orders", getOrders);
router.get("/checkout", getCheckout);

module.exports = router;
