const stockProducts = require('./data.json');

const searchProductByName = (product) => {
  // Desenvolva seu código dentro dessa função...

  for (let index = 0; index < stockProducts.length; index += 1) {
    if (product === stockProducts[index].productName) {
      return {
        description: `${stockProducts[index].description}`,
        formattedPrice: `R$ ${stockProducts[index].price.toFixed(2)}`,
      };
    }
  }
  return null;
};

module.exports = { searchProductByName };
