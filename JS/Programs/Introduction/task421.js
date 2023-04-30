// JavaScript: Product of two non-negative integers as strings

/**
 * 
 * 
 * 
 * JavaScript Math: Exercise-103 with Solution
Write a JavaScript program to calculate the product of non-negative integers n1 and n2 represented as strings. The product is also returned as a string.

Test Data:
("11", "10") -> "110"
("17", "19") -> "323"
("1", "0") -> "0"
("0", "0") -> "0"








HTML Code:

<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>JavaScript program to Product of two non-negative integers as strings</title>
</head>
<body>

</body>
</html>






JavaScript Code:

function test(n1, n2) {
    if (n1 === '0' || n2 === '0') 
      return '0';
    
    n1_len = n1.length
    n2_len = n2.length
    result = new Array(n1_len+n2_len).fill(0)
    
    for (i=n1_len-1; i>=0; i--) {
        for (j=n2_len-1; j>=0; j--) {
             t1=i+j
             t2=i+j+1
             total = result[t2] + Number(n1[i]) * Number(n2[j])           
             result[t2] = total%10
             result[t1] += Math.floor(total/10)
        }
    }
     if (result[0] === 0) 
       result.shift();
     return result.join('')
}

n1 = "11"
n2 = "10"
console.log("n1 = " +n1+", n2 = "+n2)
console.log("Product of the said two integers as strings: "+test(n1, n2));
n1 = "17"
n2 = "19"
console.log("n1 = " +n1+", n2 = "+n2)
console.log("Product of the said two integers as strings: "+test(n1, n2));
n1 = "1"
n2 = "0"
console.log("n1 = " +n1+", n2 = "+n2)
console.log("Product of the said two integers as strings: "+test(n1, n2));
n1 = "0"
n2 = "0"
console.log("n1 = " +n1+", n2 = "+n2)
console.log("Product of the said two integers as strings: "+test(n1, n2));







Live Demo:


html:


<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>JavaScript program to Product of two non-negative integers as strings</title>
</head>
<body>

</body>
</html>


js:

function test(n1, n2) {
    if (n1 === '0' || n2 === '0') 
      return '0';
    
    n1_len = n1.length
    n2_len = n2.length
    result = new Array(n1_len+n2_len).fill(0)
    
    for (i=n1_len-1; i>=0; i--) {
        for (j=n2_len-1; j>=0; j--) {
             t1=i+j
             t2=i+j+1
             total = result[t2] + Number(n1[i]) * Number(n2[j])           
             result[t2] = total%10
             result[t1] += Math.floor(total/10)
        }
    }
     if (result[0] === 0) 
       result.shift();
     return result.join('')
}

n1 = "11"
n2 = "10"
console.log("n1 = " +n1+", n2 = "+n2)
console.log("Product of the said two integers as strings: "+test(n1, n2));
n1 = "17"
n2 = "19"
console.log("n1 = " +n1+", n2 = "+n2)
console.log("Product of the said two integers as strings: "+test(n1, n2));
n1 = "1"
n2 = "0"
console.log("n1 = " +n1+", n2 = "+n2)
console.log("Product of the said two integers as strings: "+test(n1, n2));
n1 = "0"
n2 = "0"
console.log("n1 = " +n1+", n2 = "+n2)
console.log("Product of the said two integers as strings: "+test(n1, n2));






 */