// JavaScript: Convert temperatures to and from celsius, fahrenheit




/**
 * 
 * 
 * JavaScript Basic: Exercise-11 with Solution
Write a JavaScript program to convert temperatures to and from celsius, fahrenheit.

JavaScript: Fahrenheit and Centigrade Temperatures:

Fahrenheit and centigrade are two temperature scales in use today. The Fahrenheit scale was developed by the German physicist Daniel Gabriel Fahrenheit . In the Fahrenheit scale, water freezes at 32 degrees and boils at 212 degrees.

The centigrade scale, which is also called the Celsius scale, was developed by Swedish astronomer Andres Celsius. In the centigrade scale, water freezes at 0 degrees and boils at 100 degrees. The centigrade to Fahrenheit conversion formula is:

C = (5/9) * (F - 32)
where F is the Fahrenheit temperature. You can also use this Web page to convert Fahrenheit temperatures to centigrade. Just enter a Fahrenheit temperature in the text box below, then click on the Convert button.



Sample Solution:

HTML Code:



<!DOCTYPE html>
  <html>
  <head>
  <meta charset="utf-8">
  <title>Write a JavaScript program to convert temperatures to and from celsius, fahrenheit</title>
  </head>
  <body>
</body>
  </html>
  



  JavaScript Code:

function cToF(celsius) 
{
  var cTemp = celsius;
  var cToFahr = cTemp * 9 / 5 + 32;
  var message = cTemp+'\xB0C is ' + cToFahr + ' \xB0F.';
    console.log(message);
}

function fToC(fahrenheit) 
{
  var fTemp = fahrenheit;
  var fToCel = (fTemp - 32) * 5 / 9;
  var message = fTemp+'\xB0F is ' + fToCel + '\xB0C.';
    console.log(message);
} 
cToF(60);
fToC(45);




Explanation:

For an exact conversion (Fahrenheit to Celsius / Celsius to Fahrenheit) the following formulas can be applied :

Fahrenheit to Celsius : (°F − 32) ÷ 1.8 = °C
Celsius to Fahrenheit : (°C × 1.8) + 32 = °F

An approximate conversion between degrees Celsius and degrees Fahrenheit is as follows :

Fahrenheit to Celsius : Subtract 30 and halve the resulting number.
Celsius to Fahrenheit : Double the number and add 30.




ES6 Version:

function cToF(celsius) 
{
  const cTemp = celsius;
  const cToFahr = cTemp * 9 / 5 + 32;
  const message = `${cTemp}\xB0C is ${cToFahr} \xB0F.`;
    console.log(message);
}

function fToC(fahrenheit) 
{
  const fTemp = fahrenheit;
  const fToCel = (fTemp - 32) * 5 / 9;
  const message = `${fTemp}\xB0F is ${fToCel}\xB0C.`;
    console.log(message);
} 
cToF(60);
fToC(45);




Live Demo:




function cToF(celsius) 
{
  var cTemp = celsius;
  var cToFahr = cTemp * 9 / 5 + 32;
  var message = cTemp+'\xB0C is ' + cToFahr + ' \xB0F.';
    console.log(message);
}

function fToC(fahrenheit) 
{
  var fTemp = fahrenheit;
  var fToCel = (fTemp - 32) * 5 / 9;
  var message = fTemp+'\xB0F is ' + fToCel + '\xB0C.';
    console.log(message);
} 
cToF(60);
fToC(45);


 */