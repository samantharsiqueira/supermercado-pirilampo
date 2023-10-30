const stockProducts = require('./data.json');

const getUniqueProductsName = () => {
  // Desenvolva seu código dentro dessa função...
  let newArray = [];
  for (let index = 0; index < stockProducts.length; index += 1) {
  newArray.push(stockProducts[index].productName)
  }
  return newArray;
};


module.exports = { getUniqueProductsName };
