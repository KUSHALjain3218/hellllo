var canva,gameState, contestantCount, database, question, contestant;

function setup(){
  canvas = createCanvas(850,400);
  database = firebase.database();
 
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  background(255,230,1);

  
}
