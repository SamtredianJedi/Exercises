const fruits = ['apple', 'banana', 'grape', 'grape', 'Mango',
    'strawwberry', 'apple'
];

// converts the array to a string 
fruits.toString();

// adds element at the and of the array
fruits.push('ananas');

// removes the last element of the array
fruits.pop();

// checks if the array comtains an element
fruits.includes('banana'); // true

// returns the index of the element
fruits.indexOf('Mango'); // 4

// join the elements of the array with the given separator
fruits.join('+');

// return a portion of the array 
fruits.slice(1, 3);

// add elements to the array
fruits.splice(1, 0, 'Orange');