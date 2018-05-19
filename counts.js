
/*
given two arrays of positive numbers. Find the number of values in the first array 
that are less than or equal to each value in the second array

e.g.
    input:
    [1,3,4,5], [2,4]
    output:
    [1,3]

*/

function counts(nums, maxes) {
    const output = [];
    for(var m=0; m<maxes.length; m++){ //loop through maxes
        let counter = 0;
        for(var i=0; i<nums.length; i++){ // loop through nums
            if(nums[i] <= maxes[m]){
                counter++;
            }
        }
        output.push(counter);
    }
    return output;
}