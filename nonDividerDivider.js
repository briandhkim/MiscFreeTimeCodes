/***
create a function for dividing provided input
without using dividor or modulo
the function will take in two arguments; divide
the first argument by the second

e.g.
input - 25, 5
outpt - 5

***/


const numerator = 15;
const denominator = 4;

const num1 = 20;
const den1 = 2;

const num2 = 3;
const den2 = 6;


function divider(n, d){

  	let sol = 0;
  	while(sol*d < n){
    	sol++;
  	}
  	if(sol*d!==n){
    	/**if the solution*denominator 
    		does not equal to numerator, sol needs to be
    		decremented as the while loop increments once 
    		more past the sol calculated**/
      	sol--;
  	}

  	//decimal place calculation
  	let dec;
  	if(n-(sol*d)>0){
    	let rem = (n-(sol*d)) * 10;
    	dec = divider(rem, d);
  	}
  	if(dec){sol+=(dec*0.1);}
  
  	return sol;
}

console.log(divider(numerator, denominator));
console.log(divider(num1,den1));
console.log(divider(num2,den2));