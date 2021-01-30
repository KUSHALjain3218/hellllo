class Question {
  constructor() {
    this.input = createInput("NAME");
    this.greeting = createElement('h1');
    this.button = createButton('PLAY');
  }
hide(){
this.greeting.hide();
this.button.hide();
this.input.hide();

}
  display(){
    var title = createElement('h1');
    title.html("Car Racing Game");
    title.position(300, 0);
    
   
    this.input.position(250+100, 160);
    
    
    this.button.position(370+100, 200);

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();

      player.name = this.input.value();
      
      playerCount+=1;
      player.index = playerCount
      player.update()
      player.updateCount(playerCount);

      
      this.greeting.html("HELLOOOOO " + player.name )
      this.greeting.position(270, 160)

    });

  }
}
