// Format Numbers as Currency Strings

/**
 * 
 * 
 * In this example, you will learn to write a JavaScript program that will format numbers as currency strings.

To understand this example, you should have the knowledge of the following JavaScript programming topics:

JavaScript Number
JavaScript String
Javascript Number toLocaleString()
Example 1: Format Numbers as Currency String
// program to format numbers as currency string
const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
});

formatter.format(2500);



In the above program, we have used the Intl.NumberFormat object.

The Intl.NumberFormat object enables language-sensitive number formatting.

Example 2: Format Numbers as Currency String Using concatenation
// program to format numbers as currency string

const number = 1234.5678;

const result = '$ ' + number.toFixed(2);

console.log(result);



In the above example, the toFixed(2) method is used to round up the number to two decimal values.

'$' is added to the number to convert it into a currency string.

Example 3: Format Numbers as Currency String Using toLocaleString()
// program to format numbers as currency string

const result =  (2500).toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD'
});

console.log(result);




The toLocaleString() method returns a string with a language-sensitive representation of that number.

Example 4: Format Numbers as Currency String Using RegEx
// program to format numbers as currency string

const result = 1234.5678.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');

console.warn('$ ' + result);



In the above example, the replace() method is used with the RegEx pattern to replace the number to currency string.

The toFixed(2) method is used to round up the number to two decimal values.


 */