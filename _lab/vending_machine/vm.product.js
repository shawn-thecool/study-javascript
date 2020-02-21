var { _getRandomId } = require("./utils");

var createVmProd = function(name) {
  return {
    id: _getRandomId("vm_prod"),
    name: name || "칠성사이다",
    productionDate: "20200102",
    expirationDate: "20200301",
    discountPercent: 30,
    maxSlotCount: 10,
    price: 800,
    ingredient: {
      sugar: 300,
      sodium: 140
    }
  };
};

module.exports = {
  createVmProd: createVmProd
};
