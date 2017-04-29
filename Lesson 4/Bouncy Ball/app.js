var canvas;
var ctx;

//current position
var x = 300;
var y = 200;
var r = 75;

//magnitude of movement
var mx = 2;
var my = 4;
var mr = 40;

//hold width and height of canvas
var width = 600;
var height = 400;

//initialize animation
function init(){
	canvas = document.getElementById("myCanvas");
	ctx = canvas.getContext("2d");
	return setInterval(draw,10);
}

//draw circle
function circle(x,y,r){
	ctx.beginPath();
	ctx.arc(x,y,r,0,6.28);
	ctx.closePath();
	ctx.stroke();
	ctx.fillStyle = "red";
	ctx.fill();
}

//clear trail
function clear(){
	ctx.clearRect(0,0,width,height);
}

//draw frames
function draw(){
	clear();
	circle(x,y,r);

	if(x+mx < 0 || x+mx>width){
		mx = -mx;
	}
	if(y+my < 0 || y+my>height){
		my = -my;
	}
	if(r+mr > 140 || r+mr < 10){
		mr = -mr;
	}
	//move the shape
	x += mx;
	y += my;	
	r += mr;
}

init();
