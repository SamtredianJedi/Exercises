// Perform Intersection Between Two Arrays






/**
 * 
 * 
 * 
 * In this example, you will learn to write a JavaScript program that will perform an intersection between two arrays.

To understand this example, you should have the knowledge of the following JavaScript programming topics:

Javascript Array filter()
JavaScript Array push()
JavaScript Set and WeakSet
Example 1: Perform Intersection Using Set
// program to perform intersection between two arrays using Set
// intersection contains the elements of array1 that are also in array2

function performIntersection(arr1, arr2) {

    // converting into Set
    const setA = new Set(arr1);
    const setB = new Set(arr2);

    let intersectionResult = [];

    for (let i of setB) {
    
        if (setA.has(i)) {
            intersectionResult.push(i);
        }
        
    }
    
    return intersectionResult;

}

const array1 = [1, 2, 3, 5, 9];
const array2 = [1, 3, 5, 8];

const result = performIntersection(array1, array2);
console.log(result);




In the above program, an intersection is performed between array1 and array2.

The array elements are converted into Set elements using the new Set() constructor.
The for...of loop is used to iterate over the second Set elements.
The has() method is used to check if the element is in the first Set.
If the element is present in the first Set, that element is added to the intersectionResult array using the push() method.
Example 2: Perform Intersection Using filter() Method
// program to perform intersection between two arrays

function performIntersection(arr1, arr2) {

    const intersectionResult = arr1.filter(x => arr2.indexOf(x) !== -1);
 
    return intersectionResult;

}

const array1 = [1, 2, 3, 5, 9];
const array2 = [1, 3, 5, 8];

const result = performIntersection(array1, array2);
console.log(result);




In the above program, an intersection is performed between two arrays using the filter() method. The filter method iterates over an array and returns the array elements that pass the given condition.

Each element of the first array is compared with the second array using the indexOf() method.
The arr2.indexOf(x) method searches arr2 and returns the position of the first occurrence of arr1. If the value cannot be found, it returns -1.
All the elements that are in both arrays are returned by the filter() method.
Note: You could also use the includes() method to check if the array elements are in both arrays.

const intersectionResult = arr1.filter(x => arr2.includes(x))


 */