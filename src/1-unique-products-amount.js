const stockProducts = require('./data.json');

const getUniqueProductsAmount = () => {
  // Desenvolva seu código dentro dessa função...
 let uniqueProduct = 0;
 uniqueProduct = stockProducts.length;
    return uniqueProduct;
};

module.exports = { getUniqueProductsAmount };
