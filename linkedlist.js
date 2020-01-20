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
    removeFront(){
        var removeFirst = this.head.value;
        this.head = this.head.value;
        return removeFirst;
    }
    returnVal(){
        var current = this.head;
        while(current != null){
            console.log(current.value);
            current = current.next;
        }
    }
    contains(val) {
        var count = 0;
        if (this.head == null) {
            return console.log("This node is empty");
        }
        if (this.head === val) {
            return console.log("The head node contains: " + val);
        }
        var runner = this.head;
        while (runner !== null) {
            if (runner.value === val) {
                count++;
                return console.log("The " + count + " Node contains: " + val);
            }
            count++;
            runner = runner.next;
        }
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
        var displayValues = '';
        var runner = this.head;
        while(runner != null){
            displayValues += runner.value.toString();
        }
        return displayValues;
    }
    sllistMax(){
        var node = this.head;
        var max = node.value;
        while (node != null){
            if(node.value > max){
                max = node.value;
            }
            node = node.next;
        }
        return max;
    }
    sllistMin(){
        var node = this.head;
        var min = node.value;
        while (node != null){
            if(node.value < min){
                min = node.value;
            }
            node = node.next;
        }
        return min;
    }
    sllistAvg(){
        var node = this.head;
        var count = 0;
        var sum = 0;
        while (node != null){
            count += 1;
            sum += node.value;
            node = node.next;
        }
        var avg = sum/count;
        return avg;
    }
    returnLast(){
        var current = this.head;
        while(current.next != null){
            current = current.next;
        }
        return current;
    }
    removeBack(){
        if(this.head == null){
            return null;
        }
        if(this.head.next == null){
            this.head = null;
            return;
        }
        var previous = this.head;
        var end = this.head.next;

        while(end.next !== null){
            previous = end;
            end = end.next;
        }
        previous.next = null;
        return this;
    }
    addBack(val){
        var newNode = new Node(val);
        var current = this.head;

        if(this.head == null){
            console.log(current.value);
            current = current.next;
        }
        current.next = newNode;
        return this;
    }
}

var myList = new SLList();
