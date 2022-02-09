const productsData = require("../data/productsData.json");

export const initialState = {
  products: productsData.products,
  cartItems: [],
  //currentItem: null
};
