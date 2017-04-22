var c = document.getElementById("myCanvas");
var ctx = c.getContext('2d');

ctx.beginPath();
ctx.strokeStyle = "blue";
ctx.lineWidth = "2px";

//Starting Coordinate
ctx.moveTo(100,0);

//Other Points
ctx.lineTo(175,100);
ctx.lineTo(100,200);
ctx.lineTo(25,100);

//Close Path
ctx.closePath();

//Outline Shape
ctx.stroke();

//Fill Shape
ctx.fillStyle = "red";
ctx.fill();

var d = document.getElementById("myCanvas2");
var dtx = d.getContext('2d');

dtx.beginPath();
dtx.strokeStyle = "blue";
dtx.lineWidth = "2px";
dtx.moveTo(0,0);
dtx.lineTo(300,300);
dtx.lineTo(300,0);
dtx.lineTo(0,300);
dtx.closePath();
dtx.stroke();
dtx.fillStyle = "green";
dtx.fill();

var e = document.getElementById("myCanvas3");
var etx = e.getContext('2d');

etx.beginPath();
etx.arc(225,150,100,0,6.28)
etx.closePath();
etx.stroke();
etx.fillStyle = "red";
etx.fill();

var f = document.getElementById("myCanvas4");
var ftx = f.getContext('2d');

ftx.fillStyle = "green";
ftx.fillRect(0,300,1000,450);
ftx.fillStyle = "orange";
ftx.fillRect(0,0,1000,300);
ftx.beginPath();
ftx.arc(500,300,50,3.14,6.28);
ftx.closePath();
ftx.stroke();
ftx.fillStyle = "red";
ftx.fill();
ftx.fillStyle = "grey";
ftx.fillRect(100,0,300,300);
ftx.beginPath();
ftx.strokeStyle = "black";
ftx.lineWidth = "2px";
ftx.moveTo(560,300);
ftx.lineTo(600,300);
ftx.lineTo(640,450);
ftx.lineTo(520,450);
ftx.stroke();
ftx.fillStyle = "grey";
ftx.fill();