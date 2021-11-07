
class Arrow {
    constructor(x, y, width, height) {
      var options = {
        isStatic: true,
        density: 0.1
      };
      this.width = width;
      this.height = height;
      this.body = Bodies.rectangle(x, y, this.width, this.height, options);
      this.image = loadImage("./material/Player/arrow.png");
      this.velocity = 0;
      //this.body.depth = invisibleWall.depth-1
      World.add(world, this.body);
    }
    
    //create a shoot function
    shoot(){
      var newAngle = bow.body.angle+10;
      newAngle = newAngle *(3.14/180);
      var velocity = p5.Vector.fromAngle(newAngle);
      velocity.mult(2.5);
      Matter.Body.setStatic(this.body, false);
      Matter.Body.setVelocity(this.body, {
        x: velocity.x *(180/3.14), 
        y: velocity.y * (180/3.14)});
    }
  
    display() {
      
    
      var pos = this.body.position;
      this.archerAngle = bow.body.angle;
      var angle = this.archerAngle+35;
  
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image, 0, 0, this.width, this.height);
      pop();
    }

    touch(){
      //console.log(this.body.position.y);
      if(this.body.position.y < 0){
        //Matter.World.remove(world,this.body);
        //delete this.body;
        //console.log("yes");
      }
    }
  }