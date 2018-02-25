/*
given an array of numbers, determine if the 
array is in ascending, descending, or mixed order
if ascending, output 1
descending, output -1
mixed, output 0

*/

let arrAsc = [1,2,3,4,5,6];
let arrAsc2= [1,3,4,8,13];
let arrDsc = [6,5,4,3,2,1];
let arrDsc2= [14,10,7,5,2];
let arrMix = [1,3,2,6,4,5];
let arrMix2= [1,15,2,8,5,6];



function orderCheck(arr){
	let sumTrack = 0;
  
 	for(var i=0; i<arr.length-1; i++){ //arr.length-1 since comparing current value to next
   		if(arr[i]<arr[i+1]){
     		sumTrack++;
   		}else if(arr[i]>arr[i+1]){
     		sumTrack--;
   		}
 	}
 
  	if(sumTrack>0  && sumTrack===arr.length-1){
    	return 1;
  	}else if(sumTrack<0 && Math.abs(sumTrack)===arr.length-1){
    	return -1;
  	}else{
    	return 0;
  	}
}

console.log(orderCheck(arrAsc));
console.log(orderCheck(arrAsc2));
console.log(orderCheck(arrDsc));
console.log(orderCheck(arrDsc2));
console.log(orderCheck(arrMix));
console.log(orderCheck(arrMix2));