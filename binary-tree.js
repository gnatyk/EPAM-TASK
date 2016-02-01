'use strict';


class BinaryTree {	

	constructor() {
		this.root = null;
	}

	insert(data) {   

	 this.root = this.myInsert(this.root, data);
	}
    
	myInsert(node,data) {
        if (!node){
            node = new Node(data);
            return node;
            }   

	    if(data < node.data) {
            node.left =  this.myInsert(node.left,data);            
	    	return node;
	    }
	    
	    if(data > node.data)
	    {
	    node.right = this.myInsert(node.right,data);
	    	return node;
	    }
        return node;       
	}
    

	contains(data) {
       
	} 


	remove(data) {
      

	}  
   
	size() {
        }
        
    

	isEmpty() {
       

	}
}
