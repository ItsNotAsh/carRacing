class Player{

    constructor(){

    this.name = null;
    this.index = null;
    this.distance = 0;

    }


 getPlayerCount(){
  
    var playerCountRef = database.ref("playerCount")
    playerCountRef.on("value", (data)=>{

    playerCount = data.val();

    })  

 }

 updatePlayerCount(count){

    database.ref("/").update({

    playerCount: count

    })

 }

 update(){

   database.ref("players/player"+ this.index).set({

    name: this.name,
    distance: this.distance 

   })

 }

 static getPlayerInfo(){

    var playerInfoRef = database.ref("players")
    playerInfoRef.on("value", (data)=>{

       allPlayers = data.val();

    })

 }
}