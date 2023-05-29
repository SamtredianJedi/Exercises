// JavaScript: Maximum date from an array of dates


/**
 * 





JavaScript Datetime: Exercise-11 with Solution
Write a JavaScript function to get the maximum date from an array of dates.

Test Data:
console.log(max_date(['2015/02/01', '2015/02/02', '2015/01/03']));
Output :
"2015/02/02"







HTML Code:

<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>Maximum date from an array of dates</title>
</head>
<body>
</body>
</html>








JavaScript Code:

function max_date(all_dates) {
var max_dt = all_dates[0],
  max_dtObj = new Date(all_dates[0]);
all_dates.forEach(function(dt, index)
  {
  if ( new Date( dt ) > max_dtObj)
  {
  max_dt = dt;
  max_dtObj = new Date(dt);
  }
  });
 return max_dt;
  }
console.log(max_date(['2015/02/01', '2015/02/02', '2015/01/03']));




 */