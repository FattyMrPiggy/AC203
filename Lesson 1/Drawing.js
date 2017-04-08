var	c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var	d = document.getElementById("myCanvas2");
var dtx = d.getContext("2d");
var	e = document.getElementById("myCanvas3");
var etx = e.getContext("2d");
var x = 0;
var y = 0;
var width = 300;
var height = 300;
//Start Point
ctx.moveTo(0,0);
//End Point
ctx.lineTo(300,300);
//Draw
ctx.stroke();

//Color Of Rectangle
ctx.fillStyle = "yellow"
//HowToDoARectangleDrawing(FirstTwoNumbers=LeftTopCoordsSecondTwoNumbers=HowLarge)
ctx.fillRect(25,25,250,250)
//Rectangle with only border
ctx.strokeStyle = "red"
ctx.strokeRect(0,0,300,25)

ctx.fillStyle = "blue"
ctx.fillRect(0,275,300,25)
ctx.clearRect(25,285,100,10)
dtx.fillStyle = "green"
dtx.fillRect(0,0,150,150)
dtx.fillStyle = "green"
dtx.fillRect(150,150,300,300)
etx.fillRect(x,y,width,height)
while(width>0){
	x += 10;
	y += 10;
	width -= 20;
	height -= 20;
	etx.clearRect(x,y,width,height)
	x += 10;
	y += 10;
	width -= 20;
	height -= 20;
	etx.fillRect(x,y,width,height)
}
