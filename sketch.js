var ship,sea,seaImg,shipImg;

function preload(){
seaImg =loadImage("sea.png");
shipImg =loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");

}



function setup(){
  createCanvas(400,400);
  sea = createSprite(400,200);
  ship = createSprite(130,200,30,30);
  
  sea.addImage("mar",seaImg);
  ship.addAnimation("navio",shipImg);
  sea.velocityX=-5;
  sea.scale=0.3;
  ship.scale=0.25;

}

function draw() {
  background("blue");
   
if (sea.x < 200){
sea.x = sea.width/2;

}
 

drawSprites();

}
