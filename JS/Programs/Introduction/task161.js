// JavaScript: Check whether a given string contains equal number of p's and t's

/**
 * 
 * 
 * 
 * JavaScript Basic: Exercise-55 with Solution
Write a JavaScript program to check whether a given string contains equal number of p's and t's



Sample Solution:

HTML Code:

<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>check whether a given string contains equal number of p's and t's</title>
</head>
<body>

</body>
</html>




JavaScript Code:

function equal_pt(str)
{ 
  var str_p = str.replace(/[^p]/g, "");

  var str_t = str.replace(/[^t]/g, "");

  var p_num = str_p.length;
  var s_num = str_t.length;

  return p_num === s_num;
         
}
console.log(equal_pt("paatpss"));
console.log(equal_pt("paatps"));



ES6 Version:

function equal_pt(str)
{ 
  const str_p = str.replace(/[^p]/g, "");

  const str_t = str.replace(/[^t]/g, "");

  const p_num = str_p.length;
  const s_num = str_t.length;

  return p_num === s_num;
         
}
console.log(equal_pt("paatpss"));
console.log(equal_pt("paatps"));


Live Demo:


function equal_pt(str)
{ 
  var str_p = str.replace(/[^p]/g, "");

  var str_t = str.replace(/[^t]/g, "");

  var p_num = str_p.length;
  var s_num = str_t.length;

  return p_num === s_num;
         
}
console.log(equal_pt("paatpss"));
console.log(equal_pt("paatps"));


 */