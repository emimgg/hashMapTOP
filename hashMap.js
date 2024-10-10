import { LinkedList } from "./linkedList.js";

export default class HashMap {
    constructor() {
        this.buckets = Array.from({ length: 16 }, () => []);
        this.bucketSize = 0;
        this.loadFactor = 0.75;
    }

    hash(key) {
        let hashCode = 0;
        let BUCKET_LENGTH = this.buckets.length;
      
        const PRIME_NUMBER = 31;
        for (let i = 0; i < key.length; i++) {
          hashCode = PRIME_NUMBER * hashCode + key.charCodeAt(i);
          hashCode = hashCode % BUCKET_LENGTH;
        }
     
        return hashCode;
    }

    resize() {
        let oldBuckets = this.buckets;
        this.buckets = Array.from({ length: this.buckets.length * 2 }, () => []);

        for (let bucket of oldBuckets) {
            if (bucket instanceof LinkedList) {
                // Rehash all items in the LinkedList
                let currentNode = bucket.head;
                while (currentNode) {
                    let [key, value] = currentNode.value
                    this.set(key, value);  // Reinsert into the new resized hash map
                    currentNode = currentNode.next;
                }
            } else if (bucket.length > 0) {
                // Rehash the single key-value pair
                let [key, value] = bucket;
                this.set(key, value);
            }
        }
    }

    set(key, value) {
        let hash = this.hash(key);
        
        if (this.size() / this.buckets.length > this.loadFactor) {
            this.resize();
        }
        
        if (this.buckets[hash].length === 0) {
            this.buckets[hash] = [key, value];
        } else if (this.buckets[hash] instanceof LinkedList){
            if (this.buckets[hash].contains(key)) {
                this.buckets[hash].updateValue(key, value);
            } else {
                this.buckets[hash].append([key, value]);
            }          
        }  else {
            let list = new LinkedList();
            list.append(this.buckets[hash]);
            if (list.contains(key)) {
                list.updateValue(key, value);
            } else {
                list.append([key, value]);
            }
            this.buckets[hash] = list;
        }
    }

    get(key) {
        let hash = this.hash(key);
        let bucket = this.buckets[hash];
    
        if (bucket instanceof LinkedList) {
            return bucket.findList(key);
        }
    
        if (bucket.length > 0 && bucket[0] === key) {
            return bucket[1];
        }
    
        return undefined; // Key not found
    }

    has(key) {
        let hash = this.hash(key);

        let result = (this.buckets[hash][0] == key);
        return console.log(`Does the map have the '${key}' key?: ${result}`)
    }

    remove(key) {
        let hash = this.hash(key);
        let bucket = this.buckets[hash];
    
        if (bucket instanceof LinkedList) {
            bucket.removeKey(key);
        } else if (bucket.length > 0 && bucket[0] === key) {
            this.buckets[hash] = [];
        }
    }

    length() { //miraculously, it works

        let count = 0;
        for (let bucket of this.buckets) {
            if (bucket.length > 0 || bucket instanceof LinkedList) count++;
        }
        return console.log(`Filled bucket size: ${count} / ${this.buckets.length}`);
    }

    size() { //miraculously, it works

        let count = 0;
        for (let bucket of this.buckets) {
            if (bucket.length > 0 || bucket instanceof LinkedList) count++;
        }
        return count;
    }

    clear() {
        for (let i = 0; i < this.buckets.length; i++) {
            this.buckets[i] = [];
        }
    }

    keys() {
        const keysArray = [];
    
        for (let bucket of this.buckets) {
            if (bucket) {
                if (bucket instanceof LinkedList) {
                    let current = bucket.head;
                    while (current) {
                        keysArray.push(current.value[0]);  
                        current = current.next;
                    }
                } else if (bucket.length) {
                    keysArray.push(bucket[0]);
                }
            }
        }
        return keysArray; 
    }

    values() { //works
        const valuesArray = [];
    
        for (let bucket of this.buckets) {
            if (bucket) {
                if (bucket instanceof LinkedList) {
                    let current = bucket.head;
                    while (current) {
                        valuesArray.push(current.value[1]);  
                        current = current.next;
                    }
                } else if (bucket.length) {
                    valuesArray.push(bucket[1]);
                }
            }
        }
        return valuesArray; 
    }

    entries() {
        let stringToPrint = "";

        for (let bucket of this.buckets) {
            stringToPrint += `[${bucket}] \n`
        }
        return stringToPrint;
    }

}


