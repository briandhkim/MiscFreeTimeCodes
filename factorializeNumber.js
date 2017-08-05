/*
JavaScript
Basic algorithm
return factorialized integer
*/

function factorizalize(num){
	if (num===0){
		return 1;
	}
	else
		return num*factorialize(num-1);
}

factorialize(5);