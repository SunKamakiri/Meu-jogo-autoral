let player, login, game;
let gameState = 0

var spritePlayer


function setup(){
createCanvas(1200,600);

game = new Game()
game.start();
}

function draw(){
     background("grey");


     if(gameState === 1){
          game.historia();
          
     }

     if(gameState === 2){
          game.play()
     }

}