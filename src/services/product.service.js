const { Product } = require("../models");

const addProduct = async (productData) => {
  return await Product.create(productData);
};
const getProducts = async () => {
  return await Product.aggregate([
    {
      $project: {
        name: 1,
        price: 1,
        unit: 1,
        subcategory: 1,
      },
    },
  ]);
};
module.exports = {
  addProduct,
  getProducts
};
