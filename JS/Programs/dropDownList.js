// // /**
// //  * 
// //  * How to create dropdown list using JavaScript?
// // Before starts creating a dropdown list, it is important to know what is a dropdown list. A dropdown list is a toggleable menu that allows the user to choose one option from multiple ones. The options in this list are defined in coding, which is associated with a function. When you click or choose this option, that function triggers and starts performing.

// // You have seen a dropdown list most of the time on registration forms to select the state or city from the dropdown menu. A dropdown list allows us to choose only one from the list of items. See the below screenshot how the dropdown list looks like-

// // Important points to create a dropdown list
// // The <select> tab is used with <option> tab to create the simple dropdown list in HTML. After that JavaScript helps to perform operation with this list.
// // Other than this, you can use the container tab <div> to create the dropdown list. Add the dropdown items and links inside it. We will discuss each method with an example in this chapter.
// // You can use any element such as <button>, <a>, or <p> to open the dropdown menu.
// // See the below examples to create a dropdown list using different methods.

// // Examples
// // Simple dropdown list using <select> tab
// // It is a simple example of creating a simple and easy dropdown list without using any complicated JavaScript code and CSS stylesheet.

// // Copy Code

// // <html>  
// // <head>  
// // <title>dropdown menu using select tab</title>  
// // </head>  
// // <script>  
// // function favTutorial() {  
// // var mylist = document.getElementById("myList");  
// // document.getElementById("favourite").value = mylist.options[mylist.selectedIndex].text;  
// // }  
// // </script>  

// // <body>  
// // <form>  
// // <b> Select you favourite tutorial site using dropdown list </b>  
// // <select id = "myList" onchange = "favTutorial()" >  
// // <option> ---Choose tutorial--- </option>  
// // <option> w3schools </option>  
// // <option> Javatpoint </option>  
// // <option> tutorialspoint </option>  
// // <option> geeksforgeeks </option>  
// // </select>  
// // <p> Your selected tutorial site is:   
// // <input type = "text" id = "favourite" size = "20" </p>  
// // </form>  
// // </body>  
// // </html>  
// //  */

// // /**
// //  * 
// //  * Dropdown list using button and div tab
// // In this example, we will create a dropdown list with a button having a list of items as a dropdown menu.

// // Copy Code

// // <html>  
// // <head>  
// // <title>dropdown menu using button</title>  
// // </head>  
// // <style>  
// // /* set the position of dropdown */  
// // .dropdown {  
// //     position: relative;  
// //     display: inline-block;  
// // }  
// // /* set the size and position of button on web */  
// // .button {  
// //     padding: 10px 30px;  
// //     font-size: 15px;  
// // }  
// // /* provide css to background of list items */   
// // #list-items {  
// //    display: none;  
// //    position: absolute;  
// //    background-color: white;  
// //    min-width: 185px;  
// // }  
// // /* provide css to list items */   
// // #list-items a {  
// //     display: block;  
// //     font-size: 18px;  
// //     background-color: #ddd;  
// //     color: black;  
// //     text-decoration: none;  
// //     padding: 10px;  
// // }  
// // </style>  

// // <script>  
// //      //show and hide dropdown list item on button click  
// //      function show_hide() {  
// //         var click = document.getElementById("list-items");  
// //         if(click.style.display ==="none") {  
// //            click.style.display ="block";  
// //         } else {  
// //            click.style.display ="none";  
// //         }   
// //      }  
// //   </script>  

// // <body>  
// // <div class="dropdown">  
// //  <button onclick="show_hide()" class="button">Choose Language</button>  
// //   <center>  
// //      <!-- dropdown list items will show when we click the drop button -->   
// //      <div id="list-items">  
// //         <a href="#"> Hindi </a>  
// //         <a href="#"> English </a>  
// //         <a href="#"> Spanish </a>  
// //         <a href="#"> Chinese </a>  
// //         <a href="#"> Japanese </a>  
// //      </div>  
// //   </center>  

// // </body>  
// // </html>  


// /**
//  * 
//  * 
//  * Multiple dropdown list Example
// In the above examples, we have created a single dropdown list. We will now create a form with multiple dropdown menu of various online technical subject tutorials lists like C, C++, PHP, MySQL, and Java, categorised into several categories. When the user clicks on a particular dropdown button, their respective dropdown list will open up to you.

// <html>  
// <head>  
// <style>  
// .dropbtn {  
//   background-color: green;  
//   color: white;  
//   padding: 14px;  
//   font-size: 16px;  
//   cursor: pointer;  
// }  

// .dropbtn:hover {  
//   background-color: brown;  
// }  

// .dropdown {  
//   position: relative;  
//   display: inline-block;  
// }  

// .dropdown-content {  
//   display: none;  
//   position: absolute;  
//   background-color: white;  
//   min-width: 140px;  
//   overflow: auto;  
//   box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);  
// }  

// .dropdown-content a {  
//   color: black;  
//   padding: 12px 16px;  
//   text-decoration: none;  
//   display: block;  
// }  

// .dropdown a:hover {  
//    background-color: #ddd;  
//  }  

// .show {  
//   display: block;  
// }  
// </style>  
// </head>  
// <body>  

// <h2>List of tutorials using Dropdown menu</h2>  
// <p>Click on the button to open the tutorial dropdown menu.</p>  

// <div class="dropdown">  
//   <button onclick="programmingList()" class="dropbtn">Programming</button>  
//   <div id="myDropdown1" class="dropdown-content">  
//     <a href="#java" onclick="java()">Java</a>  
//     <a href="#python" onclick="python()">Python</a>  
//     <a href="#c++" onclick="cpp()">C++</a>  
//     <a href="#c" onclick="c()">C</a>  
//   </div>  
// </div>  

// <div class="dropdown">  
//   <button onclick="databaseList()" class="dropbtn">Database</button>  
//   <div id="myDropdown2" class="dropdown-content">  
//     <a href="#mysql" onclick="mysql()">MySQL</a>  
//     <a href="#mdb" onclick="mDB()">MongoDB</a>  
//     <a href="#cass" onclick="cassandra()">Cassandra</a>  
//   </div>  
// </div>  

// <div class="dropdown">  
//   <button onclick="WebTechList()" class="dropbtn">Web Technology</button>  
//   <div id="myDropdown3" class="dropdown-content">  
//     <a href="#php" onclick="php()">PHP</a>  
//     <a href="#css" onclick="css()">CSS</a>  
//     <a href="#js" onclick="js()">JavaScript</a>  
//   </div>  
// </div>  
// <script>  
// /* methods to hide and show the dropdown content */  
// function programmingList() {  
//     document.getElementById("myDropdown1").classList.toggle("show");  
//   }  

//   function databaseList() {  
//     document.getElementById("myDropdown2").classList.toggle("show");  
//   }  


//   function WebTechList() {  
//     document.getElementById("myDropdown3").classList.toggle("show");  
//   }  

//   /* methods to redirect to tutorial page that user will select from dropdown list */  
//   function java() {  
//      window.location.replace("https://www.javatpoint.com/java-tutorial");  
//   }  
//   function python() {  
//      window.location.replace("https://www.javatpoint.com/python-tutorial");  
//   }  
//   function cpp() {  
//      window.location.replace("https://www.javatpoint.com/cpp-tutorial");  
//   }  
//   function c() {  
//      window.location.replace("https://www.javatpoint.com/c-programming-language-tutorial");  
//   }  
//   function mysql() {  
//      window.location.replace("https://www.javatpoint.com/mysql-tutorial");  
//   }  
//   function mDB() {  
//      window.location.replace("https://www.javatpoint.com/mongodb-tutorial");  
//   }  
//   function cassandra() {  
//      window.location.replace("https://www.javatpoint.com/cassandra-tutorial");  
//   }  
//   function php() {  
//      window.location.replace("https://www.javatpoint.com/php-tutorial");  
//   }  
//   function css() {  
//      window.location.replace("https://www.javatpoint.com/css-tutorial");  
//   }  
//   function js() {  
//      window.location.replace("https://www.javatpoint.com/javascript-tutorial");  
//   }  

//   // Close the dropdown menu if the user clicks outside of it  
//   window.onclick = function(event) {  
//     if (!event.target.matches('.dropbtn')) {  
//       var dropdowns = document.getElementsByClassName("dropdown-content");  
//       var i;  
//       for (i = 0; i < dropdowns.length; i++) {  
//         var openDropdown = dropdowns[i];  
//         if (openDropdown.classList.contains('show')) {  
//           openDropdown.classList.remove('show');  
//         }  
//       }  
//     }  
//   }  
//   </script>  

//   </body>  
//   </html>  
//  */