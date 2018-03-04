/***
create a function that adds two 
numbers together without using addition
operator

e.g.
input: 7,5
output: 12

***/


var a = 7;
var b = 5;
var c = -2;
var d = -5;

function addition(x, y){
  	let output = null;
  	x *= -1;
  	output = x-y;
  
  	return -1*output;
}


console.log(addition(a,b));
console.log(addition(b,d));
console.log(addition(a,c));
console.log(addition(c,b));