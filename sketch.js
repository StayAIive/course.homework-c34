
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bg, backgroundImg;
var dog, dogAnimation;
var player, playerImg;
var bow, bowImg;
var arrow;


function preload() {
  backgroundImg = loadImage("./The Background/background.png");
  playerImg = loadImage("./Player/You.png");
  //bowImg = loadImage("./Player/yourBow.png")
  dogAnimation = loadAnimation("./Dog Animation/Dog.png","./Dog2.png");

}

function setup() {
  createCanvas(1584, 792);

  engine = Engine.create();
  world = engine.world;

  //background
  bg = createSprite(width / 2, height / 2, 1,1);
  bg.addImage(backgroundImg);

  //player
  player = createSprite(75,638,1,1);
  player.addImage(playerImg);
  player.scale = 0.40;

  //bow
  bow = new Bow(72,622,200,200);

  //arrow
  arrow = new Arrow(72,610,100,100);

  //dog
  dog = createSprite(width*3/4+100,height*3/4-10,1,1);
  dog.addAnimation("normal",dogAnimation);
  dog.frameDelay = 10;
}


function draw() {
  background(255);
  Engine.update(engine);


  drawSprites();

  bow.display();
  arrow.display();

}

function keyPressed(){
  if (keyCode === 32) {
    console.log(bow.body);
    arrow.shoot(bow.body.angles);
  }
}





