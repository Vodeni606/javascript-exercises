const add = function(a,b) {
	const sum = a + b;
  return sum;
};

const subtract = function(a,b) {
	const sum = a - b;
  return sum;
};

const sum = function(numbers) {
	let total = 0;
  for (let i = 0; i < numbers.length; i++){
    total += numbers[i];
  }
  return total;
};

const multiply = function(numbers) {
  let total = 1;
  for (let i = 0; i < numbers.length; i++){
    total *= numbers[i];
  }
  return total;
};

const power = function(base,exponent) {
	let result = 1; 
  for (let i = 0; i < exponent; i++){
    result *= base;
  }
  return result;
};

const factorial = function(a) {
	let result = 1;
  for (let i = a; i > 0; i--){
    result *= i;
  }
  return result;
};

console.log(add(0,0));

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
