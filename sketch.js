//bugs I want to fix
//remove arrows when hiting the sky and the drone
//round money to the nearest hundredth
//bone destroyed when dog finished with the bone

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
var drone, droneImg;
var invisibleWall, invisibleWallImg;
var arrows = [];
var shooting = [];
var dogBones = [];
var drones = [];
var button;
//var bone;

//data
var money;
var arrowsNumber;
var dogLevel;
var bones = 10;



function preload() {
  backgroundImg = loadImage("./material/Background/background.png");
  playerImg = loadImage("./material/Player/You.png");
  dogAnimation = loadAnimation("./material/Dog_Animation/Dog.png", "./material/Dog_Animation/Dog_2.png");
  invisibleWallImg = loadImage("./material/Background/background copy.png");
  droneImg = loadImage("./material/Drone_stuff/drone.png");
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
  bg = createSprite(width / 2, height / 2, 1, 1);
  bg.addImage(backgroundImg);

  //player
  player = createSprite(75, 638, 1, 1);
  player.addImage(playerImg);
  player.scale = 0.40;

  //bow
  bow = new Bow(72, 622, 200, 200);

  ground = new Ground(800, 775, 1600, 50);

  //arrow
  var arrow = new Arrow(72, 610, 100, 100);
  arrows.push(arrow)

  //dog
  dog = createSprite(width * 3 / 4 + 100, height * 3 / 4 - 10, 1, 1);
  dog.addAnimation("normal", dogAnimation);
  dog.frameDelay = 10;


  //wall to cover the drone
  invisibleWall = createSprite(1036, height / 2, 1, height);
  invisibleWall.addImage(invisibleWallImg);


  //button to add arrows
  button = createImg('./material/add.png');
  button.position(0, height - 90)
  button.size(50, 50);
  button.mouseClicked(addArrows);

  //button to give bones
  boneButton = createImg('./material/Drone_stuff/bone.png');
  boneButton.position(1200, 100)
  boneButton.size(100, 50);
  boneButton.mouseClicked(addBone);
}


function draw() {
  background(255);
  Engine.update(engine);

  ground.display();

  //operate drone
  if (frameCount % 100 == 0) {
    drone = new Drone;
  }
  if (drone != undefined) {
    drone.fly();
  }

  //add money
  if (frameCount % 10 == 0) {
    money += 0.1 * dogLevel;
  }
  money = Math.round(money,2);

  drawSprites();

  //display objects
  //arrow.display();
  bow.display();
  //if(bone != undefined){
  //bone.display();
  //}

  for (var i = 0; i < arrows.length; i++) {
    //console.log(arrows[i].body);
    showArrows(arrows[i]);
    collision(i);
  }

  for (var i = 0; i < shooting.length; i++) {
    showArrows(shooting[i]);
  }

  for (var i = 0; i < dogBones.length; i++) {
    showBones(dogBones[i]);
  }

  //detect arrows
  //arrow.touch();


  //text
  fill("yellow");
  textSize(40);
  text("$" + money, 10, 50);

  fill("black");
  textSize(40)
  text("Arrows: " + arrowsNumber, 50, height - 50);

  fill("brown");
  text("LV: " + dogLevel,1000,50);

}
function keyPressed() {
  if (keyCode === 32) {
    if (arrowsNumber > 0) {
      arrows[0].shoot();
      shooting.push(arrows[0]);
      arrows.pop(arrows[0]);
      arrowsNumber -= 1;
    }
  }
}


function keyReleased() {
  if (keyCode === 32) {
    if (arrowsNumber > 0) {
      var arrow = new Arrow(72, 610, 100, 100);
      arrows.push(arrow);
    }
  }
}

function addArrows() {
  if (money > 10) {
    money -= 10;
    arrowsNumber += 1;
    if (arrowsNumber == 1) {
      var arrow = new Arrow(72, 610, 100, 100);
      arrows.push(arrow);
    }
  }
}

function addBone() {
  var bone = new Bone(1200, 100, 100, 50);
  dogBones.push(bone);
}

function showArrows(arrow) {
  if (arrow) {
    arrow.display();
  }
}

function showBones(bone) {
  if (bone) {
    bone.display();
  }
}

function collision(j){
  for (var i = 0; i < drones.length;i++){
    if(arrows[j] !== undefined && drones[i] !== undefined){
      var collision = Matter.SAT.collides(arrows[j].body,drones[i]);

      if(collision.collided){
        delete drones[i];

        Matter.World.remove(world,arrows[j].body);
        delete arrows[j];
      }
    }
  }
}



