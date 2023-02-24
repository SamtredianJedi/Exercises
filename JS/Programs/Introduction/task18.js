// Find Armstrong Number in an Interval







/**
 * 
 * 
 * In this example, you will learn to write a program in JavaScript to find an Armstrong number between two integer values.

To understand this example, you should have the knowledge of the following JavaScript programming topics:

JavaScript for loop
A positive integer is called an Armstrong number (of order n) if:

abcd... = an + bn + cn + dn + ...
In the case of an Armstrong number of 3 digits, the sum of cubes of each digit is equal to the number itself. For example, 153 is an Armstrong number because:

153 = 1*1*1 + 5*5*5 + 3*3*3
Similarly, 1634 is an Armstrong number because:

1634 = 1*1*1*1 + 6*6*6*6* + 3*3*3*3 + 4*4*4*4
Before trying this program, visit JavaScript Program to Check Armstrong Number.

Example: Armstrong Numbers Between Two Intervals




// program to find Armstrong number between intervals

// take an input
const lowNumber = parseInt(prompt('Enter a positive low integer value: '));
const highNumber = parseInt(prompt('Enter a positive high integer value: '));

console.log ('Armstrong Numbers:');

// looping through lowNumber to highNumber
for (let i = lowNumber; i <= highNumber; i++) {

    // converting number to string 
    let numberOfDigits = i.toString().length;

    let sum = 0;

    // create a temporary variable
    let temp = i;

    /* loop through a number to find if 
    a number is an Armstrong number 


    while (temp > 0) {

        let remainder = temp % 10;
        sum += remainder ** numberOfDigits;
        // removing last digit from the number
        temp = parseInt(temp / 10); // convert float into integer
    }
 
    if (sum == i) {
        console.log(i);
    }
}




In the above program, the user is prompted to enter two integers. One is the lower interval integer and another is the higher integer value.

The parseInt() converts the numeric string value to an integer value.

The for loop is used to loop through the two numbers provided by the user.

The toString() method is used to convert the number to a string. And the length property is used to find the length of a string. Hence, in this case, length gives the total digits in the number.

let numberOfDigits = i.toString().length;
In the first for loop iteration (i = 8),

The lower number entered by the user is stored in a temporary variable temp.
A while loop is used to iterate the number.
The modulus operator % is used to obtain each digit number. When a number is divided by 10, the remainder is the last digit. In the first iteration, 8 % 10 gives 8.
The remainder is multiplied by the number of digits in that number (here 1) and the sum is calculated.
The digit is divided by 10 to remove the last digit, i.e. 8 / 10 gives 0.
Finally, the sum is compared with the number entered by the user. If the sum and the number are equal, the Armstrong number is displayed.
The loop continues for all the numbers that are in between the lower and upper bounds provided by the user. In the above example, the loop is executed from 8 to 500.


 */