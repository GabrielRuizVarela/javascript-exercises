const add = function(...a) {
  return a.reduce((a,b)=> a+b);
};

const subtract = function(...a) {
	return a.reduce((a,b)=> a-b);
};

const sum = function(a) {
	return a.reduce((a,b)=> a+b,0);
};

const multiply = function(a) {
  return a.reduce((a,b)=> a*b,1);
};

const power = function(a,b) {
	return a**b;
};

const factorial = function(a) {
	if (a===0){return 1;}
  let result = 1;
  for(let i=1; i<=a; i++){
    result *= i; 
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
