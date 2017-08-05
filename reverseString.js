/*
JavaScript
Basic algorithm
Reverse a string
*/

function reverseString(str){
	str = str.split('').reverse().join('');
	return str;
}

reverseString("test String");