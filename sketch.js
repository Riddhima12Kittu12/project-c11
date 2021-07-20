var track , trackImage;
var jaxon;


function preload(){
 trackImage = loadImage("path.png"); 

 jaxon_running  = loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
  createCanvas(400,400);
  track = createSprite(200,180,400,20);
  track.addImage("track",trackImage);
  track.scale = 0.8
  track.velocityY = +4;

  jaxon = createSprite(190,230,20,50);
  jaxon.addAnimation("running", jaxon_running);
  jaxon.scale = 0.07;
}

function draw() {
  background(0);

  jaxon.x = World.mouseX;

if(track.y > 400){
  track.y = height/2;
}

drawSprites();
}
