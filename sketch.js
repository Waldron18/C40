var player,form,game;
var gameState = 0,playerCount;
var db;
var allPlayers;
var car1,car2,car3,car4;
var cars;

function setup(){
    createCanvas(displayWidth-30,displayHeight-70);
    
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
