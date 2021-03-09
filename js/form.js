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
    }
}