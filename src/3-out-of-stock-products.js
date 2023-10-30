const stockProducts = require('./data.json');

const getOutOfStockProducts = () => {
  // Desenvolva seu código dentro dessa função...
  let newArray = [];
  for (let index = 0; index < stockProducts.length; index += 1) {
    if (stockProducts[index].quantityInStock === 0) {
      newArray.push(stockProducts[index].productName);
    }
  }
  return newArray;
};

module.exports = { getOutOfStockProducts };
