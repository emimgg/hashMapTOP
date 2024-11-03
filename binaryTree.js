class Node {
    constructor(data, left = null, right = null) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

export default class Tree {
    constructor() {
        this.root = null;
    }

    buildBSTRecursive(array, start, end) {
        if (start > end) return null;
    
        let mid = Math.floor((start + end) / 2);
        let root = new Node (array[mid]);
    
        root.left = this.buildBSTRecursive(array, start, mid - 1);
        root.right = this.buildBSTRecursive(array, mid + 1, end);
    
        return root;
    }
    
    buildBST(array) {
        return this.buildBSTRecursive(array, 0, array.length - 1);
    }

    insert(value) {
        let current = this.root;

        let newNode = new Node(value);
        if (!current) this.root = newNode;
        let parent = null;

        while(current) {
            parent = current;
            if (current.data > newNode.data) {
                current = current.left
            } else if (current.data < newNode.data) {
                current = current.right;
            } else {
                return;
            }
        }

        if (value < parent.data) {
            parent.left = newNode;
        } else {
            parent.right = newNode;
        }
    }

    delete(value) {
        this.root = this._deleteValue(this.root, value) 
    }

    _deleteValue(current, value) {
        if (!current) {
            return null;
        }

        if (current.data > value) {
            current.left = this._deleteValue(current.left, value);
        } else if (current.data < value) {
            current.right = this._deleteValue(current.right, value);
        } else {

            if (!current.left) {
                return current.right;
            } else if (!current.right) {
                return current.left;
            }

            let successor = this._findMin(current.right);
            current.data = successor.data;
            current.right = this._deleteValue(current.right, successor.data);
        }

        return current;
    }

    _findMin(node) {
        while (node.left) {
            node = node.left;
        }
        return node;
    }

    find(value, current = this.root) {
        
        if (!current) {
            return null;
        }

        if (value < current.data) {
            return this.find(value, current.left);
        } else if (value > current.data) {
            return this.find(value, current.right);
        } else {
            return current
        }

    }

    BFS(callback) {

        if (typeof callback !== 'function') {
            throw new Error("A callback is required");
        }

        let currentNode = this.root;
        let queue = [];
        let results = [];
        queue.push(currentNode);

        while (queue.length) {
            currentNode = queue.shift();
            callback(currentNode.data);
            results.push(currentNode.data);
            if (currentNode.left) queue.push(currentNode.left);
            if (currentNode.right) queue.push(currentNode.right);
        }

    }

    DFSPre(callback) {
        if (typeof callback !== 'function') {
            throw new Error("A callback function is required");
        }

        let results = [];
        let currentNode = this.root;
        function traverse(currentNode) {
            callback(currentNode.data)
            results.push(currentNode.data);
            if (currentNode.left) traverse(currentNode.left);
            if (currentNode.right) traverse(currentNode.right);
        }
        traverse(currentNode);
        return callback(results);
    
    }

    DFSPost(callback) {
        if (typeof callback !== 'function') {
            throw new Error("A callback function is required");
        }

        let results = [];
        let currentNode = this.root;
        function traverse(currentNode) {
            if (currentNode.left) traverse(currentNode.left);
            if (currentNode.right) traverse(currentNode.right);
            callback(currentNode.data)
            results.push(currentNode.data);
        }
        traverse(currentNode);
        return callback(results);
    }

    DFSIn() {
        // if (typeof callback !== 'function') {
        //     throw new Error("A callback function is required");
        // }

        let results = [];
        let currentNode = this.root;
        function traverse(currentNode) {
            if (currentNode.left) traverse(currentNode.left);
            // callback(currentNode.data)
            results.push(currentNode.data);
            if (currentNode.right) traverse(currentNode.right);
        }
        traverse(currentNode);
        return results;
    }

    height(node) {
        if (node === null) return 0;
        let leftCount = 0;
        let rightCount = 0;

        traverse(this.find(node), 1);

        return Math.max(leftCount, rightCount)

        function traverse(node, depth) {
            if (node.left) {
                leftCount = Math.max(leftCount, depth)
                traverse(node.left, depth + 1);
            } 
            if (node.right) {
                rightCount = Math.max(rightCount, depth);
                traverse(node.right, depth + 1);
            }
        }
    }

    depth(lookup) {
        if (lookup === null) return 0;

        function traverse(current, depth = 0) {
            if (current.data === lookup) return depth;

            if (lookup < current.data && current.left !== null) {
                return traverse(current.left, depth + 1);
            } else if (lookup > current.data && current.right !== null) {
                return traverse(current.right, depth + 1);
            }

            return -1;
        }

        return traverse(this.root)
    }

    isBalanced() {

        function getHeight(node, height = 0) {
            
            if (!node) return 0;

            let leftHeight = getHeight(node.left);
            let rightHeight = getHeight(node.right);

            if (leftHeight === -1 || rightHeight === -1 || Math.abs(leftHeight - rightHeight) > 1) {
                return -1;
            }

            return Math.max(leftHeight, rightHeight) + 1;
        }

        return (getHeight(this.root) !== -1);
    }

    rebalance() {

        if (this.isBalanced()) {
            return console.log("Tree already balanced!");
        } 
        
        const sorted = this.DFSIn();
        const newTree = this.buildBST(sorted);
        
        this.root = newTree;

    }


    prettyPrint = (node, prefix = "", isLeft = true) => {
        if (node === null) {
          return;
        }
        if (node.right !== null) {
          this.prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
        }
        console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
        if (node.left !== null) {
          this.prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
        }
      };
}

