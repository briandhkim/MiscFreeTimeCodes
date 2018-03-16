/*
create a function that will first take in a single argument
of arrays consisting of three math functions; the function
will then take a number input which will go through the 
array of functions, going from the last function in the array
to the first; the output of the overall function will
be that of the product of function array

e.g.
  input = [funct1, funct2, funct3]; 5.7
	funct 1 = multiply by 9
	funct 2 = floor number
	funct 3 = add 1 to the number
  output = 54
  function call = compose
  compose([funct1,funct2,funct3])(5.7);
*/

// compose([add1, floor, times9])(0.783255)
// is the same as:
// add1(floor(times9(0.783255)));

// compose([add1, floor, times9])(0.783255)
// add1(compose([floor, times9])(0.783255))
// add1(floor(compose([times9])(0.783255)))

// compose([floor, times9])(0.783255)
// -> floor(compose([times9])(0.783255))

// compose([times9])(0.783255)
// -> times9(compose([])(0.783255))

// compose([])(0.783255)
// -> 0.783255


const times9 = (number) => 9*number;
const floor = (number) => Math.floor(number);
const add1 = (number) => number+1;

const compose = (input)=>{
  	let returnVal = null;
  
  	function functionCallCheck(nextInput){
	  	if(typeof nextInput === 'number'){
		  	for(var i=input.length-1; i>=0; i--){
				nextInput = input[i](nextInput);
		  	}
		  	return nextInput;
	  	}else{
			console.log('input error');
			return 'error';
	  	}
  	}
 
  	return functionCallCheck;
};


const output=compose([times9,floor,add1])(5.7);
console.log(output);