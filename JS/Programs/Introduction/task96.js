// Implement a Queue



/**
 * 
 * 
 * In this example, you will learn to write a JavaScript program that will implement a queue.

To understand this example, you should have the knowledge of the following JavaScript programming topics:

JavaScript Array push()
JavaScript Array shift()
JavaScript Methods and this Keyword
A queue is a data structure that follows First In First Out (FIFO) principle. The element that is added first is accessed at first. This is like being in a queue to get a movie ticket. The first one gets the ticket first.

Example: Implement Queue




// program to implement queue data structure

class Queue {
    constructor() {
        this.items = [];
    }
    
    // add element to the queue
    enqueue(element) {
        return this.items.push(element);
    }
    
    // remove element from the queue
    dequeue() {
        if(this.items.length > 0) {
            return this.items.shift();
        }
    }
    
    // view the last element
    peek() {
        return this.items[this.items.length - 1];
    }
    
    // check if the queue is empty
    isEmpty(){
       return this.items.length == 0;
    }
   
    // the size of the queue
    size(){
        return this.items.length;
    }
 
    // empty the queue
    clear(){
        this.items = [];
    }
}

let queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(4);
queue.enqueue(8);
console.log(queue.items);

queue.dequeue();
console.log(queue.items);

console.log(queue.peek());

console.log(queue.isEmpty());

console.log(queue.size());

queue.clear();
console.log(queue.items);




In the above program, the Queue class is created to implement the queue data structure. The class includes methods like enqueue(), dequeue(), peek(), isEmpty(), size(), and clear().

A Queue object is created using a new operator and various methods are accessed through the object.

Initially, this.items is an empty array.
The push() method adds an element to this.items.
The shift() method removes the first element from this.items.
The length property gives the length of this.items.


 */