const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }
  isEmpty() {
    return this.rootNode === null;
  }

  add(value) {
    let newNode = new Node(value);
    if (this.isEmpty()) {
      this.rootNode = newNode;
    } else {
      this.insertNewNode(this.rootNode, newNode);
    }      
  }
  
  insertNewNode(root, newTreeNode) {
    if(newTreeNode.data < root.data) {
      if(root.left === null) {
        root.left = newTreeNode;
      } else {
        this.insertNewNode(root.left, newTreeNode);
      } 
    } else {
      if(root.right === null) {
        root.right = newTreeNode;
      } else {
        this.insertNewNode(root.right, newTreeNode);
      }
    }
  }

  has(value) {
    if (!this.rootNode) return false;
    return this.hasValue(this.rootNode, value);
  }
  
  hasValue(root, value) {
    if (!root) return false;
    if (root.data === value) return true;
    if (root.data > value) {
      return this.hasValue(root.left, value);
    } else {
      return this.hasValue(root.right, value);
    }
  }
  
  find(value) {
    if (!this.rootNode) return null;
    return this.findValue(this.rootNode, value);
  }
  
  findValue(root, value) {
    if (!root) return null;
    if (root.data === value) return root;
    if (root.data > value) {
      return this.findValue(root.left, value);
    } else {
      return this.findValue(root.right, value);
    }
  }

  postOrder(rootNode) {
    if (rootNode) {
      this.postOrder(rootNode.left);
      this.postOrder(rootNode.right);
      console.log(rootNode.data);
    }
  }

  min() {
    if (!this.rootNode) return null;
    return this.findMin(this.rootNode)
  }

  findMin(root) {
    if (!root.left) {
      return root.data
    } else {
      return this.findMin(root.left)
    }
  }
  
  max() {
    if (!this.rootNode) return null;
    return this.findMax(this.rootNode)
  }

  findMax(root) {
    if (!root.right) {
      return root.data
    } else {
      return this.findMax(root.right)
    }
  }

  remove(data) {
    this.rootNode = this.removeNote(this.rootNode, data)
  }

  removeNote(root, data) {
    console.log('Iteration node: ', root)

    if (root === null) return root;
    if (data < root.data) {
      root.left = this.removeNote(root.left, data)
      console.log(`Left after return for ${root.data}: `, root.left)
    } else if (data > root.data) {
      root.right = this.removeNote(root.right, data)
      console.log(`Right after return for ${root.data}: `, root.right)
    } else {
      console.log('Node equals: ', root)

      if (!root.left && !root.right) {
        console.log('no child')
        return null
      } else if (!root.right) {
        console.log('no RIGHT child')
        return root.left
      } else if (!root.left) {
        console.log('no LEFT child')
        return root.right
      } else {
        console.log('HAS LEFT & RIGHT child for NODE = ', root)
        root.data = this.findMin(root.right); 
        console.log('min = ', root.data)
        root.right = this.removeNote(root.right, root.data)
        console.log(' NEW right value', root.right)
        console.log('NEW ROOT', root)

      }
    }
    return root
  }
}

module.exports = {
  BinarySearchTree
};