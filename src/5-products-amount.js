const stockProducts = require('./data.json');

const getProductsAmount = () => {
  // Desenvolva seu código dentro dessa função...
  let inStock = 0;
  for (let index = 0; index < stockProducts.length; index += 1) {
    inStock += stockProducts[index].quantityInStock
  }
  return inStock;
};

module.exports = { getProductsAmount };
