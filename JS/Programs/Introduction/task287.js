// JavaScript: Accept a list of words and returns the longest

/**
 * 
 * 
 * 
 * JavaScript Function: Exercise-25 with Solution
Write a JavaScript function that accept a list of country names as input and returns the longest country name as output

Sample function : Longest_Country_Name(["Australia", "Germany", "United States of America"])
Expected output : "United States of America"



Sample Solution: -

HTML Code:

<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Find longest word</title>
</head>
<body>

</body>
</html>




JavaScript Code:

function Longest_Country_Name(country_name)
  {
  return country_name.reduce(function(lname, country) 
  {
    return lname.length > country.length ? lname : country;
  }, 
"");
}
console.log(Longest_Country_Name(["Australia", "Germany", "United States of America"]));


 */