class Form{
    constructor(){
        this.input = createInput("name");
        this.button = createButton("PLAY");
        this.greeting = createElement("h2");
    }
    hide(){
        this.input.hide();
        this.button.hide();
        this.greeting.hide();
    }
    display(){
        var title = createElement("h2","Car Racing Game");
        title.position(150,0);
        
        this.input.position(150,100);
        
        this.button.position(150,200);
        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playerCount = playerCount+1;
            player.index = playerCount;
            player.updateCount(playerCount);
            player.update();
            this.greeting.html("Welcome! "+player.name);
            this.greeting.position(150,150);
        });

    }
}