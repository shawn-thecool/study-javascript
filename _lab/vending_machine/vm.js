var { _getRandomId } = require("./utils");
var { createVmProd } = require("./vm.product");

var vm = {
  id: _getRandomId("vm"),
  loc: "경기 성남시 분당구 서현 우체국 앞",
  products: [],
  maxSlot: 10,
  maxType: 10,
  currency: {
    10000: 10,
    5000: 50,
    1000: 100,
    500: 200,
    100: 500
  },
  add: function(productName) {
    console.log(`_process_${productName}을 자판기에 추가합니다`);
    var newProd = createVmProd(productName);
    this.products.push(newProd);
  },
  remove: function(productId) {
    var resultList = [];
    this.products.forEach(function(product) {
      if (product.id !== productId) {
        console.log(`_process_요청된 상품을 찾지 못했습니다.`);
        resultList.push(product);
      }else{
        console.log(`_process_요청된 상품을 찾아 제거하였습니다 .${product.name}`);
      }
    });
    this.products = resultList;
  }
};

vm.add("코카콜라");
vm.add("팹시");
vm.add("환타");
vm.add("미란다");
vm.remove(vm.products[0].id);

// vm.billing

// console.log("vm : ", vm);
