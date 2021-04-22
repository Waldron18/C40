class Form{
    constructor(){
        this.input = createInput("name");
        this.button = createButton("PLAY");
        this.button2 = createButton("RESET")
        this.greeting = createElement("h2");
    }
    hide(){
        this.input.hide();
        this.button.hide();
        this.greeting.hide();
    }
    display(){
        var title = createElement("h2","Car Racing Game");
        title.position(displayWidth/2 - 80,0);
        
        this.input.position(displayWidth/2 - 80,displayHeight/2);
        
        this.button.position(displayWidth/2 - 80,displayHeight/2 + 100);
        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playerCount = playerCount+1;
            player.index = playerCount;
            player.updateCount(playerCount);
            player.update();
            this.greeting.html("Welcome! "+player.name);
            this.greeting.position(displayWidth/2 - 80,displayHeight/2);
        });
        this.button2.position(displayWidth/2-80, displayHeight/20);
        this.button2.mousePressed(()=>{
            db.ref('/').set({
                playerCount:0,
                gameState:0,
                carsAtEnd:0
            })
            location.reload();
        })

    }
}