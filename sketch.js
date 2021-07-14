var runner
var path
var coin
var bomb
var energy
var boundarie1
var boundarie2



function preload(){
  bombImg = loadImage("bomb.png");
pathImg = loadImage("path.png");
runnerImg = loadAnimation("runner-2.png","runner-1.png")
bombImg = loadImage("bomb.png")

coinImg = loadImage("coin.png")
energyImg = loadImage("energyDrink.png")
}

function setup(){
  createCanvas(400,400);
  path=createSprite(200,50)
path.addImage("path.png",pathImg)
path.velocityY=5
path.scale=1.2

runner=createSprite(200,300);

runner.addAnimation("runner",runnerImg)
runner.scale=0.1

bomb=createSprite(100,100)
bomb.addImage("bomb.png",bombImg)
bomb.scale=0.1

coin=createSprite(200,200);
coin.addImage("coin.png",coinImg)
coin.scale=0.6

energy=createSprite(300,150,)
energy.addImage("energyDrink.png",energyImg)
energy.scale=0.2

boundarie1=createSprite(400,200,10,400)
boundarie2=createSprite(10,200,10,400)


}

function draw() {
  background(0);
if(path.y > 400){
  path.y = height / 3;
}
runner.x = mouseX;

var edges = createEdgeSprites()
runner.collide(edges)
  drawSprites();
}
