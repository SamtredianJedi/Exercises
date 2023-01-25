// How to Convert Comma Separated String into an Array in JavaScript


/**
 * 
 * A comma-separated valuation (CSV) file is a demarcated file format that uses a comma to isolate the values. The data record is comprised of one or more than one field, separated by the commas. The name root for this file format is the comma-separated file format, is the use of the comma as a field extractor.

You can convert the comma-separated string into an array by using the two following methods.

By using the split () method
Append through the list and put track of each comma you find to generate a new sequence with different strings.
By using the split () method
The split () method is used to partition a sequence based on an extractor. This separator can be delineated as a comma to differentiate the string if a comma is encountered. This procedure returns an array of distinct strings.

Syntax

string.split(' , ')  
Example

Here, an illustration is given below for the same.

<!DOCTYPE html>   
<html>     
<head>   
<title>   
      Conversion of comma separated    
      string to array in JavaScript   
</title>   
</head>   
    
<body>   
<h2 style="color: green">   
      JavaTpoint  
</h2>   
<b>Conversion of comma separated string    
      to array in JavaScript</b>   
<p>Original string is   
      "Twenty, Thirty, Fourty, Fifty, Sixty"</p>   
<p>   
      The values of the Separated Array is: <span class="output"></span>   
</p>     
<button onclick="separateString()">   
      Remove Text   
</button>   
<script type="text/javascript">   
        function separateString() {   
            originalString = "Twenty, Thirty, Fourty, Fifty, Sixty";   
            separatedArray = originalString.split(', ');     
            console.log(separatedArray);   
            document.querySelector('.output').textContent =    
              separatedArray;   
}   
</script>   
</body>   
</html>  
 */

/**
 * 
 * Append through the list and put track of each comma you find to generate a new sequence with different strings
This method helps you to iterate the characters of the string and analyze for the comma. The Previous index variable can be determined, which keeps records of the first character of the next string. The slice method is used to remove the part of the string between the prior index and the specific position of the comma found. This string is driven to a new array. This procedure is iterated for the entire length of the string. The final segment comprises all the separate strings.

Syntax

originalString = " Twenty, Thirty, Fourty, Fifty, Sixty ";   
separatedArray = [];   
let previousIndex = 0;                       // index of end of the last string   
   
for(i = 0; i < originalString.length; i++)   
{   
  if (originalString[i] == ', ') {                                      // check the character for a comma    
   
       // split the string from the last index to the comma   
        separated = originalString.slice(previousIndex, i);   
        separatedArray.push(separated);   
                                                                  
      previousIndex = i + 1;              // update the index of the last string   
    }   
}   
             // push the last string into the array   
separatedArray.push(originalString.slice(previousIndex, i));    
Example

Here, an illustration is given below for the same.

<!DOCTYPE html>   
<html>  
<head>   
<title>Conversion of comma separated string to array in JavaScript   
</title>   
</head>     
<body>   
<h1 style="color: green">   
      JavaTpoint       
</h1>   
<b>Conversion of comma separated string   
      to array in JavaScript</b>   
<p>Original string is   
      "Twenty, Thirty, Fourty, Fifty, Sixty"</p>   
<p>   
      Separated Array is: <span class="output"></span>   
</p>   
    
<button onclick="separateString()">   
      Remove Text   
</button>   
<script type="text/javascript">   
          
        function separateString()   
{               
            originalString =   
              "Twenty, Thirty, Fourty, Fifty, Sixty";   
            separatedArray = [];   
              
            let previousIndex = 0;       // index of end of the last string  
    
            for (i = 0; i < originalString.length; i++)   
{   
    
       if (originalString[i] == ', ')     // check the character for a comma   
{                            
separated =        // split the string from the last index to the comma    
originalString.slice(previousIndex, i);   
separatedArray.push(separated);   
  
previousIndex = i + 1;                 // update the index of the last string     
                }   
            }  
        separatedArray.push(          // push the last string into the array   
        originalString.slice(previousIndex, i));     
        console.log(separatedArray);   
        document.querySelector(   
        '.output').textContent = separatedArray;   
        }   
</script>   
</body>   
</html>  
 */