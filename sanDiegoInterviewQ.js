/*
interview question (san diego)
given an array of numbers and a single number, provide
all combination pairs in the array of numbers
that add up to the provided number. The combination pair
output must be in ascending order
if there are no matching combinations, the output 
should be null

e.g. 
  input  =  [1,2,3,6,7,8]; 10
  output = [[2,8],[3,7]]
*/

const numArr_1 = [1,2,3,6,7,8];
const num_1 = 10;

const numArr_2 = [2,4,5,8,12];
const num_2 = 15;

const numArr_3 = [0,5,7,8,12,15]; 
const num_3 = 20;


function pairAddition(arr, num){
  let outputArr = [];
  for(var i=0; i<arr.length-1; i++){
    for(var k=i+1; k<arr.length; k++){
      if(arr[i]+arr[k]===num){
        const pairArr=[arr[i],arr[k]];
        outputArr.push(pairArr);
      }
    }
  }
  if(outputArr.length){
    return outputArr;
  }else return null;
}

console.log(pairAddition(numArr_1,num_1));
console.log(pairAddition(numArr_2,num_2));
console.log(pairAddition(numArr_3,num_3));