var faker = require("faker");


function makePricedProducts() {
  
  return "Product: " + faker.commerce.productName() + " - Price: $" + faker.commerce.price(); 

}


function printInventoryList() {
  
  var items = 10;

  console.log("###################################################");
  console.log("Inventory list");
  console.log("###################################################");

  for (var index = 0; index < items; index++) {
    
    console.log(index + ": " + makePricedProducts());
    
  }

}


// Print out the inventory list
printInventoryList();
