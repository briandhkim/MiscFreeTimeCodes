/****************************
data struct (7):
array
linked list
dynamic array / vector
stack
	last in first out
	first in last out
queue
	first in first out
	last in last out
tree
	heap, binary search, tri
graph
hash table

native code : 
	in chrome, engine was written in C++, firefox in Java
		JavaScript uses native code of C++ in chrome.
		e.g. [array variable].slice in console will say [native] -> referring to native C++ code in Chrome

RAM = random access memory
in part, array was made to take advantage of RAM. to be able to access memory at any random point
rather than sequential access memory

*****Big-O : worst case scenario
*****little-O: best case
*****Omega: average

Big-O-notation:
reference to worst case scenario for finding something. 
O(n+1) / O(n) = worst case. having to iterate through every item in an array
		** '+1' is usually dropped because as n approaches infinity, +1 is relatively insignificant

array
	read: O(1) = best case scenario; known read operation. read operation if the item location is known
	search: O(n) = worst case scenario; search operation. searching through every single item
	add/write: O(n) = to add items to arrays, the computer would have to allocated space for existing items+1 and copy the items and add new item
	delete: O(n) = same as add/write
	-arrays are generally good for reading but for everything else is shit

vector
	vectors dobule in size when last element is filled to make space for more. 
	over time, adding things will take half the time. (log) 
	read: O(1)
	search: O(n)
	add: O(log n)


bubble sort = O(n^n) : looping n items n times

linked list:
series of object that are linked together. usually by property 'next' that links one object reference
to another object reference
	read: O(n)
	search: O(n)
	add: O(1)
	delete: O(1)

LinkList
	head
	add(value)
	----
	Node
		value
		next
e.g.
list = new LinkList()
List.add(2); list.add(4); lsit.add(6); etc.


Algorithm

selection sort: O(n^2)

insertion sort: O(n^2)
	worst-case scenario will be about the same as bubble sort
	on average insertion works out better

Heap: O(n log n)
Quick: O(n log n)
Merge: O(n log n)




*****************************/ 


//selection sort *********************
var arr1 = [3,56,43,5,7,98,0.4,5,8,56];

function insertionSort(arr){
	arr = arr.slice(); //create 'shallow' copy of array

	for(let unsortedIdx = 0; unsortedIdx <arr.length-1; unsortedIdx++){
		// if(arr[unsortedIdx] > arr[unsortedIdx+1]){
		// 	let temp = arr[unsortedIdx];
		// 	arr[unsortedIdx]=arr[unsortedIdx+1];
		// 	arr[unsortedIdx+1] = temp;
			for(let backtrack=unsortedIdx+1; backtrack > 0; backtrack--){
				if(arr[backtrack-1]>arr[backtrack]){
					let temp = arr[backtrack-1];
					arr[backtrack-1] = arr[backtrack];
					arr[backtrack] = temp;
				}else{	//leave the loop when no swap occurs
					break;
				}
			}
		// }
	}
	return arr;
}

function selectionSort(arr){
	//make a copy arr
	arr = arr.slice();

	//loop through array from start to end
	for(let outerIdx = 0; outerIdx < arr.length; outerIdx++){
		//finding the smallest number
		let smallTemp = arr[outerIdx];
		let smallIdx = outerIdx;
		//loop through array from end to outer index
		for(let innerIdx = arr.length-1; innerIdx > outerIdx; innerIdx--){
			//if number at inner index < temp var;
			if(arr[innerIdx] <smallTemp){
				//replace temp with inner idx value
				//replace tempidx with inner idx
				smallTemp = arr[innerIdx];
				smallIdx = innerIdx;
			}	
		}
		//swap smallest with element at outer idx
		let swapTemp = arr[smallIdx];
		arr[smallIdx] = arr[outerIdx];
		arr[outerIdx] = swapTemp;
	}
		
	//return arr
	return arr;
}


/***
merge sort

find middle
check if equal
	return
else
	check if < or >
	take left or right
	call function again with left or right
***/
var arr2 =[2,3,5,8,9,10,12];
// function mergeFind(val, arr){
// 	let middleIdx = Math.floor(arr.length/2);
// 	if(arr[middleIdx]===val){
// 		return arr[middleIdx];
// 	}else if(arr[middleIdx] > val){
// 		return mergeFind(val, arr.slice(0,middleIdx));
// 	}else if(arr[middleIdx] < val){
// 		return mergeFind(val, arr.slice(middleIdx));
// 	}else{
// 		return 'value not found'
// 	}
// }

function mergeFind(val,arr, start=0, end=arr.length-1){
	if(arr.length==0){
		return -1;
	}
	let middle = start + ((end-start)/2) >>0;
	if(arr[middle]==val){
		return middle;
	}else{
		if(arr[middle] < val){
            return mergeFind(val, arr, middle+1, end);
		}else{
            return mergeFind(val, arr, start, middle-1);
		}
	}
}



//fibbonacci
function fib(n){
	if(n<2){
		return n;
	}
	return fib(n-1)+fib(n-2);
}

function fibM(n){
	if(memory[n]!=undefined){
		return memory[n];
	}
	if(n<2){
		memory[n]=n;
		return n;
	}
	let value = fibM(n-1) + fibM(n-2);
	memory[n] = value;
	return value;

}