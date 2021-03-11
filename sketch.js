var player,form,game;
var gameState = 0,playerCount=0;
var db;
var allPlayers;

function setup(){
    createCanvas(500,500);
    
    db = firebase.database();

    game = new Game();
    game.getState();
    game.start();
}

function draw(){
    if(playerCount===4){
        game.updateState(1);
    }
    if(gameState===1){
        clear();
        game.play();
    }
}
