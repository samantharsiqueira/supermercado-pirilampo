const stockProducts = require('./data.json');

const getProductsRichInVitamin = () => {
  // Desenvolva seu código dentro dessa função...
  let emptyArray = [];
  for (let index = 0; index < stockProducts.length; index += 1) {
    if (stockProducts[index].nutritionalInfo.vitamins) {
      emptyArray.push({
        description: `${stockProducts[index].description}`,
        formattedPrice: `R$ ${stockProducts[index].price.toFixed(2)}`,
        vitaminsInformation: Object.entries(stockProducts[index].nutritionalInfo.vitamins),
      });
    }
  }
  return emptyArray;
};

module.exports = { getProductsRichInVitamin };
