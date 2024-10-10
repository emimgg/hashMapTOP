import { LinkedList, Node } from "./linkedList.js";
import HashMap from "./hashMap.js";

const test = new HashMap();

test.set('apple', 'red')
test.set('apple', 'green')
test.set('banana', 'yellow')
test.set('carrot', 'orange')
test.set('carrot', 'yummy')
test.set('dog', 'brown')
test.set('elephant', 'gray')
test.set('frog', 'green')
test.set('grape', 'purple')
test.set('hat', 'black')
test.set('ice cream', 'white')
test.set('jacket', 'blue')
test.set('kite', 'pink')
test.set('lion', 'golden')
test.set('moon', 'silver')


console.log(test);

console.log(test.entries());
console.log("keys:")
console.log(test.keys()) 
console.log("values:")
console.log(test.values()) 
test.length();
test.get("tiger");
test.has("ice cream");
test.has("cum balloon")

test.set('cat', 'meow');
test.set('dog', 'woof');
test.set('fish', 'blub');
test.set('cow', 'moo');
test.set('sheep', 'baa');
test.set('chicken', 'cluck');
test.set('horse', 'neigh');
test.set('duck', 'quack');
test.set('pig', 'oink');
test.set('frog', 'ribbit');
test.set('bear', 'growl');
test.set('elephant', 'trumpet');
test.set('lion', 'roar');
test.set('tiger', 'growl');
test.set('wolf', 'howl');


console.log(test);
console.log(test);

console.log(test.entries());
console.log("keys:")
console.log(test.keys()) 
console.log("values:")
console.log(test.values()) 
test.length();
test.get("tiger");
test.has("ice cream");
test.has("cum balloon")

test.remove("sheep");
console.log(test.entries())