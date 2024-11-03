import { LinkedList, Node } from "./linkedList.js";
import HashMap from "./hashMap.js";
import Tree from "./binaryTree.js";

// const tree1 = new Tree();

// const testArray = [1, 2, 4, 6, 7, 8, 9]
// tree1.root = tree1.buildBST(testArray);
// tree1.prettyPrint(tree1.root);
// console.log('Inserting 5...');
// tree1.insert(5);
// tree1.prettyPrint(tree1.root);
// console.log('Deleting 8...');
// tree1.delete(8);
// console.log('8 Deleted!');
// tree1.prettyPrint(tree1.root);
// console.log('Inserting 14...');
// tree1.insert(14);
// console.log('14 Inserted!');
// tree1.prettyPrint(tree1.root);
// tree1.insert(3);
// console.log('Inserting 3...')
// tree1.prettyPrint(tree1.root);
// console.log('Deleting 2...');
// tree1.delete(2);
// tree1.prettyPrint(tree1.root);
// console.log('2 Deleted!');
// tree1.insert(13);
// tree1.insert(12);
// tree1.insert(11);
// tree1.prettyPrint(tree1.root);
// // console.log(tree1.find(3));
// // console.log('BREADTH FIRST SEARCH')
// // tree1.BFS(console.log);
// // console.log('DEPTH FIRST SEARCH PREORDER')
// // tree1.DFSPre(console.log);
// // console.log('DEPTH FIRST SEARCH POSTORDER')
// // tree1.DFSPost(console.log);
// // console.log('DEPTH FIRST SEARCH INORDER')
// // tree1.DFSIn(console.log);
// console.log(tree1.height(5))
// console.log(tree1.depth(5))
// console.log(tree1.isBalanced());
// tree1.rebalance();
// console.log(tree1.isBalanced());
// tree1.prettyPrint(tree1.root);


function createArray() {
    let array = [];
    function pushRandom() {
        if (array.length == 50) {
            return array
        }
        pushRandom(array.push(Math.floor(Math.random() * 1000)));
    }
    pushRandom();
    return array;
}

let randomarray = createArray();
console.log(randomarray);

const randomTree = new Tree ();

randomTree.root = randomTree.buildBST(randomarray);
randomTree.prettyPrint(randomTree.root);
randomTree.isBalanced();
// randomTree.BFS(console.log);
// randomTree.DFSPre(console.log);
// randomTree.DFSPost(console.log);
randomTree.insert(1002);
randomTree.insert(4500);
randomTree.insert(3000);
randomTree.prettyPrint(randomTree.root);
console.log(randomTree.isBalanced());
randomTree.rebalance()
randomTree.prettyPrint(randomTree.root);
console.log(randomTree.isBalanced());





// const test = new HashMap();

// test.set('apple', 'red')
// test.set('apple', 'green')
// test.set('banana', 'yellow')
// test.set('carrot', 'orange')
// test.set('carrot', 'yummy')
// test.set('dog', 'brown')
// test.set('elephant', 'gray')
// test.set('frog', 'green')
// test.set('grape', 'purple')
// test.set('hat', 'black')
// test.set('ice cream', 'white')
// test.set('jacket', 'blue')
// test.set('kite', 'pink')
// test.set('lion', 'golden')
// test.set('moon', 'silver')


// console.log(test);

// console.log(test.entries());
// console.log("keys:")
// console.log(test.keys()) 
// console.log("values:")
// console.log(test.values()) 
// test.length();
// test.get("tiger");
// test.has("ice cream");
// test.has("cum balloon")

// test.set('cat', 'meow');
// test.set('dog', 'woof');
// test.set('fish', 'blub');
// test.set('cow', 'moo');
// test.set('sheep', 'baa');
// test.set('chicken', 'cluck');
// test.set('horse', 'neigh');
// test.set('duck', 'quack');
// test.set('pig', 'oink');
// test.set('frog', 'ribbit');
// test.set('bear', 'growl');
// test.set('elephant', 'trumpet');
// test.set('lion', 'roar');
// test.set('tiger', 'growl');
// test.set('wolf', 'howl');


// console.log(test);
// console.log(test);

// console.log(test.entries());
// console.log("keys:")
// console.log(test.keys()) 
// console.log("values:")
// console.log(test.values()) 
// test.length();
// test.get("tiger");
// test.has("ice cream");
// test.has("cum balloon")

// test.remove("sheep");
// console.log(test.entries())