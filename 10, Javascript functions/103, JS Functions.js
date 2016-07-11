// #########################################################
// isEven [DONE]
// function isEven(num) {
//   if(num % 2 === 0) {
//     return true;
//   }
// //  else if(num % 2 === 1) {
//   else {
//     return false;
//   }
// }

function isEven(num) {
  return num % 2 === 0;
}

console.log("### IS EVEN ###");
console.log(isEven(4));    //true
console.log(isEven(21));   //false
console.log(isEven(68));   //true
console.log(isEven(333));  //false


// #########################################################
// Make factorial [DONE]
function factorial (num) {
//My version
  var sum = 0;

  if(num === 0) {
    sum = 1;
    return sum;
  }

  else {
    for (var i = num; i > 1; i--) {
      if (i=== num) {
        sum = i * (i-1);
      }

      else {
        sum *= (i-1);
      }

    }
    return sum;
  }

}

function factorial_2(num) {
//Teachers version
  var sum = 1;

  for(var i = 2; i <= num; i++) {
    sum *= i;
  }
  return sum;
}


console.log("### FACTORIAL ###");
console.log(factorial(5));     // 120
console.log(factorial(2));     // 2
console.log(factorial(10));    // 3628800
console.log(factorial(0));     // 1

console.log("### FACTORIAL_2 ###");
console.log(factorial_2(5));     // 120
console.log(factorial_2(2));     // 2
console.log(factorial_2(10));    // 3628800
console.log(factorial_2(0));     // 1


// #########################################################
// kebabToSnake


function kebabToSnake(str) {

  var newStr = str.replace(/-/g, "_");

  return newStr;
}


console.log("### Kebab to Snake ###");
console.log(kebabToSnake("hello-world"));        //hello_world
console.log(kebabToSnake("dogs-are-awesome"));   //dogs_are_awesome
console.log(kebabToSnake("blah"));               //blah
