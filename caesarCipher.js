
/**
write a function that takes in a string (param1) and
a number n (param2); shift each letter of the string 
up by n places in alphabet;
only assume lower case letters for this
e.g.
input:
'caesar cipher', 2
output:
'ecguct ekrjgt
**/

var str = 'abc def xyz';
var str2 = 'testing string';
var str3 = 'caesar cipher';

function cCipher(str,n){
  	let outputArr = [];
  	let strArr = str.split(' ');
  	for(var i=0; i<strArr.length; i++){
    	outputArr[i] = '';
    	for(var s in strArr[i]){
      		let newChar = strArr[i].charCodeAt(s)+n;
      		if(newChar>122){
        		const changeNum = newChar-122;
        		newChar = 96+changeNum;
      		}
      		outputArr[i]+=String.fromCharCode(newChar);
    	}
  	}
  	const output = outputArr.join(' ');
  	return output;
}

console.log(cCipher(str, 7));
console.log(cCipher(str2, 5));
console.log(cCipher(str3, 2));