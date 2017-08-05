/*
JavaScript
BasicAlgorithm
find the longest word in a string
returns the length of the longest word
*/ 

function findLongestWord(str){
	var stringArray = str.split(" ");
	var idx = 0;
	for (var i =1; i<stringArray.length; i++){
		if (stringArray[idx].length < stringArrray[i].length){
			idx=i;
		}
	}
	return stringArray[idx].length;
}

findLongestWord("The quick brown fox jumped over the lazy dog");