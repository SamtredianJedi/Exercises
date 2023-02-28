// Get File Extension




/**
 * 
 * 
 * 
 * In this example, you will learn to write a JavaScript program that will get the file extension of a given filename.

To understand this example, you should have the knowledge of the following JavaScript programming topics:

JavaScript String split()
Javascript String substring()
JavaScript String lastIndexOf()
Example 1: Using split() and pop()
// program to get the file extension

function getFileExtension(filename){

    // get file extension
    const extension = filename.split('.').pop();
    return extension;
}

// passing the filename
const result1 = getFileExtension('module.js');
console.log(result1);

const result2 = getFileExtension('module.txt');
console.log(result2);




In the above program, the extension of the filename is extracted using the split() method and the pop() method.

The filename is split into individual array elements using the split() method.
Here, filename.split('.') gives ["module", "js"] by splitting the string.
The last array element, which is the extension, is returned using the pop() method.
Example 2: Using substring() and lastIndexOf()



// program to get the file extension

function getFileExtension(filename){
    // get file extension
    const extension = filename.substring(filename.lastIndexOf('.') + 1, filename.length);
    return extension;
}

const result1 = getFileExtension('module.js');
console.log(result1);

const result2 = getFileExtension('test.txt');
console.log(result2);




In the above program, the extension of the filename is extracted using the substring() method and the lastIndexOf() method.

filename.lastIndexOf('.') + 1 returns the last position of . in the filename.
1 is added because the position count starts from 0.
The filename.length property returns the length of the string.
substring(filename.lastIndexOf('.') + 1, filename.length) method returns characters between the given indexes. For example, 'module.js'.substring(8, 10) returns js.
The OR || operator is used to return the original string if there is no . in the filename.


 */