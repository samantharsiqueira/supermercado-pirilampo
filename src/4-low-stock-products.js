const stockProducts = require('./data.json');

const getLowStockProducts = () => {
  // Desenvolva seu código dentro dessa função...
  let newArray = [];
  for (let index = 0; index < stockProducts.length; index += 1) {
    if (stockProducts[index].quantityInStock > 0 && stockProducts[index].quantityInStock <=10) {
      newArray.push(`${stockProducts[index].productName}: ${stockProducts[index].quantityInStock} unidades` )
    }
  }
  return newArray;
};

console.log(getLowStockProducts())

module.exports = { getLowStockProducts };
