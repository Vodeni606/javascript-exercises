const fibonacci = function(n) {
  n = parseInt(n); 

  if(n === 1 || n === 2){
    return 1;
  }else if (n === 0){
    return 0;
  }else if (n < 0)
    return "OOPS";

  let prev1 = 0;  
  let prev2 = 1;  
  let current;  
  
  for (let i = 2; i <= n; i++) {
    current = prev1 + prev2;  
    prev1 = prev2
    prev2 = current
  }
  
  return current;
};

// Do not edit below this line
module.exports = fibonacci;
