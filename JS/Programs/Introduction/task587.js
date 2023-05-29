// JavaScript: Minimum date from an array of dates




/**
 * 
 * 
 * 
 * 
 * JavaScript Datetime: Exercise-12 with Solution
Write a JavaScript function to get the minimum date from an array of dates.

Test Data:
console.log(min_date(['2015/02/01', '2015/02/02', '2015/01/03']));
Output :
"2015/01/03"







HTML Code:

<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>Minimum date from an array of dates</title>
</head>
<body>
</body>
</html>







JavaScript Code:

function min_date(all_dates) {
 var min_dt = all_dates[0],
  min_dtObj = new Date(all_dates[0]);
 all_dates.forEach(function(dt, index)
  {
  if ( new Date( dt ) < min_dtObj)
  {
  min_dt = dt;
  min_dtObj = new Date(dt);
  }
  });
 return min_dt;
  }
console.log(min_date(['2015/02/01', '2015/02/02', '2015/01/03']));






Live Demo:


html:


<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>Minimum date from an array of dates</title>
</head>
<body>
</body>
</html>

js:



function min_date(all_dates) {
 var min_dt = all_dates[0],
  min_dtObj = new Date(all_dates[0]);
 all_dates.forEach(function(dt, index)
  {
  if ( new Date( dt ) < min_dtObj)
  {
  min_dt = dt;
  min_dtObj = new Date(dt);
  }
  });
 return min_dt;
  }
console.log(min_date(['2015/02/01', '2015/02/02', '2015/01/03']));








 */