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
       
	return this.myContains(this.root, data);
	}
    
    myContains(node,data)
    {
        if(node == null)
        {
            return false;
        }      
        if( node.data == data) {
        return true;
        }
        if(data < node.data)
        {
            return this.myContains(node.left, data);           
          }
        else{
            return this.myContains(node.right, data);
        }      
    }

	remove(data) {
       this.root =  this.myRemove(this.root, data);   

	}
    
    myRemove (node, data)
    {
        if(node == null) {
            return node;
        }        
        if( data < node.data) {
            node.left = this.myRemove(node.left, data);
        }
        else if(data > node.data) {
            node.right = this.myRemove(node.right, data);
        }            
        else if (node.left != null && node.right != null) {
            node.data = this.SearchMin(node.right).data;
            node.right = this.myRemove(node.right, node.right.data)
            }
            else {
                if( node.left != null) 
                node = node.left;
                else node = node.right;
                }
          return node;    
    }
      
   
	size() {
        }
        
    

	isEmpty() {
       

	}
}
