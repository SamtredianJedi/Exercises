// JavaScript: Break an address of an url and put it's part into an array


/**
 * 
 * 
 * 
 * JavaScript Basic: Exercise-144 with Solution
Write a JavaScript program to break an address of an url and put it's part into an array.

Note: url structure : ://.org[/] and there may be no part in the address.



Sample Solution:

HTML Code:

<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>Break an address of an url and put it's part into an array.</title>
</head>
<body>

</body>
</html>

JavaScript Code:

function break_address(url_add) {
    var data = url_add.split("://")
    var protocol = data[0];
    data = data[1].split(".com");
    var domain = data[0];
    data = data[1].split("/");

    if(data[1]){
        return [protocol,domain,data[1]]
    }

    return [protocol,domain]
}

var url_add = "https://www.w3resource.com/javascript-exercises/"
console.log("Original address: "+url_add)
console.log(break_address(url_add))




ES6 Version:

function break_address(url_add) {
    let data = url_add.split("://");
    const protocol = data[0];
    data = data[1].split(".com");
    const domain = data[0];
    data = data[1].split("/");

    if(data[1]){
        return [protocol,domain,data[1]]
    }

    return [protocol,domain]
}

var url_add = "https://www.w3resource.com/javascript-exercises/"
console.log(`Original address: ${url_add}`)
console.log(break_address(url_add))


Live Demo:

html:


<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>Break an address of an url and put it's part into an array</title>
</head>
<body>

</body>


js:



function break_address(url_add) {
    var data = url_add.split("://")
    var protocol = data[0];
    data = data[1].split(".com");
    var domain = data[0];
    data = data[1].split("/");

    if(data[1]){
        return [protocol,domain,data[1]]
    }

    return [protocol,domain]
}

var url_add = "https://www.w3resource.com/javascript-exercises/"
console.log("Original address: "+url_add)
console.log(break_address(url_add))


 */