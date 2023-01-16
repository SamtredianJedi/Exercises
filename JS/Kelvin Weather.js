const Kelvin = 293;
// Creating and setting the variable Kelvin to 293 

const celsius = Kelvin - 273;

// we have converted kelvin to celsius by substracting 273 from the kelvin variable 

let fahrenheit = celsius * (9 / 5) + 32;

// we have calculated fahrenheit 
fahrenheit = Math.floor(fahrenheit);

// using console log to display result with a string interplation

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);