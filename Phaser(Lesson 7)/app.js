console.log('Rafael is cool');

var game = new Phaser.Game(800,600,Phaser.AUTO,'',{preload:preload,create:create,update:update});
var score = 0;
var life = 3;

function preload(){
	game.load.image('sky', 'assets/sky.png');
	game.load.image('ground', 'assets/platform.png');
	game.load.image('star', 'assets/star.png');
	game.load.spritesheet('dude', 'assets/dude.png', 32, 48);
	game.load.spritesheet('baddie', 'assets/baddie.png', 32, 32);
}

function create(){
	game.physics.startSystem(Phaser.Physics.ARCADE);
	
	//Create Sky
	game.add.sprite(0,0,'sky');
	
	//Create Group of Platforms
	platforms = game.add.physicsGroup();
	platforms.enableBody = true;
	
	//Create Ground
	var ground = platforms.create(0,550,'ground');
	ground.scale.setTo(2,2);
	ground.body.immovable = true;
	
	//Create Ledges
	var ledge = platforms.create(400,400,'ground');
	ledge.body.immovable = true;
	ledge = platforms.create(-150,250,'ground');
	ledge.body.immovable = true;
	
	//Create Player Sprite
	player = game.add.sprite(32,400,'dude');
		
		//Animate Player Sprite
		player.animations.add('left',[0,1,2,3],25,true);
		player.animations.add('right',[5,6,7,8],25,true);
		game.physics.arcade.enable(player);
		player.body.bounce.y = 0.2;
		player.body.gravity.y = 300;
		player.body.collideWorldBounds = true;
		
		//Create Enemies
		enemy1 = game.add.sprite(760,20,'baddie');
			
			//Animate Enemy
			enemy1.animations.add('left',[0,1],10,true);
			enemy1.animations.add('right',[2,3],10,true);
			game.physics.arcade.enable(enemy1);
			enemy1.body.bounce.y = 0.2;
			enemy1.body.gravity.y = 500;
			enemy1.body.collideWorldBounds = true;
		enemy2 = game.add.sprite(10,20,'baddie');
			
			//Animate Enemy2
			enemy2.animations.add('left',[0,1],10,true);
			enemy2.animations.add('right',[2,3],10,true);
			game.physics.arcade.enable(enemy2);
			enemy2.body.bounce.y = 0.2;
			enemy2.body.gravity.y = 500;
			enemy2.body.collideWorldBounds = true;
		enemy3 = game.add.sprite(10,20,'baddie');
			//Animate Enemy3
			enemy3.animations.add('left',[0,1],10,true);
			enemy3.animations.add('right',[2,3],10,true);
			game.physics.arcade.enable(enemy3);
			enemy3.body.bounce.y = 0.2;
			enemy3.body.gravity.y = 500;
			enemy3.body.collideWorldBounds = true;

		//Create Keyboard Entries
		cursors = game.input.keyboard.createCursorKeys();

		//Create the Stars
		stars = game.add.physicsGroup();
		stars.enableBody = true;
		
		//We will create 12 stars evenly spaced
		for(var i = 0; i < 12; i++){
			var star = stars.create(i * 70,0,'star');
			star.body.gravity.y = 200;
			star.body.bounce.y = 0.7 + Math.random() * 0.2;
		}

		//set text style
		var style = {font: "bold 32px Arial", fill: "#fff", boundsAllignH: "center", boundsAlignV: "middle"};
		
		//position score
		scorelabel = game.add.text(-60,0, "Your score is : ", style);
		scoretext = game.add.text(70,0,score,style);
		scorelabel.setShadow(3,3,'rgba(0,0,0,0.5)',2);
		scoretext.setShadow(3,3,'rgba(0,0,0,0.5)',2);

		//set the text bounds
		scorelabel.setTextBounds(0,520,800,100);
		scoretext.setTextBounds(0,520,800,100);

		//Doing same thing for lives
		lifelabel = game.add.text(-300,0,"Lives : ", style);
		lifetext = game.add.text(-240,0,life,style);
		lifelabel.setShadow(3,3,'rgba(0,0,0,0.5)',2);
		lifetext.setShadow(3,3,'rgba(0,0,0,0.5)',2);
		lifelabel.setTextBounds(0,520,800,100);
		lifetext.setTextBounds(0,520,800,100);
}

function update(){
	//Collide Player + Enemy with platform
	game.physics.arcade.collide(player,platforms);
	game.physics.arcade.collide(enemy1,platforms);
	game.physics.arcade.collide(enemy2,platforms);
	game.physics.arcade.collide(enemy3,platforms);

	//Reset player velocity when no events
	player.body.velocity.x = 0;

	//Player movement by keys
	if(cursors.left.isDown){
		//Move Left
		player.body.velocity.x = -150;
		player.animations.play('left');
	} else if(cursors.right.isDown){
		//move right
		player.body.velocity.x = 150;
		player.animations.play('right');
	} else {
		player.animations.stop();
		player.frame = 4;
	}

	//Allow player to jump
	if(cursors.up.isDown && player.body.touching.down){
		player.body.velocity.y = -300;
	}

	//Enemy AI
	if(enemy1.x > 759){
		enemy1.animations.play('left');
		enemy1.body.velocity.x = -300;
	} else if(enemy1.x < 405){
		enemy1.animations.play('right');
		enemy1.body.velocity.x = 300;
	}
	if(enemy2.x > 200){
		enemy2.animations.play('left');
		enemy2.body.velocity.x = -300;
	} else if(enemy2.x < 21){
		enemy2.animations.play('right');
		enemy2.body.velocity.x = 300;
	}
	if(enemy3.x > 759){
		enemy3.animations.play('left');
		enemy3.body.velocity.x = -300;
	} else if(enemy3.x < 51){
		enemy3.animations.play('right');
		enemy3.body.velocity.x = 300;
	}

	//Collide Stars with platforms
	game.physics.arcade.collide(star,platforms);
	game.physics.arcade.overlap(player, star, collectStar, null, this);
	game.physics.arcade.overlaps(player, enemy1, loseLife, null, this);
	game.physics.arcade.overlaps(player, enemy2, loseLifeLeft, null, this);
	game.physics.arcade.overlaps(player, enemy3, loseLife, null, this);
}

//Define collectStar
function collectStar(player,star){
		
		//Remove star
		star.kill();
		
		//Update score variable
		score = score + 1;
		
		//Reflect in Text
		scoretext.setText(score);

		//Create New Star
		star = stars.create(Math.floor(Math.random()*750), 0, 'star');
		star.body.gravity.y = 200;
		star.body.bounce.y = 0.7 + Math.random() * 0.2;
}

//Define loseLife
function loseLife(player, enemy){
	//Lose life
	life = life - 1;
	lifetext.setText(life);

	//Remove + Respawn
	enemy.kill();
	enemy.reset(760, 20);
}

//Define loseLifeLeft
function loseLifeLeft(player, enemy){
	//Lose life
	life = life - 1;
	lifetext.setText(life);

	//Remove + Respawn
	enemy.kill();
	enemy.reset(10, 20);
}





