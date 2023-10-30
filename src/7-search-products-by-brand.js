const stockProducts = require('./data.json');

const searchProductsByBrand = (product) => {
  // Desenvolva seu código dentro dessa função...
  let emptyArray = [];
  for (let index = 0; index < stockProducts.length; index += 1) {
    if (product === stockProducts[index].brand) {
      emptyArray.push({
        description: `${stockProducts[index].description}`,
        formattedPrice: `R$ ${stockProducts[index].price.toFixed(2)}`,
      });
    }
  }
  return emptyArray;
};

module.exports = { searchProductsByBrand };
