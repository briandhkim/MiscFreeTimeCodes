/**
array factors
write a function that takes one parameter: an array
of numbers; the function should return an object
with multiple arrays in it, one for each non-repeating
number in the input array; repeated numbers should
not be added twice
e.g.
input: [4,2,8,6,3,9]
output:  { 4: [2], 2: [], 
           8: [4,2], 6: [2,3], 
           3: [], 9: [3] }
**/


function arrFactor(arr){
  	let returnObj = new Object();
  	arr.map(n=>{
    	returnObj[n] = [];
    	for(let i=0; i<arr.length; i++){
      		if(!(n%arr[i]) && arr[i]!==n){
        		returnObj[n].push(arr[i]);
      		}
		}
  	});
  	return returnObj;
}


var arr= [4,2,8,6,3,9];
var output = arrFactor(arr);
console.log(output);