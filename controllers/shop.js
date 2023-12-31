const Cart = require("../model/cart");
const Product = require("../model/product");

exports.getProducts = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render("shop/product-list", {
      products: products,
      pageTitle: "All Products",
      path: "/products"
    });
  });
};

exports.getProduct = (req, res, next) => {
    const prodId = req.params.productID;
    const product = Product.findById(prodId, product => {
        res.render('shop/product-detail', {product: product, pageTitle: product.title, path: '/products'});
    })
}

exports.getIndex = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render("shop/index", {
      products: products,
      pageTitle: "Shop",
      path: "/"
    });
  });
};

exports.getCart = (req, res, next) => {
    res.render("shop/cart", {
        path: "/cart",
        pageTitle: "Cart",
    })
}

exports.postCart = (req, res, next) => {
    const productID = req.body.productId;
    Product.findById(productID, (product) => {
        Cart.addProduct(productID, product.price);
    })
    res.redirect('/cart');
}

exports.getOrders = (req, res, next) => {
    res.render("shop/orders", {
        path: "/orders",
        pageTitle: "Orders",
    })
}

exports.getCheckout = (req, res, next) => {
    res.render("shop/checkout", {
        path: "/checkout",
        pageTitle: "Checkout",
    })
}
