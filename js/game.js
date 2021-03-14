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
    async start(){
        if(gameState === 0){
            player = new Player();
            var playerCountRef = await db.ref("playerCount").once("value");
            if(playerCountRef.exists()){
                playerCount = playerCountRef.val();
                player.getPlayerCount();
            }
            form = new Form();
            form.display();
        }
        car1 = createSprite(100,200);
        car2 = createSprite(300,200);
        car3 = createSprite(500,200);
        car4 = createSprite(700,200);
        cars = [car1,car2,car3,car4];
    }
    play(){
        form.hide();
       // text("Game Started!",200,100);
        Player.fetchPlayerInfo();
        if(allPlayers !== undefined){
            var y;
            var x = 180;
            var index = 0;
            for(var i in allPlayers){
                //text(allPlayers[i].name+ " : " +allPlayers[i].distance,100,y=y+50);
                index+=1;
                x+=200;
                y = displayHeight - allPlayers[i].distance;
                cars[index-1].x = x;
                cars[index-1].y = y;
                if(index===player.index){
                    cars[index-1].shapeColor = "red";
                    camera.position.x = displayWidth/2;
                    camera.position.y = y;
                }
            }
        }
        if(keyIsDown(UP_ARROW)&&player.index!==null){
            player.distance+=50;
            player.update();
        }
        drawSprites();
    }
}