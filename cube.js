/***
shift the contents of the array 90 degrees to the right once

e.g.
input:
	[
		[1,2,3],
		[4,5,6],
		[7,8,9]
	]

output:
	[
		[7,4,1],
		[8,5,2],
		[9,6,3]
	]
***/


const cube = [
  [0,1,2,3,4],
  [5,6,7,8,9],
  [10,11,12,13,14],
  [15,16,17,18,19]  
]
const cube2 =[
		[1,2,3],
		[4,5,6],
		[7,8,9]
	]


function cubeShift(arr){
  	var newCube=[];
  	for(var k=0; k<arr[0].length;k++){
    	newCube[k] = [];
    	for(var i=arr.length-1, m=0; i>-1; i--,m++){
	        newCube[k].push(arr[i][k]);
    	}
  	}
  	return newCube;
}

const newCube = cubeShift(cube);
const newCube2 = cubeShift(cube2);

console.log(newCube, newCube2);