const stockProducts = require('./data.json');

const getProductsWithAllergyOrIntoleranceInfo = () => {
  // Desenvolva seu código dentro dessa função...
  let newArray = [];
  for (let index = 0; index < stockProducts.length; index += 1) {
      newArray.push(`description:'${stockProducts[index].description}: formatted price:R$"${stockProducts[index].price}"  allergyOrIntoleranceMessage:'Pode conter:${stockProducts[index].allergyOrIntolerance}` )
  }
  return newArray;
};

console.log(getProductsWithAllergyOrIntoleranceInfo())

module.exports = { getProductsWithAllergyOrIntoleranceInfo };
