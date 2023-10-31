const stockProducts = require('./data.json');

const getProductsOnSale = () => {
  // Desenvolva seu código dentro dessa função...
  let emptyArray = [];
  for (let index = 0; index < stockProducts.length; index += 1) {
    if (stockProducts[index].onSale === true) {
      emptyArray.push({
        description: `${stockProducts[index].description}`,
        formattedPrice: `R$ ${stockProducts[index].price.toFixed(2)}`,
        onSale: stockProducts[index].onSale,
      });
    }
  }
  return emptyArray;
};

console.log(getProductsOnSale());

module.exports = { getProductsOnSale };
