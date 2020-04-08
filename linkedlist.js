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
    // Add Front

    // Rudy isn’t nice: he cuts in line in front of everyone else. Given a pointer to the first ListNode and a value, create a new node, assign it to the list head, and return a pointer to the new head node.
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
    // Remove Front

    // Ha! Rudy is getting what he deserves – kicked out of line. Given a pointer to the first node in a list, remove the head node and return the new list head node. If the list is empty, return null.
    removeFront(){
        var removeFirst = this.head.value;
        this.head = this.head.value;
        return removeFirst;
    }
    // Front

    // Finally, Tad and Sam reach the front of the line to get movie tickets. Oh no – only one seat remains! Who was earlier in line: Tad or Sam? Return the value (not the node) at the head of the list. If the list is empty, return null.
    returnVal(){
        var current = this.head;
        while(current != null){
            console.log(current.value);
            current = current.next;
        }
        return current;
    }
    // Contains

    // Sam thinks Tad might be somewhere in a very long line waiting to attend the Superman movie. Given a ListNode pointer and a val, return whether val is found in any node in the list.
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
    //Length

    //July 20, 2013: about 5000 people wait in line for a chance to audition for American Idol. Create a function that accepts a pointer to the first list node, and returns number of nodes in that SList.
    length(){
        var count = 0;
        var runner = this.head;
        while(runner != null){
            count++
            runner = runner.next;
        }
        return count;
    }
    // Display

    // Create display(node) for debugging that returns a string containing all list values. Build what you wish console.log(myList) did!
    display(){
        var displayValues = '';
        var runner = this.head;
        while(runner != null){
            displayValues += runner.value.toString();
        }
        return displayValues;
    }
    // SList: Max

    // American Idol seems to air singers that are the best, and a few that seem like the worst! Create function max(node) to return list’s largest val.
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
    //SList: Min

    //Create min(node) to return list’s smallest val.
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
    // SList: Average

    // Create average(node) to return average val.
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
    // SList: Back

    // Create a function that accepts a ListNode pointer and returns the last value in the list.
    returnLast(){
        var current = this.head;
        while(current.next != null){
            current = current.next;
        }
        return current;
    }
    // SList: Remove Back

    // Create a standalone function that removes the last ListNode in the list and returns the new list.
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
    //SList: Add Back

    //Create a function that creates a ListNode with given value and inserts it at end of a linked list.
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