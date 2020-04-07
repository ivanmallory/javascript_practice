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
    copy(){
        newList = new SLList();
        var runner = this.head;
        while (runner != null){
            newList.addBack(runner.value);
            runner = runner.next
        };
        return newList;
    }
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