class Player {
    constructor(){
        this.name = null;
        this.distance = 0;
        this.index = null;
        this.rank = 0;
    }

    getPlayerCount(){
        var playerCountRef = db.ref("playerCount");
        playerCountRef.on("value",function(data){
            playerCount = data.val();
        })
    }
    updateCount(count){
        db.ref("/").update({
            playerCount: count
        });
    }
    update(){
        var playerIndex = "players/player" + this.index
        db.ref(playerIndex).update({
            name: this.name, 
            distance: this.distance, 
            rank: this.rank});
    }

    static fetchPlayerInfo(){
        var playerInfoRef = db.ref("players");
        playerInfoRef.on("value",(data)=>{
            allPlayers = data.val();
        });
    }

    getcarsAtEnd(){
        db.ref('carsAtEnd').on("value",(data)=>{
            this.rank = data.val();
        })
    }

    static updatecarsAtEnd(rank){
        db.ref('/').update({carsAtEnd: rank});
    }

}