var database;
var position;
var game, form, player;
var playerCount=0, gameState=0;


function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(windowWidth, windowHeight);
  game=new Game();
  game.start()

}

function draw(){
 
}
