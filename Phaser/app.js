var game = new Phaser.game(800,600, Phaser.AUTO,'',
	{preload, create:create, update: update});

function preload(){
	game.load.image('star', 'assets/star.png');
}

function create(){
	game.add.sprite(400,300,'star')
}

function update(){

}