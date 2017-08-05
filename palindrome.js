/*
JavaScript
BasicAlgorithm
return true if provided string is palindrome
*/ 

function palindrome(str){
	str = str.toLowerCase();
	str = str.replace(/[^a-z0-9]/gi, '');
	var newStr = str.split('').reverse().join('');

	if (newStr===str){
		return true;
	}
	else return false;
}

palindrome("2_a3*3#B2");
