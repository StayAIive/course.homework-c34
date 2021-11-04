//bugs I want to fix
//remove arrows when hiting the sky and the drone
//arrows able to shoot even when it is released
//round money to the nearest hundredth

//World setup
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

//visuals
var bg, backgroundImg;
var dog, dogAnimation;
var player, playerImg;
var bow, bowImg;
var drone,droneImg;
var invisibleWall,invisibleWallImg;
var arrow;
var button;
var bone;

//data
var money;
var arrowsNumber;
var dogLevel;
var bones = 10;



function preload() {
  backgroundImg = loadImage("./Background/background.png");
  playerImg = loadImage("./Player/You.png");
  dogAnimation = loadAnimation("./Dog_Animation/Dog.png","./Dog_Animation/Dog_2.png");
  invisibleWallImg = loadImage("./Background/background copy.png");
  droneImg = loadImage("./Drone_stuff/drone.png");
}

function setup() {
  createCanvas(1600, 800);

  engine = Engine.create();
  world = engine.world;

  //initizalize data
  money = 0;
  arrowsNumber = 10;
  dogLevel = 1;

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
  if(arrow == undefined){
    arrow = new Arrow(72,610,100,100);
  }

  //dog
  dog = createSprite(width*3/4+100,height*3/4-10,1,1);
  dog.addAnimation("normal",dogAnimation);
  dog.frameDelay = 10;


  //wall to cover the drone
  invisibleWall = createSprite(1036,height/2,1,height);
  invisibleWall.addImage(invisibleWallImg);


  //button to add arrows
  button = createImg('./add.png');
  button.position(900,height-90)
  button.size(50,50);
  button.mouseClicked(addArrows);

  //button to give bones
  boneButton = createImg('./Drone_stuff/bone.png');
  boneButton.position(1200,100)
  boneButton.size(100,50);
  boneButton.mouseClicked(addBone);
}


function draw() {
  background(255);
  Engine.update(engine);

  //operate drone
  if(frameCount % 100 == 0){
    drone = new Drone;
  }
  if(drone != undefined){
    drone.fly();
  }

  //add money
  if(frameCount % 10 == 0){
    money += 0.1 * dogLevel;
  }

  drawSprites();

  //display objects
  arrow.display();
  bow.display();
  if(bone != undefined){
    bone.display();
  }

  //detect arrows
  arrow.touch();

  //if(arrow != undefined){
  //}

  //text
  fill("yellow");
  textSize(40);
  text("$"+ money,10,50);

  fill("black");
  textSize(40)
  text("Arrows: "+arrowsNumber,50,height-50);

}
function keyPressed(){
  if(keyCode === 32){
    if(arrowsNumber > 0){
      arrow.shoot(); 
      arrowsNumber -= 1;
    }
  }
}


function keyReleased(){
  if (keyCode === 32) {
    if(arrowsNumber > 0){
      arrow = new Arrow(72,610,100,100);
    }
  }
}

function addArrows(){
  if(money > 10){
    money -=10;
    arrowsNumber += 1;
    if(arrowsNumber == 1){
      arrow = new Arrow(72,610,100,100);
    }
  }
}


function addBone(){
  bone = new Bone(1200,100,100,50);
}




