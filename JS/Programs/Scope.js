/* global scope */

const PIE = 3.14;

function foo() {
    console.log(PIE); // 3.14

    /* function scope */

    const age = 32;
    console.log(age); // 32

}

/* block scope */

if (true) {
    const fullName = 'Rezo Xuchua';
    console.log(fullName); // Rezo Xuchua
}

console.log(PIE) // 3.14
console.log(age) // ReferenceError:age is not defined
console.log(fullName); // ReferenceError: fullName is not defined