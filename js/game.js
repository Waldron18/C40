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
}