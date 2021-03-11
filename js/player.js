class Player {
    constructor(){
        this.name = null;
        this.distance = 0;
        this.index = null;
    }

    getPlayerCount(){
        var playerCountRef = db.ref("playerCount");
        playerCountRef.on("value",function(data){
            playerCount = data.val();
        })
    }
    updateCount(count){
        db.ref("/").update({playerCount: count});
    }
    update(){
        var playerIndex = "players/player" + this.index
        db.ref(playerIndex).update({name: this.name, distance: this.distance});
    }

    static fetchPlayerInfo(){
        var playerInfoRef = db.ref("players");
        playerInfoRef.on("value",(data)=>{
            allPlayers = data.val();
        });
    }
}