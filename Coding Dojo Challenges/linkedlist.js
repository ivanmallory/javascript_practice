class Node{
	constructor(val){
        this.value = val;
        this.next = null;
    }
}

class SLList{
    constructor(){
        this.head = null;
    }
    addFront(val){
        var newNode = new Node(val);
        if(this.head == null){
            this.head = newNode;
            return this;
        }
        newNode.next = this.head;
        this.head = newNode;
        return this;
    }

    length(){
        var count = 0;
        var runner = this.head;
        while(runner != null){
            count++
            runner = runner.next;
        }
        return count;
    }
    display(){
        var listValues = '';
        var runner = this.head;
        while(runner != null){
            listValues += runner.value.toString();
        }
        return list;
    }
}

var myList = new SLList();
console.log(myList);
myList.addFront(5);
console.log(myList);
console.log(myList.length);