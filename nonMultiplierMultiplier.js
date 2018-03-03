/**
create a function for multiplying two numbers without 
using the multiplication operator; the function will
take in two arguments (two numbers to be multiplied)

e.g.
input: 2,6
output: 12
**/


var a = 2;
var b = 6;
var c = 0;
var d = 4;
var e = 1.25;

function multiply(a,b){
    if(a===0||b===0){
      return 0;
    }
  
    let l, g, output = null;
  
    //conditional to minimize loop iteration
    if(a < b){
        l = a;
        g = b;
    }else{
        l = b;
        g = a;
    }
  
    //decimal calculation
    let dOut = null;
    if(l-Math.floor(l)>0){
        let decimal = l- Math.floor(l);
        dOut = g / (1/decimal);
    }
  
    l = Math.floor(l);
    for(var i=1; i<=l; i++){
        output += g;
    }
    if(dOut){output+=dOut;}
  
    return output;
}

console.log(multiply(a,b));
console.log(multiply(c,d));
console.log(multiply(a,d));
console.log(multiply(d,e));
