function LinkList(){
	this.head = null;
	var node = null;
	this.currentNode = null;
	this.add = function(value){
		node = new Node(value);
		this.currentNode = this.head;
		if(!this.currentNode){
			this.head = node;
			return;
		}

		while(this.currentNode.next){
			this.currentNode = this.currentNode.next;
		}
		this.currentNode.next = node;
	}
}

function Node(val){
	this.value = val;
	this.next = null;
}

class LinkedList{
	constructor(){
		this.head = null;
		this.tail = null;
	}
	add(value, targetNode= null){
		const newNode = new LinkListNode(value);
		if(targetNode === null){
			if(this.tail === null){	
				this.tail = newNode;
				this.head = newNode;
			} else {
				this.tail.next = newNode;
				this.tail = newNode;
			}
		} else {
			newNode.next = targetNode.next;
			targetNode.next = newNode;
		}
	}

}

class LinkListNode{
	constructor(value){
		this.value = value;
		this.next = null;
	}

}

const linkedList = new LinkedList();
linkedList.add(2);
linkedList.add(4);
linkedList.add(6);
var test = linkedList.head.next;
linkedList.add(5, test);

console.log(linkedList);