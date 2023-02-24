// Guess a Random Number


/**
 * 
 * 
 * In this example, you will learn to write a JavaScript program where the user has to guess a number generated by a program.

To understand this example, you should have the knowledge of the following JavaScript programming topics:

JavaScript Function and Function Expressions
JavaScript Math random()
JavaScript while and do...while Loop
Example: Program to Guess a Number




// program where the user has to guess a number generated by a program

function guessNumber() {

    // generating a random integer from 1 to 10
    const random = Math.floor(Math.random() * 10) + 1;

    // take input from the user
    let number = parseInt(prompt('Guess a number from 1 to 10: '));

    // take the input until the guess is correct
    while(number !== random) {
        number = parseInt(prompt('Guess a number from 1 to 10: '));
    }

    // check if the guess is correct
    if(number == random) {
        console.log('You guessed the correct number.');
    }

  }

// call the function
guessNumber();




Note: You will get different output values each time you run the program because each time a different number is generated.

In the above program, the guessNumber() function is created where a random number from 1 to 10 is generated using Math.random() function.

To learn more about how to generate a random number, visit JavaScript Generate Random Number.

The user is prompted to guess a number from 1 to 10.
The parseInt() converts the numeric string value to an integer value.
The while loop is used to take input from the user until the user guesses the correct answer.
The if...else statement is used to check the condition. The equal to == operator is used to check if the guess was correct.
if(number == random)
To learn more about the comparison operators, visit JavaScript Comparison Operator.


 */