/*

The JavaScript switch statement is used to execute one code from multiple expressions. It is just like else if statement that we have learned in previous page. But it is convenient than if..else..if because it can be used with numbers, characters etc.

*/

// 



var grade = 'B';
var result;
switch (grade) {
    case 'A':
        result = "A Grade";
        break;
    case 'B':
        result = "B Grade";
        break;
    case 'C':
        result = "C Grade";
        break;
    default:
        result = "No Grade";
}
document.write(result);


////////////////////////


// The switch statement is fall-through i.e. all the cases will be evaluated if you don't use break statement.


var grade = 'B';
var result;
switch (grade) {
    case 'A':
        result += " A Grade";
    case 'B':
        result += " B Grade";
    case 'C':
        result += " C Grade";
    default:
        result += " No Grade";
}
document.write(result);