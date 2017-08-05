/*
JavaScript
BasicAlgorithm
title case a sentence
return provided string with the first letter of each word capitalized
*/ 

function titleCase(str){
	str = str.toLowerCase();
	var strArr = str.split(" ");
	for (var i=0; i<strArr.length; i++){
		var wordArr = strArr[i].split('');
		wordArr[0] = wordArr[0].toUpperCase();
		strArr[i]=wordArr.join('');
	}

	var newStr = strArr.join(" ");
	return newStr;
}

titleCase("Test seNtence");