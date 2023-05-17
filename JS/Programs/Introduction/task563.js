// JavaScript: Generate an array between two integers of 1 step length




/**
 * 
 * 
 * 
 * 
 * 
 * JavaScript Array: Exercise-41 with Solution
Write a JavaScript function to generate an array between two integers of 1 step length.

Test Data :
console.log(rangeBetwee(4, 7));
[4, 5, 6, 7]
console.log(rangeBetwee(-4, 7));
[-4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7]







HTML Code:

<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>JavaScript function to generate an array between two integers of 1 step length</title>
</head>
<body>

</body>
</html>







JavaScript Code:

function rangeBetwee(start, end) 
{
  
		if (start > end) {
			var arr = new Array(start - end + 1);
			for (var i = 0; i < arr.length; i++, start--) {
				resarrult[i] = start;
			}
			return arr;
		} 
       else 
       {
			var arro = new Array(end-start+1);
         
		for (var j = 0; j < arro.length; j++, start++) 
        {
			arro[j] = start;
		}
      		return arro;
		}
	}

console.log(rangeBetwee(4, 7));
console.log(rangeBetwee(-4, 7));







ES6 Version:

function rangeBetwee(start, end) 
{
  
		if (start > end) {
			const arr = new Array(start - end + 1);
			for (let i = 0; i < arr.length; i++, start--) {
				resarrult[i] = start;
			}
			return arr;
		} 
       else 
       {
			const arro = new Array(end-start+1);
         
		for (let j = 0; j < arro.length; j++, start++) 
        {
			arro[j] = start;
		}
      		return arro;
		}
	}

console.log(rangeBetwee(4, 7));
console.log(rangeBetwee(-4, 7));







Live Demo :


js:




function rangeBetwee(start, end) 
{
  
    if (start > end) {
      var arr = new Array(start - end + 1);
      for (var i = 0; i < arr.length; i++, start--) {
        resarrult[i] = start;
      }
      return arr;
    } 
       else 
       {
      var arro = new Array(end-start+1);
         
    for (var j = 0; j < arro.length; j++, start++) 
        {
      arro[j] = start;
    }
          return arro;
    }
  }
​
console.log(rangeBetwee(4, 7));
console.log(rangeBetwee(-4, 7));



 */