// In the above example, we have edited the table data with the help of JavaScript.To make table cells editable, click on the cell.The cell should become "editable" (textarea appears inside).We can change the content of the table.*/

/**
 * 
 * Example 3:
<! DOCTYPE html>  
<html>  
<head>  
<meta name="viewport" content="width=device-width, initial-scale=1">  
<meta charset="UTF-8">  
<title> JavaScript editable table </title>  
<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css">  
<link href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">  
</head>  
<style>  
 @import url('https://fonts.googleapis.com/css?family=Montserrat:400,500');  
body {  
  font-family: 'Montserrat', sans-serif;  
  padding: 0;  
  margin: 0;  
  text-align: center;  
}  
h1 {  
  position: relative;  
  padding: 0;  
  margin: 10;  
  font-family: "Raleway", sans-serif;  
  font-weight: 300;  
  font-size: 40px;  
  color: #080808;  
  -webkit-transition: all 0.4s ease 0s;  
  -o-transition: all 0.4s ease 0s;  
  transition: all 0.4s ease 0s;   
}  
tr:nth-of-type(odd) {   
    background: #eee;   
    }  
    th {   
    background: #3498db;   
    color: white;   
    font-weight: bold;   
    }  
  
@import "compass/css3";  
.table-editable {  
  position: relative;  
  .glyphicon {  
    font-size: 20px;  
  }  
}  
table {   
    width: 750px;   
    border-collapse: collapse;   
    margin:50px auto;  
    }  
    td, th {   
    padding: 10px;   
    border: 1px solid #ccc;   
    text-align: left;   
    font-size: 18px;  
    }  
.table-remove {  
  color: #700;  
  cursor: pointer;  
  &:hover {  
    color: #f00;  
  }  
}  
.table-up {  
  color: #007;  
  cursor: pointer;  
  &:hover {  
    color: #00f;  
  }  
}  
.table-down {  
  color: #007;  
  cursor: pointer;  
  &:hover {  
    color: #00f;  
  }  
}  
.table-add {  
  color: #070;  
  cursor: pointer;  
  position: absolute;  
  top: 8px;  
  right: 0;  
  &:hover {  
    color: #0b0;  
  }  
}  
</style>  
<body>  
<div class="container">  
  <h1> JavaScript Editable Table </h1>  
  <div id="table" class="table-editable">  
    <table class="table">  
      <tr>  
        <th> Name</th>  
        <th> Roll No </th>  
        <th> Class </th>  
        <th> Marks </th>  
      </tr>  
      <tr>  
        <td contenteditable="true"> Ram </td>  
        <td contenteditable="true"> 1 </td>  
        <td contenteditable="true"> BA </td>  
    <td contenteditable="true"> 48 </td>  
      </tr>  
<tr>  
        <td contenteditable="true"> Rama </td>  
        <td contenteditable="true"> 10 </td>  
       <td contenteditable="true"> BSC </td>  
  <td contenteditable="true"> 40 </td>  
      </tr>  
        <tr>  
        <td contenteditable="true"> sham </td>  
        <td contenteditable="true"> 8 </td>  
       <td contenteditable="true"> BCA </td>  
      <td contenteditable="true"> 34 </td>  
      </tr>  
    <tr>  
        <td contenteditable="true"> shama </td>  
        <td contenteditable="true"> 3 </td>  
    <td contenteditable="true"> BCA </td>  
    <td contenteditable="true"> 30 </td>  
      </tr>  
    </table>  
  </div>  
</div>  
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"> </script>  
<script>  
var $TABLE = $('#table');  
var $BTN = $('#export-btn');  
var $EXPORT = $('#export');  
$('.table-add').click(function () {  
  var $clone = $TABLE.find('tr.hide').clone(true).removeClass('hide table-line');  
  $TABLE.find('table').append($clone);  
});  
$('.table-remove').click(function () {  
  $(this).parents('tr').detach();  
});  
$('.table-up').click(function () {  
  var $row = $(this).parents('tr');  
  if ($row.index() === 1) return;   
  $row.prev().before($row.get(0));  
});  
$('.table-down').click(function () {  
  var $row = $(this).parents('tr');  
  $row.next().after($row.get(0));  
});  
jQuery.fn.pop = [].pop;  
jQuery.fn.shift = [].shift;  
$BTN.click(function () {  
  var $rows = $TABLE.find('tr:not(:hidden)');  
  var headers = [];  
  var data = [];  
    $($rows.shift()).find('th:not(:empty)').each(function () {  
    headers.push($(this).text().toLowerCase());  
  });  
  $rows.each(function () {  
    var $td = $(this).find('td');  
    var h = {};  
        headers.forEach(function (header, i) {  
      h[header] = $td.eq(i).text();     
    });  
        data.push(h);  
  });  
    });  
</script>  
</body>  
</html>  
Explanation:

In the above example, we have edited the table data with the help of JavaScript. To make table cells editable, click on the cell. The cell should become "editable" (textarea appears inside). We can change the content of the table.
 */