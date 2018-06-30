/**
Given an array nums and a target value k, find the 
maximum length of subarray that sums to k; if there
isn't one, return 0 instead
(note: the sum of the entire nums array is guaranteed to
fit within the 32-bit signed integer range)

e.g.
input: nums=[1, -1, 5, -2, 3], k=3
output: 4; [1, -1, 5, -2] sums to 3 and is the longest

input: nums=[-2, -1, 2, 1], k=1
output: 2; [-1, 2] sums up to 1 and is the longest

**/

const nums=[1, -1, 5, -2, 3];
const k = 3;

const nums2=[-2, -1, 2, 1];
const m=1;

function largeSum(nums, target){
  let maxLen = 0;
  let sum = 0;
  let cumulativeSum = [];
  
  for(let i=0; i<nums.length; i++){
    if(i>0){
      cumulativeSum[i] = nums[i] + cumulativeSum[i-1];
      if(cumulativeSum[i] === target && i>maxLen){
        maxLen = i+1;
      }
      
    }else{
      cumulativeSum[i] = nums[i];
    }
  }
  
  return maxLen;
}

console.log(largeSum(nums,k));
console.log(largeSum(nums2,m));