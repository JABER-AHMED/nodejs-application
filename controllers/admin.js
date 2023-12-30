const Product = require("../model/product");

exports.getAddProduct = (req, res, next) => {
  const editMode = req.query.edit;
  res.render("admin/edit-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
    editing: editMode,
    activeAddProduct: true,
    formsCSS: true,
    productCSS: true,
  });
};

exports.postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const imageURL = req.body.imageURL;
  const description = req.body.description;
  const price = req.body.price;
  const product = new Product(null, title, imageURL, description, price);
  product.save();
  res.redirect("/");
};

exports.updateProduct = (req, res, next) => {
    const prodID = req.body.productId;
    const updatedTitle = req.body.title;
    const updatedPrice = req.body.price;
    const updatedDescription = req.body.description;
    const updatedImage = req.body.imageURL;
    const updatedProduct = new Product(prodID, updatedTitle, updatedImage, updatedDescription, updatedPrice);
    updatedProduct.save();
    res.redirect('/admin/products');
  };

exports.getProducts = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render("admin/products", {
      products: products,
      pageTitle: "Admin Products",
      path: "/admin/products",
    });
  });
};

exports.getEditProduct = (req, res, next) => {
  const editMode = req.query.edit;
  if (!editMode) {
    return res.redirect("/");
  }
  const prodID = req.params.productId;
  Product.findById(prodID, (product) => {
    if (!product) {
      res.redirect("/");
    }
    res.render("admin/edit-product", {
      pageTitle: "Edit Product",
      product: product,
      path: "/admin/edit-product",
      editing: editMode,
      activeAddProduct: true,
      formsCSS: true,
      productCSS: true,
    });
  });
};
