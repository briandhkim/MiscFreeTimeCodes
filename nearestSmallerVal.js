/**
Nearest Smaller Values
create a function that takes in an array of numbers(int);
for each element in the list, search all the previous
values for the nearest element that is smaller than the
current element and create a new list from the numbers;
if there is no element before a certain position that 
is smaller, input a -1
e.g.
input: [5,2,8,3,9,12]
output: [-1,-1,2,2,3,9]
**/


var input = [5,2,8,3,9,12];


function nSmVal(arr){
    var output =[-1]; //the first element would always have -1
    for(var i=1; i<arr.length; i++){
        for(var m=i-1; m>-1; m--){
            if(arr[i]>arr[m]){
                output[i] = arr[m];
                break;
            }
            if(m===0){  //this only gets triggered if last element is checked and no swap is made
                output[i] = -1;
            }
        }
    }
    return output;
}

console.log(nSmVal(input));