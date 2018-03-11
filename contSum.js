/**
Given a list of *non-negative* numbers and a target integer k,
write a function to check if the array has a continuous subarray
of size at least 2 that sums up to the multiple of k, that is, 
sums up to n*k where n is also an integer

e.g.
input: [23, 2, 4, 6, 7], k=6
output: true
exp: Because [2, 4] is a continuous subarray of size 2 
  and sums up to 6 (6*1)

input: [23, 2, 6, 4, 7], k=7
output: true
exp: because [23, 2, 6, 4, 7] is an continous
  subarray of size 5 and sums up to 42 (7*6)
**/

/*
first part: checking every combination = n! (?)

second part can be taken care of 'sum'%k
*/


function contSubarraySum(intArr, k){
  	for(var i=0; i<intArr.length-1; i++){
    	var sum = intArr[i]+intArr[i+1];
    	if(sum%k===0){
      		return true;
    	}
    
//     var lumpSum = null;
    	for(var m=intArr.length-1; m>i+1; m--){
      		sum+=intArr[m];
      		if(sum%k===0){
        		return true;
      		}
    	}
    
  	}
  	return false;
}

var nums = [23, 2, 4, 6, 7];

console.log(contSubarraySum(nums,7));