class Form{

    constructor(){

    this.title = createElement("h1");
    this.input = createInput("").attribute("placeholder", "enter name")
    this.button = createButton("PLAY");
    this.greeting = createElement("h3");

    }

    hide(){

      this.input.hide();
      this.button.hide();
      this.title.hide();
      this.greeting.hide();

    }

    display(){

     this.title.html("Car Racing"); 
     this.title.position(windowWidth/2-50, 20);
     this.input.position(windowWidth/2-40, windowHeight/2-100);
     this.button.position(windowWidth/2-40, windowHeight/2-50);

     this.button.mousePressed(()=>{

     this.input.hide();
     this.button.hide();

     player.name = this.input.value();
     //console.log(name);

     playerCount += 1;
     player.index = playerCount

     player.update();

     player.updatePlayerCount(playerCount)

     this.greeting.html("Hello, " + player.name)
     this.greeting.position(windowWidth/2-40, windowHeight/2-40);

     })

    }

}