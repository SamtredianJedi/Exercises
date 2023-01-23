const person = {
    name: 'rezo',
    age: 21,
    gender: 'male',
};

const jobObject = {
    job: 'developer',
    salary: 1000,
};

// get all object keys 
Object.keys(person); // ['name', 'age', 'gender']

// get all object values
Object.values(person); //  ['name', '30', 'male']

// get all object entries
Object.entries(person);

// assign object to another object 
Object.assign(person, jobObject);