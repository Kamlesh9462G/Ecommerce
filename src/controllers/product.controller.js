const { productService, cartService } = require("../services");

const addProduct = async (req, res, next) => {
  const createProduct = await productService.addProduct(req.body);
  if (createProduct) {
    return res.status(201).json({
      message: "product created successfully",
    });
  }
};
const getProducts = async (req, res, next) => {
  const products = await productService.getProducts();
  return res.status(200).json({
    message: "success",
    Products: products,
  });
};
const getProduct = async (req, res, next) => {};
const addProductToCart = async (req, res, next) => {
  try {
    console.log("inside product to cart controller")
    const { _id } = req.user;
    const { productId, quantity } = req.body;
    const addProductToCart = await cartService.addProductToCart(
      _id,
      productId,
      quantity
    );
    if (addProductToCart) {
      return res.status(200).json({
        message: "product added successfully to cart",
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};
const updateProductQuantity = async (req, res, next) => {
  try {
    const { _id } = req.user;
    const { productId, quantity } = req.body;
    const QuantityUpdated = await cartService.updateProductQuantity(
      _id,
      productId,
      quantity
    );
    if (QuantityUpdated) {
      return res.status(200).json({
        message: "product quantity successfully updated",
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};
module.exports = {
  getProducts,
  getProduct,
  addProductToCart,
  updateProductQuantity,
  addProduct,
};
