/**
create a function that adds n number of inputs

**/


var result = add(2)(4)(6)();
console.log(result);

function add(initialNumber){

    function nextAdd(nextNumber){
        if(nextNumber===undefined){
            return initialNumber;
        } else {
            initialNumber= initialNumber + nextNumber;
            return nextAdd;
        }
    }
    return nextAdd;
}