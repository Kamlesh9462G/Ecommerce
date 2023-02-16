const { User } = require("../models");
const addProductToCart = async (userId, productId, quantity) => {
  console.log(userId, productId, quantity);
  return await User.findOneAndUpdate(
    { _id: userId },
    {
      $push: {
        cart: {
          product: productId,
          quantity: quantity,
        },
      },
    }
  );
};
const updateProductQuantity = async (userId, productId, quantity) => {
  return await User.findOneAndUpdate(
    {
      _id: userId,
      "cart.product": productId,
    },
    {
      $set: { "cart.$.quantity": quantity },
    }
  );
};
module.exports = {
  addProductToCart,
  updateProductQuantity,
};
