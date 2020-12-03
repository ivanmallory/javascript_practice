class Node{
    constructor(val){
        this.value = val;
        this.next = null;
    };
    removeSelf(list){
        var runner = list.head;
        while (runner.next != this){
            runner = runner.next
        };
        runner.next = runner.next.next;
    }
};
class SLList{
    constructor(){
        this.head = null;
    }
    //SList: Second to Last Value

    //Create a standalone function that, given a pointer to the first node in a singly linked list, will return the second-to-last value in that list. What will you return if the list is not long enough?   
    secondToLast(){
        var runner = this.head;
        if (runner == null || runner.next == null){
            return null
        }
        while (runner.next.next != null){
            runner = runner.next
        }
        return runner.value;
    }
    //SList: Copy

    //Given a pointer to a singly linked list, return a copy of that list. Do not return the same list, but instead make a copy of each node in the list and connect them in the same order as the original.
    copy(){
        newList = new SLList();
        var runner = this.head;
        while (runner != null){
            newList.addBack(runner.value);
            runner = runner.next
        };
        return newList;
    }
    // SList: Filter
    
    // Given a headNode, a lowVal and a highVal, remove from the list any nodes that have values less than lowVal or higher than highVal. Return the new list.
    filter(lowVal, highVal){
        var runner = this.head;
        while(runner != null && (runner.value < lowVal || runner.value > highVal)){
            runner = runner.next;
            this.head = runner; 
        };
        while(runner != null){
            while(runner.next != null && (runner.next.value < lowVal || runner.next.value > highVal)){
                runner.next = runner.next.next
            };
            runner = runner.next
        };
        return this
    }
}