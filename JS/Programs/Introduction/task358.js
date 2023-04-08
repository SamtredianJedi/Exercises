// JavaScript: Create random background color



/**
 * 
 * 
 * JavaScript Math: Exercise-40 with Solution
Write a JavaScript function to create random background color.





HTML Code:

<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>JavaScript function to create random background color</title>
</head>
<body>

</body>
</html>





JavaScript Code:

function random_bg_color() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
 console.log(bgColor);
  
    document.body.style.background = bgColor;
    }

random_bg_color();






Live Demo:


html:


<head>
  <meta charset="utf-8">
  <title>JavaScript function to create random background color</title>
</head>
<body>

</body>



js:



function random_bg_color() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
 console.log(bgColor);
  
    document.body.style.background = bgColor;
    }
​
random_bg_color();






 */