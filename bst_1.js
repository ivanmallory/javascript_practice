class BSTNode{
    constructor(val){
        this.value = val;
        this.left = null;
        this.left = null;
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null;
    }
    // BST: Add

    // Create an add(val) method on the BST object to add new value to the tree. This entails creating a BTNode with this value and connecting it at the appropriate place in the tree. Unless specified otherwise, BSTs can contain duplicate values.

    addNode(val, position = this.root){
        if(this.root == null){ //edge case - is tree empty
            this.root = new BSTNode(val);
            return;
        }
        else if(val < position.value){
            if(position.left == null){
                position.left == new BSTNode(val);
                return;
            }
            else{
                return this.addNode(val, position.left)
            }
        }
        else{
            if(position.right == null){
                position.right = new BSTNode(val);
                return;
            }
            else{
                return this.addNode(val, position.right);
            }
        }
    }
    // BST: Contains

    // Create a contains(val) method on BST that returns whether the tree contains a given value. Take advantage of the BST structure to make this a much more rapid operation than SList.contains() would be.

    contains(val, position = this.root){
        var given_val = false;
        if(position != null){
            if(position.val == val){
                given_val = true;
            }
            else if(position.val < val){
                given_val = this.contains(val, position.right);
            }
            else if(position.val > val){
                given_val = this.contains(val, position.left);
            }
        }
        return given_val;
    }
    
    // BST: Min

    // Create a min() method on the BST class that returns the smallest value found in the BST.

    min(position = this.root){
        if(this.root == null){
            return null;
        }
        if(position.left == null){
            return position.val;
        }
        else{
            return this.min(position.left);
        }
    }
    // BST: Max

    // Create a max() BST method that returns the largest value contained in the binary search tree.

    max(position = this.root){
        if(this.root == null){
            return null;
        }
        if(position.right == null){
            return position.value;
        }
        else{
            return this.max(position.right);
        }
    }
    // BST: Size

    // Write a size() method that returns the number of nodes (values) contained in the tree.

    size(position = this.root){
        if(position == null){
            return 0;
        }
        return 1 + this.size(position.left) + this.size(position.right);
    }   //return 1 plus left child plus right child
    
    // BST: Is Empty
    
    // Create an isEmpty() method to return whether the BST is empty (whether it contains no values).
    
    isEmpty(){
        if(this.root == null){
            return true;
        }
        return false;
    }
}

var tree = new BinarySearchTree();
tree.addNode(25);
tree.addNode(17);
tree.addNode(42);
tree.addNode(20);
console.log(tree.size());
console.log(tree.contains(10), tree.contains(20))