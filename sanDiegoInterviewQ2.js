/*
Write a program that, given an integer, sums all the
numbers from 1 through that integer (both inclusive). Do not include
in the sum any of the intermediate numbers (1 and n inclusive) that are
divisible by 5 or 7

e.g.
input: 10  ; output: 33

input: 7  ;  output: 16
*/

const num_1 = 10;
const num_2 = 7;
const num_3 = 8;
const num_4 = 12;


function addNum(num){
  let sum = 0;
  for(var i=1; i<num+1; i++){
    if((i%5===0) || (i%7===0)){
      continue;
    }
    sum+=i;
  }
  
  return sum;
}

console.log(addNum(num_1));
console.log(addNum(num_2));
console.log(addNum(num_3));
console.log(addNum(num_4));