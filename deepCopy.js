/**
In javascript, objects and arrays are reference variables;
therefore, if a new variable is assigned an existing object,
the new variable and existing variable would point (reference)
to the same object
the purpose of this function is to create a copy of the object 
or array with new reference point
**/


const object = {
    x: '1',
    y: {
        a:'2',
        b:'3'
    }
}

let deepCopy =(obj)=>{

    for(var idx in obj){
        if(typeof obj[idx] =='object'){
            return deepCopy(obj[idx]);
        }else{
      
            if(Array.isArray(obj)){
                const returnArr= [];
                for(var i in obj){
                    returnArr.push(obj[i]);
                }
                return returnArr;
            }
      
            let returnObj = {};
            for(var idx in obj){
                returnObj[idx] = obj[idx];
                //may need to do an array check here
            }
            return returnObj;
      
        }   
    }
}

let newO = deepCopy(object);
// console.log(newO, object);
console.log("object check", newO === object);

const arr1= [1,2,3];
const newArr = deepCopy(arr1);
console.log(arr1, newArr);
console.log(arr1===newArr);