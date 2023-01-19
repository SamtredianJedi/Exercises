/* 
The JavaScript for loop iterates the elements for the fixed number of times. It should be used if number of iteration is known. The syntax of for loop is given below.

for (initialization; condition; increment)  
{  
    code to be executed  
}  
*/

for (i = 1; i <= 5; i++) {
    document.write(i + "<br/>")
}

//////////////////////


/*
The JavaScript while loop iterates the elements for the infinite number of times. It should be used if number of iteration is not known. The syntax of while loop is given below.

*/

var i = 11;
while (i <= 15) {
    document.write(i + "<br/>");
    i++;
}

//////////////////////////

// JavaScript do while loop
// The JavaScript do while loop iterates the elements for the infinite number of times like while loop. But, code is executed at least once whether condition is true or false. The syntax of do while loop is given below.


var i = 21;
do {
    document.write(i + "<br/>");
    i++;
} while (i <= 25);