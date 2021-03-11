class Game {
    constructor(){

    }

    getState(){
        var gamestateRef = db.ref("gameState")
        gamestateRef.on("value",function(data){
            gameState = data.val();
        })
    }
    updateState(state){
        db.ref("/").update({gameState: state});
    }
    start(){
        if(gameState === 0){
            player = new Player();
            player.getPlayerCount();
            form = new Form();
            form.display();
        }
    }
    play(){
        form.hide();
        text("Game Started!",200,100);
        Player.fetchPlayerInfo();
        if(allPlayers !== undefined){
            var y = 100;
            for(var i in allPlayers){
                text(allPlayers[i].name+ " : " +allPlayers[i].distance,100,y=y+50);
            }
        }
        if(keyIsDown(UP_ARROW)&&player.index!==null){
            player.distance+=50;
            player.update();
        }
    }
}