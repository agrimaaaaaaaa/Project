var ship, sea;
function preload(){
ship = loadAnimation("ship-1.png","ship-2.png");
sea = loadAnimation ("sea.png")
}

function setup(){
  createCanvas(400,400);

  ship = createSprite(200,130, 100, 90);
}

function draw() {
  background("blue");

  drawSprites();
}
