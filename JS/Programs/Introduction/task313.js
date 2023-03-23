// JavaScript: Iterates the integers from 1 to 100

/**
 * 
 * 
 * 
 * 
 JavaScript Conditional Statement and loops: Exercise-7 with Solution
Write a JavaScript program which iterates the integers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz".



Sample Solution:-

HTML Code:

<!DOCTYPE html>
<html>
<head>
<meta charset=utf-8 />
<title>JavaScript FizzBuzz program</title>
</head>
<body>
  
</body>
</html>








JavaScript Code:

for ( var i = 1; i <= 100; i++ )
{
  if ( i%3 === 0 && i%5 === 0 )
  {
    console.log( i + " FizzBuzz" );
  }
  else if ( i%3 === 0 ) 
  {
    console.log(i+ " Fizz" );
  }
  else if ( i%5 === 0 ) 
  {
    console.log(i+ " Buzz" );
  }
  else
  {
    console.log(i);
  }
}



 */