var shipMoving,ship, edges;
var sea;  
var seaImg;

function preload(){
  shipMoving=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
  seaImg=loadImage("sea.png");
}
function setup(){
  createCanvas(1000,400);
  sea=createSprite(200,40,50,150);
  sea.addAnimation("running",seaImg);
  sea.scale=0.5;
  
  ship=createSprite(250,400,20,50);
  ship.addAnimation("running",shipMoving);
  edges=createEdgeSprites();
   
//sea.visible=false
  
  
  ship.scale= 0.15;
  ship.x=80;
  ship.y=70

}
function draw() {
  background(seaImg)
  
  sea.velocityX=-2
    
    if(sea.x<0){
    sea.x = sea.width/2
    }
    drawSprites()

  
 
}