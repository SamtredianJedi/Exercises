// Create Countdown Timer


/**
 * 
 * 
 * 
 * In this example, you will learn to write a JavScript program that will create a countdown timer.

To understand this example, you should have the knowledge of the following JavaScript programming topics:

JavaScript Math floor()
JavaScript Date and Time
Javascript setInterval()
Example: Create a Countdown Timer




// program to create a countdown timer

// time to countdown from (in milliseconds)
let countDownDate = new Date().getTime() + 24 * 60 * 60 * 1000;

// countdown timer
let x = setInterval(function() {

    // get today's date and time in milliseconds
    let now = new Date().getTime();

    // find the interval between now and the countdown time
    let timeLeft = countDownDate - now;

    // time calculations for days, hours, minutes and seconds
    const days = Math.floor( timeLeft/(1000*60*60*24) );
    const hours = Math.floor( (timeLeft/(1000*60*60)) % 24 );
    const minutes = Math.floor( (timeLeft/1000/60) % 60 );
    const seconds = Math.floor( (timeLeft/1000) % 60 );

    // display the result in the element with id="demo"
    console.log(days + "d " + hours + "h " + minutes + "m " + seconds + "s ");

    // clearing countdown when complete
    if (timeLeft < 0) {
        clearInterval(x);
        console.log('CountDown Finished');
    }
    }, 2000);


    In the above program, the setInterval() method is used to create a timer.

The setInterval() method is executed at a given interval time (here, 2000 milliseconds).

The new Date() gives the current date and time. For example,

let d1 = new Date();
console.log(time); // Fri Aug 28 2020 09:19:40 GMT+0545 (+0545)
The getTime() method returns the number of milliseconds from midnight of January 1, 1970 (EcmaScript epoch) to the specified date (here, current date).

The following code gives the next day's time in milliseconds.

new Date().getTime() + 24 * 60 * 60 * 1000;
Now, we can calculate time left using the following formula:

let timeLeft = countDownDate - now;
The remaining number of day is calculated using:

The time interval is divided by 1000 to determine the number of seconds, i.e. timeLeft / 1000
The time interval then is divided by 60 * 60 * 24 to determine the number of days remaining.
The Math.floor() function is used to round the number to a whole number.
Similar methods are used for hours, minutes, and seconds.

Note: You can also use a custom starting countdown time by passing a specific date.

For example,

let countDownDate = new Date("Aug 5, 2025 14:22:36").getTime();


 */