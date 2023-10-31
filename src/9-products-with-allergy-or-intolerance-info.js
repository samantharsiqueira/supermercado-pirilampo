const stockProducts = require('./data.json');

const getProductsWithAllergyOrIntoleranceInfo = () => {
  // Desenvolva seu código dentro dessa função...
  let emptyArray = [];
  for (let index = 0; index < stockProducts.length; index += 1) {
    if (stockProducts[index].allergyOrIntolerance) {
      emptyArray.push({
        description: `${stockProducts[index].description}`,
        formattedPrice: `R$ ${stockProducts[index].price.toFixed(2)}`,
        allergyOrIntoleranceMessage: `Pode conter:
         ${stockProducts[index].allergyOrIntolerance.join(' ')}`,
      });
    }
  }
  return emptyArray;
};

module.exports = { getProductsWithAllergyOrIntoleranceInfo };
