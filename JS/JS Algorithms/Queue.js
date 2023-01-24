class Queue {
    constructor() {
        this.elements = {};
        this.head = 0;
        this.tail = 0;
    }
    enqueue(element) {
        this.elements[this.tail] = element;
        this.tail++;
    }
    dequeue() {
        const item = this.elements[this.head];
        delete this.elements[this.head];
        this.head++;
        return item;
    }
    peek() {
        return this.elements[this.head];
    }
    get length() {
        return this.tail - this.head;
    }
    get isEmpty() {
        return this.length === 0;
    }
}

/**
 * 
 * How it works.

First, initialize the object that stores the elements of the queue (elements) and two variables for tracking the head and tail in the constructor:

class Queue {
  constructor() {
    this.elements = {};
    this.head = 0;
    this.tail = 0;
  }
  //...
}
Code language: JavaScript (javascript)
Second, enqueue an element by adding it to the elements object to the end of the queue:

class Queue {
  //...
  enqueue(element) {
    this.elements[this.tail] = element;
    this.tail++;
  }

  //...
}
Code language: JavaScript (javascript)
Third, remove an element from the front of the queue:

class Queue {

  // ...
  dequeue() {
    const item = this.elements[this.head];
    delete this.elements[this.head];
    this.head++;
    return item;
  }

  //...
}
Code language: JavaScript (javascript)
Fourth, define the peek() method that accesses the element at the front of the queue:

class Queue {
  //...
  peek() {
    return this.elements[this.head];
  }
  //...  
}
Code language: JavaScript (javascript)
Fifth, get the length of the queue:

class Queue {
  //...
  get length() {
    return this.tail - this.head;
  }
  //...
}
Code language: JavaScript (javascript)
The queue is empty when the length is zero.

Finally, define the isEmpty() method that returns true if the queue is empty:

class Queue {
  // ...
  get isEmpty() {
    return this.tail - this.head;
  }
  // ... 
}
Code language: JavaScript (javascript)
To create a new queue from the Queue() constructor function, you use the new keyword as follows:

let q = new Queue();
Code language: JavaScript (javascript)
To enqueue numbers from 1 to 7, you use the following code.

for (let i = 1; i <= 7; i++) {
    q.enqueue(i);
}
Code language: JavaScript (javascript)
To get the number at the front of the queue, you use the peek() method.

console.log(q.peek()); // 1
Code language: JavaScript (javascript)
To get the current length of the queue, you use the length() method as in the following example.

console.log(q.length); // 7
Code language: JavaScript (javascript)
To remove the element at the front of the queue, you use the dequeue() method as follows:

// dequeue all elements
while (!q.isEmpty()) {
    console.log(q.dequeue());
}
Code language: JavaScript (javascript)
Put it all together:

class Queue {
  constructor() {
    this.elements = {};
    this.head = 0;
    this.tail = 0;
  }
  enqueue(element) {
    this.elements[this.tail] = element;
    this.tail++;
  }
  dequeue() {
    const item = this.elements[this.head];
    delete this.elements[this.head];
    this.head++;
    return item;
  }
  peek() {
    return this.elements[this.head];
  }
  get length() {
    return this.tail - this.head;
  }
  get isEmpty() {
    return this.length === 0;
  }
}

let q = new Queue();
for (let i = 1; i <= 7; i++) {
  q.enqueue(i);
}
// get the current item at the front of the queue
console.log(q.peek()); // 1

// get the current length of queue
console.log(q.length); // 7

// dequeue all elements
while (!q.isEmpty) {
  console.log(q.dequeue());
}
 */