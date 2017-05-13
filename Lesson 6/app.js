var canvas;
var ctx;

//Player Position
var x = 300;
var y = 300;
var size = 30;

//Player Speed
var mx = 0;
var my = 0;

//Canvaas Width and Height
var WIDTH = 600;
var HEIGHT = 600;

var gameover = false;

//Position of Circle
var circleX;
var circleY;
var circleCollision = false;
var score = 0;

//Ghost
var ghostX;
var ghostY;
var ghostCollision = false;

//import pacman
function drawPacman(x,y,size){
	ctx = document.getElementById("myCanvas").getContext('2d');
	var pacman = new Image();
	pacman.src = "pacman.png";
	ctx.drawImage(pacman,x,y,size,size)
}

//Import Circle
function drawCircle(){
	ctx = document.getElementById("myCanvas").getContext('2d');
	var circle = new Image();
	circle.src = "circle.png";
	ctx.drawImage(circle,circleX,circleY,30,30);
}

//Import Ghost
function drawGhost(){
	ctx = document.getElementById("myCanvas").getContext('2d');
	var ghost = new Image();
	ghost.src = "ghost.png";
	ctx.drawImage(ghost,ghostX,ghostY,40,40);
}
//Initialize Animation
function init(){
	//set up canvas
	canvas = document.getElementById("myCanvas");
	ctx = canvas.getContext("2d");

	//Ghost Random Pos.
	ghostX = Math.floor(Math.random()*(WIDTH-40))
	ghostY = Math.floor(Math.random()*(HEIGHT-40))
	//Circle random position
	circleX = Math.floor(Math.random()*(WIDTH-50));
	circleY = Math.floor(Math.random()*(HEIGHT-50));

	//wait for keyboard press
	window.onkeydown = keydownControl;

	//redraw canvas
	return setInterval(draw,10);
}

function keydownControl(e){
	if(e.keyCode == 37){
		mx = -4;
		my = 0;
	} else if(e.keyCode == 38){
		mx = 0;
		my = -4;
	} else if(e.keyCode == 39){
		mx = 4;
		my = 0;
	} else if(e.keyCode == 40){
		mx = 0;
		my = 4;
	}
}

function clear(){
	ctx.clearRect(0,0,WIDTH,HEIGHT);
}

function draw(){
	clear();
	//while game is running
	if(gameover != true){
		drawPacman(x,y,size);
		drawCircle(circleX,circleY,15)
		drawGhost(ghostX,ghostY,40)

		//bounce off wall
		if(x+mx>WIDTH-size || x+mx <0){
			mx = -mx;
		} else if (y+my > HEIGHT-size || y+my < 0){
			my = -my;
		}

		//move player
		x += mx;
		y += my;
		
		followPacman();

		collisionCheck()
		collisionHandle()
	}
}
function collisionCheck(){
	if( x > circleX-30 && x < circleX+30 && y > circleY-30 && y < circleY+30 ){
		circleCollision = true;
	} else {
		circleCollision = false;
	}
}

function collisionHandle(){
	if(circleCollision){
		circleX = Math.floor(Math.random()*WIDTH-50);
		circleY = Math.floor(Math.random()*HEIGHT-50);
		score += 1;
		document.getElementById("score").innerHTML = "Score : " + score;
	}
}

function followPacman(){
	if (ghostX < x){
		ghostX += 1;
	}
	if (ghostX > x){
		ghostX -= 1;
	}
	if (ghostY < y){
		ghostY += 1;
	}
	if (ghostY > y){
		ghostY -= 1;
	}

}

init();


