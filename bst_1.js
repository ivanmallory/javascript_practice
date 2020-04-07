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
    size(position = this.root){
        if(position == null){
            return 0;
        }
        return 1 + this.size(position.left) + this.size(position.right);
    }   //return 1 plus left child plus right child
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