// JavaScript: Simplify a given absolute path for a file in Unix-style




/**
 * 
 * 
 * 
 * JavaScript Basic: Exercise-142 with Solution
Write a JavaScript program to simplify a given absolute path for a file in Unix-style.

Sample Solution:

HTML Code:

<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>Simplify a given absolute path for a file in Unix-style.</title>
</head>
<body>

</body>
</html>

JavaScript Code:

function simplify_path(main_path) {
  var parts = main_path.split('/'),
      new_path = [],
      length = 0;
  for (var i = 0; i < parts.length; i++) {
    var part = parts[i];
    if (part === '.' || part === '' || part === '..') {
      if (part === '..' && length > 0) {
        length--;
      }
      continue;
    }
    new_path[length++] = part;
  }

  if (length === 0) {
    return '/';
  }

  var result = '';
  for (var i = 0; i < length; i++) {
    result +=  '/'+new_path[i] ;
  }

  return result;
}
console.log(simplify_path("/home/var/./www/../html//sql/"));




ES6 Version:

function simplify_path(main_path) {
  const parts = main_path.split('/');
  const new_path = [];
  let length = 0;
  for (var i = 0; i < parts.length; i++) {
    const part = parts[i];
    if (part === '.' || part === '' || part === '..') {
      if (part === '..' && length > 0) {
        length--;
      }
      continue;
    }
    new_path[length++] = part;
  }

  if (length === 0) {
    return '/';
  }

  let result = '';
  for (var i = 0; i < length; i++) {
    result +=  `/${new_path[i]}` ;
  }

  return result;
}
console.log(simplify_path("/home/var/./www/../html//sql/"));

Live Demo:


html:



<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>Simplify a given absolute path for a file in Unix-style.</title>
</head>
<body>

</body>


js:




function simplify_path(main_path) {
  var parts = main_path.split('/'),
      new_path = [],
      length = 0;
  for (var i = 0; i < parts.length; i++) {
    var part = parts[i];
    if (part === '.' || part === '' || part === '..') {
      if (part === '..' && length > 0) {
        length--;
      }
      continue;
    }
    new_path[length++] = part;
  }

  if (length === 0) {
    return '/';
  }

  var result = '';
  for (var i = 0; i < length; i++) {
    result +=  '/'+new_path[i] ;
  }

  return result;
}
console.log(simplify_path("/home/var/./www/../html//sql/"));




 */