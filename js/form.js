class Form{
    constructor(){

    }

    display(){
        var title = createElement("h2","Car Racing Game");
        title.position(150,0);
        var input = createInput("name");
        input.position(150,100);
        var button = createButton("PLAY");
        button.position(150,200);
        button.mousePressed(function(){
            input.hide();
            button.hide();
            var name = input.value();
            playerCount = playerCount+1;
            player.updateCount(playerCount);
            player.update(name);
            var greeting = createElement("h2","Welcome! "+name);
            greeting.position(150,150);
        });

    }
}