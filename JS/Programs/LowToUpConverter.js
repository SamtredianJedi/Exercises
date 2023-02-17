// Hi! At times, beginners always find it hard getting the application of the theory they learn in programming or a particular language.

// In this article, we'll see another application of JavaScript. We'll see the use/application JavaScript objects and properties/methods to build a web app that converts lowercase to uppercase letters.

// The application will get user input via a text box or text area and will output the result in the same text box.

// Seems like magic right!!!

// You may think applying the knowledge is the same as when you were getting lectures on it! But that's not true.

// The application of every concept in programming needs extra tips and knowledge to be successful.

// First of all, let's begin by revising the syntax of JavaScript string object methods...

// JavaScript string methods are used to perform specific tasks on string objects or strings (some).

// For example:

//     var x = hello.toUpperCase();
// Assigns the text hello to variable x in uppercase.

// Now, let's move to our project.

// Open a text editor and type the code below.

// Save the file with the name uppercase.html

// NB: You can still use your own desired CSS style!

// In the case of this project, we'll get the input in the text box/area using its element and then apply the JavaScript string object method to it.

// Code:

// <!DOCTYPE html>
// <html>
//     <head>
//         <link rel="stylesheet" type="text/css" href="css/reset.css" />
//         <link rel="stylesheet" type="text/css" href="css/style-index.css" />
//     </head>

//     <body>
//         <div id="wrapper">
//             <div id="top">
//                 <a href="https://go237.com"><img src="images/logo.png" alt="comic.browserling.com logo" title="Tools For All" /></a>
//             </div>
//         </div>
//         <div id="body">
//             <h1>Coders</h1>

//             <div id="text">
//                 Good coders code, great coders reuse.
//             </div>
//             <hr />

//             <script type="text/javascript">
//                 function convert() {
//                     w = document.getElementById("#1").value;
//                     var p = w.toUpperCase();
//                     document.getElementById("#1").value = p;
//                 }
//             </script>
//             <form>
//                 <center>
//                     <textarea name="text" rows="10" cols="30" placeholder="Your text here!" id="#1"></textarea>
//                     <br />
//                     <br />

//                     <img id="pic" src="1.gif" width="30%" />
//                     <br />
//                     <br />
//                     <input type="button" onclick="convert();" value="Convert!" />
//                 </center>
//             </form>
//         </div>
//     </body>
// </html>
// In this project, I used my own CSS styles. You can feel free to use any you desire.

// Open the html file and test out your web application.