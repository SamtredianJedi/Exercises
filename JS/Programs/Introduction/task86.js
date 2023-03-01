// Illustrate Different Set Operations




/**
 * 
 * 
 * 
 * 
 * In this example, you will learn to write a JavaScript program that will illustrate different set operations.

To understand this example, you should have the knowledge of the following JavaScript programming topics:

JavaScript Set and WeakSet
JavaScript for... of Loop
JavaScript Function and Function Expressions
Example 1: Set Union Operation
// perform union operation
// contain elements of both sets
function union(a, b) {
    let unionSet = new Set(a);
    for (let i of b) {
        unionSet.add(i);
    }
    return unionSet
}

// two sets of fruits
const setA = new Set(['apple', 'mango', 'orange']);
const setB = new Set(['grapes', 'apple', 'banana']);

const result = union(setA, setB);

console.log(result);




The set union operation combines elements of both sets into one.

A new set unionSet is created using new Set(). The unionSet variable contains all the values of setA. Then, the for...of loop is used to iterate through all the elements of setB and add them to unionSet using the add() method.

The set does not contain duplicate values. Hence, if the set contains the same value, the latter value is discarded.

Example 2: Set Intersection Operation
// perform intersection operation
// elements of set a that are also in set b
function intersection(setA, setB) {
    let intersectionSet = new Set();

    for (let i of setB) {
        if (setA.has(i)) {
            intersectionSet.add(i);
        }
    }
    return intersectionSet;
}

// two sets of fruits
const setA = new Set(['apple', 'mango', 'orange']);
const setB = new Set(['grapes', 'apple', 'banana']);

const result = intersection(setA, setB);

console.log(result);





The set intersection operation represents elements that are present in both setA and setB.

A new set intersectionSet is created using new Set(). Then, the for...of loop is used to iterate through the setB. For every element that is present in both setA and setB, they are added to the intersection set.

Example 3: Set Difference Operation
// perform difference operation
// elements of set a that are not in set b
function difference(setA, setB) {
    let differenceSet = new Set(setA)
    for (let i of setB) {
        differenceSet.delete(i)
    }
    return differenceSet
}

// two sets of fruits
const setA = new Set(['apple', 'mango', 'orange']);
const setB = new Set(['grapes', 'apple', 'banana']);

const result = difference(setA, setB);

console.log(result);




The set difference operation represents elements that are present in one set and not in another set.

The differenceSet contains all the elements of setA. Then, the for...of loop is used to iterate through all the elements of setB. If the element that is present in setB is also available in setA, that element is deleted using delete() method.

Example 4: Set Subset Operation
// perform subset operation
// true if all elements of set b is in set a
function subset(setA, setB) {
    for (let i of setB) {
        if (!setA.has(i)) {
            return false
        }
    }
    return true
}

// two sets of fruits
const setA = new Set(['apple', 'mango', 'orange']);
const setB = new Set(['apple', 'orange']);

const result = subset(setA, setB);

console.log(result);




The set subset operation returns true if all the elements of setB are in setA.

The for...of loop is used to loop through the elements of setB. If any element that is present is setB is not present in setA, false is returned.


 */