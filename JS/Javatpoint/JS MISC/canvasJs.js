/**
 * 
 * We often come across charts on analytics-based sites or some websites that contain surveys on some common agendas like population, percentage, and whatnot. These charts are often used in the Data Interpretation field to create network shares or profit distribution in core sectors. However, if we collectively observe, these charts or bar distributions are renderable. They can change when values plotted on the graph are changed. To ease constructing these renderable charts, JavaScript has tremendous support from libraries. One such library specifically for charts is CanvasJS. Let's learn about it from scratch.

What is CanvasJS?
As depicted in the official world of libraries in JavaScript, CanvasJS is the popular charting library. It is easy to use JavaScript and HTML5 based library that can be built on the Canvas element. It has a wide range of device influences, including Android, iPhone & iPad, Windows Phone, Microsoft Surface, Desktops, etc.

CanvasJS is a hardcore chart creator library that enables users to create rich UI dashboards and charts that can work on all devices without compromising functionality or maintenance for our web application. It already comes with dynamic and awesome themes, and it is 10x faster than the conventional SVG Charts and Flash. Users can easily create responsive, dynamic, renderable, lightweight, and rich UI dashboards using CanvasJS.

Download
Users can download CanvasJS with a simple npm command given below.

$ npm install canvasjs  
After this step, we need to import it first. It can be done in multiple ways depending on the type of module and the application pattern being considered.

CanvasJS package, by default, works on CommonJS that can be easily put on to use with property/webpack, as shown below.

// CommonJS  
var CanvasJS = require('canvasjs');  
// ES6  
mport CanvasJS from 'canvasjs';  
// AMD loader and Required.js  
require('canvasjs/dist/canvasjs.js', function(CanvasJS){  
The above-shown dependencies are local. For importing global dependencies, use the below code.

<script src="canvasjs/dist/canvasjs.js">  
Note: The dist folder by default contains a minified version located at dist/canvasjs.js.min.js, and it is a production-based version wrapped up for using it with jQuery.
Concept of working with Data in Chart
To work with data in the chart in CanvasJS, we need to add data. All the data that we want to be plotted should be added to an array called "data". It is the confined property of Chart Options. Every element of the array is treated as an object and is called data series, which is nothing but the logical grouping of data elements. Individual data elements or points are always called dataPoint. To understand how data work in CanvasJS, we will be using dataPoint and dataSeries everywhere in this tutorial for illustration.

Let's look at the format of the dataSeries object in the data array. The sample code snippet is given below for reference.

var  chart =  new  CanvasJS.Chart("container",  
{  
  .  
  .  
  .  
  data:[   
  {// dataSeries 1  
   type: "column",  
   dataPoints:[ //array of dataPoint  
    {x:1, y:5}, //dataPoint  
    {x:2, y:6}, //dataPoint  
    {x:3, y:7} //dataPoint  
   ]  
  },  
   
  {// dataSeries 2   
   type: "line",  
   dataPoints:[  
    {x:1, y:8}, //dataPoint  
    {x:2, y:9}, //dataPoint  
    {x:3, y:4} //dataPoint  
   ]  
  },  
.  
   
],  
.  
.   
});  
chart.render();  
 */


/**
 * 
 * What is dataPoint?
All the values that have to be plotted on a chart subjected to the required design are called dataPoint. We can easily add each dataPoint to the array, which becomes the member of the dataSeries. The most commonly used dataPoints used are plotted on the x,y, and label axis. See the below example of how a dataPoint is plotted.

dataPoints : [   
   { x: 10, y: 15, label: "apple"  }, //dataPoint  
   { x: 20, y: 8,  label: "mango"  },   
   { x: 30, y: 10, label: "orange" },   
   { x: 40, y: 12, label: "banana" }   
],  
Adding dataPoints
To understand how CanvasJS works, it is important to understand that dataPoint should consist of a y value. To plot a series, only y values are treated as dataPoints. If there is no x value provided, they are by default set to the absolute value of zero. Let's understand by an example.

<!DOCTYPE HTML>  
<html>  
<head>    
  <script type="text/javascript">  
  window.onload = function () {  
    var chart = new CanvasJS.Chart("chartContainer",  
    {  
      title:{  
      text: "Adding dataPoints"    
      },  
      data: [  
      {          
        type: "column",  
        dataPoints: [  
        { y: 71 },  
        { y: 55},  
        { y: 50 },  
        { y: 65 },  
        { y: 95 },  
        { y: 68 },  
        { y: 28 },  
        { y: 34 },  
        { y: 14}  
        
        ]  
      }  
      ]  
    });  
  
    chart.render();  
  }  
  </script>  
 <script type="text/javascript"   
src="https://canvasjs.com/assets/script/canvasjs.min.js"></script></head>  
<body>  
  <div id="chartContainer" style="height: 300px; width: 100%;">  
  </div>  
</body>  
</html>  
 */

/**
 * 
 * Plotting x values
<!DOCTYPE HTML>  
<html>  
<head>    
  <script type="text/javascript">  
  window.onload = function () {  
    var chart = new CanvasJS.Chart("chartContainer",  
    {  
      title:{  
      text: "Placing dataPoint on axisX"  
      },  
      data: [  
      {          
        type: "column",  
        dataPoints: [  
        { x: 10, y: 71 },  
        { x: 22, y: 55},  
        { x: 31, y: 50 },  
        { x: 44, y: 65 },  
        { x: 50, y: 95 },  
        { x: 64, y: 68 },  
        { x: 72, y: 28 },  
        { x: 84, y: 34 },  
        { x: 90, y: 14}  
        
        ]  
      }  
      ]  
    });  
  
    chart.render();  
  }  
  </script>  
 <script type="text/javascript"   
src="https://canvasjs.com/assets/script/canvasjs.min.js"></script></head>  
<body>  
  <div id="chartContainer" style="height: 300px; width: 100%;">  
  </div>  
</body>  
</html>  
 */

/**
 * 
 * dataPoint Labelling
Labels are defined as the values that are displayed on the x-axis of the chart. If there is no x value provided, the default value is taken for the label, and it can be easily customized.

<!DOCTYPE HTML>  
<html>  
<head>    
  <script type="text/javascript">  
  window.onload = function () {  
    var chart = new CanvasJS.Chart("chartContainer",  
    {    
      title: {  
        text: "Axis With Custom Labels"        
      },  
      data: [  
      {               
        type: "column",  
        dataPoints: [  
         
        { y: 71, label: "cat 1" },  
        { y: 55, label: "cat 2" },  
        { y: 50, label: "cat 3" },  
        { y: 65, label: "cat 4" },  
        { y: 95, label: "cat 5" },  
        { y: 68, label: "cat 6" },  
        { y: 28, label: "cat 7" },  
        { y: 34, label: "cat 8" },  
        { y: 14, label: "cat 9" }  
        ]  
      }  
      ]  
    });  
  
    chart.render();  
  }  
  </script>  
  <script type="text/javascript"   
src="https://canvasjs.com/assets/script/canvasjs.min.js"></script>  
</head>  
<body>  
  <div id="chartContainer" style="height: 300px; width: 100%;">  
  
  </div>  
</body>  
</html>  
 */

/**
 * 
 * Index labeling in dataPoints
Index labels are generally positioned below or above the dataPoint.

<!DOCTYPE HTML>  
<html>  
<head>    
  <script type="text/javascript">  
  window.onload = function () {  
    var chart = new CanvasJS.Chart("chartContainer",  
    {  
      title:{  
       text: "Index Labels on dataPoints"     
      },  
      data: [  
      {          
        type: "column",  
        dataPoints: [  
          
        { x: 10, y: 71},  
        { x: 20, y: 55},  
        { x: 30, y: 50 },  
        { x: 40, y: 65 },  
        { x: 50, y: 125, indexLabel: "high" },  
        { x: 60, y: 68 },  
        { x: 70, y: 28 },  
        { x: 80, y: 34 },  
        { x: 90, y: 14,  indexLabel: "low" }  
        ]  
      }  
      ]  
    });  
  
    chart.render();  
  }  
  </script>  
  <script type="text/javascript"   
src="https://canvasjs.com/assets/script/canvasjs.min.js"></script>  
</head>  
<body>  
  <div id="chartContainer" style="height: 300px; width: 100%;">  
  </div>  
</body>  
</html>  
 */

/**
 * 
 * Finishing all at once
<!DOCTYPE HTML>  
<html>  
<head>    
  <script type="text/javascript">  
  window.onload = function () {  
    var chart = new CanvasJS.Chart("chartContainer",  
    {  
       title:{  
        text: "Golds won in 2012 London Olympics",   
        fontWeight: "bolder",  
        fontColor: "#008B8B",  
        fontfamily: "tahoma",          
        fontSize: 25,  
        padding: 10          
      },  
  
      data: [  
      {          
        type: "column",  
        dataPoints: [  
         {label: "US", y: 46 },  
         {label: "China", y: 38},  
         {label: "Britain", y: 29},  
         {label: "Russia", y: 24 },  
         {label: "South Korea", y: 13 },  
         {label: "Germany", y: 11 },  
         {label: "france", y: 11},  
         {label: "Hungary", y: 8 },  
         {label: "Australia", y: 7 },  
         {label: "Japan", y: 7 }        
      ]  
    }  
  
      ]  
    });  
  
    chart.render();  
  }  
  </script>  
 <script type="text/javascript"   
src="https://canvasjs.com/assets/script/canvasjs.min.js">  
</script>  
</head>  
<body>  
  <div id="chartContainer" style="height: 300px; width: 100%;">  
  </div>  
</body>  
</html>  
 */

/**
 * 
 * Since we are now much familiar with using CanvasJS, let's take some more time to create some sophisticated charts that are industrial level. To do that, we have prepared a sample example in case of users miss out on how to apply the above concepts.

In this example, we will make a Stock Chart from scratch and customize it using live examples. With every step of rendering, if we use the source code to run it on a compiler, we might understand it better.

<!DOCTYPE HTML>  
<html>  
<head>  
<script type="text/javascript"   
src="https://canvasjs.com/assets/script/jquery-1.11.1.min.js"></script>  
<script type="text/javascript"   
src="https://canvasjs.com/assets/script/canvasjs.stock.min.js"></script>  
<script type="text/javascript">  
window.onload = function () {  
  var dataPoints = [];  
    
  var stockChart = new CanvasJS.StockChart("chartContainer",{  
    title: {  
        text: "StockChart Title"  
      },  
    charts: [{        
      data: [{          
        type: "line", //Change it to "spline", "area", "column"  
        dataPoints : dataPoints  
      }]  
    }],  
    navigator: {  
      slider: {  
        minimum: new Date(2018,04, 01),  
        maximum: new Date(2018,06, 01)  
      }  
    }  
  });   
  
  $.getJSON("https://canvasjs.com/data/docs/btcusd2018.json",   
function(data) {    
    for(var i = 0; i < data.length; i++){  
      dataPoints.push({x: new Date(data[i].date), y:   
Number(data[i].close)});  
    }  
      
    stockChart.render();  
  });  
}  
</script>  
</head>  
<body>  
<div id="chartContainer" style="height: 400px; width: 100%;"></div>  
</body>  
</html>  



Conclusion
In this tutorial, we came across and learned about CanvasJS and its applications. We also discovered how to render the custom components of JavaScript using CanvasJS, which can be treated as a utility tool or library in JavaScript specifically designed to work with charts. Although D3.js also offers a similar experience when taken into consideration, it is not preferred because of its robust nature and complexity. CanvasJS is lightweight, easy to handle, needs no further dependencies rather than having to import it into the main HTML file, and is super easy to learn. In the later sections, we also saw step-by-step inclusion of properties in the example and how dataPoints work along with the labels and axis. We also saw from the example above where we created a Stock Chart with not much effort.


*/