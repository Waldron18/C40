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
        car1.addImage(car1Img);
        car2 = createSprite(300,200);
        car2.addImage(car2Img);
        car3 = createSprite(500,200);
        car3.addImage(car3Img);
        car4 = createSprite(700,200);
        car4.addImage(car4Img);
        cars = [car1,car2,car3,car4];
    }
    play(){
        form.hide();
       // text("Game Started!",200,100);
        Player.fetchPlayerInfo();
        player.getcarsAtEnd();
        if(allPlayers !== undefined){
            background(groundImg);
            image(trackImg,0,-displayHeight*4,displayWidth,displayHeight*5);
            var y;
            var x = 180;
            var index = 0;
            for(var i in allPlayers){
                //text(allPlayers[i].name+ " : " +allPlayers[i].distance,100,y=y+50);
                index+=1;
                x+=250;
                y = displayHeight - allPlayers[i].distance;
                cars[index-1].x = x;
                cars[index-1].y = y;
                if(index===player.index){
                    rectMode(CENTER);
                    fill("blue");
                    rect(x,y,100,150);
                    camera.position.x = displayWidth/2;
                    camera.position.y = y;
                }  
            }
        }
        if(player.distance > 4150){
            player.rank += 1;
            Player.updatecarsAtEnd(player.rank);
            gameState = 2;
        }

        if(keyIsDown(UP_ARROW)&&player.index!==null){
            player.distance+=50;
            player.update();
        }
        drawSprites();
    }
    end(){
      
        Player.fetchPlayerInfo();
        for(var i in allPlayers){
            console.log(allPlayers[i].name+" : "+allPlayers[i].rank);
        }
    }
}