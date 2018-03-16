const times9 = num => 9 * num;
const floor = num => Math.floor(num);
const add1 = num => 1 + num;


console.log(compose([add1, floor, times9])(0.783255));


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

function compose(functionList){
    return function(input){
        // base case
        if (functionList.length === 0){
            return input;
        }
    
        // recursive case
        const firstFunc = functionList[0];
        const remainingFuncList = functionList.slice(1);
        return firstFunc(
            compose(remainingFuncList)(input)
        );
    }
}