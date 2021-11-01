
class Arrow {
    constructor(x, y, width, height) {
      var options = {
        isStatic: true,
        //density: 0.1
        friction:0.5
      };
      this.width = width;
      this.height = height;
      this.body = Bodies.rectangle(x, y, this.width, this.height, options);
      this.image = loadImage("./Player/arrow.png");
      this.velocity = 0;
      World.add(world, this.body);
    }
    
    //create a shoot function
    shoot(archerAngle){
      archerAngle += 35;
      this.velocity = p5.Vector.fromAngle(archerAngle*(3.14/180));
      console.log(this.body);
  
      this.velocity.mult(0.5);

  
      Matter.Body.setVelocity(this.body,{
        x:this.velocity.x * (180/3.14),
        y:this.velocity.y * (180/3.14)
      })
      console.log(this.velocity);

      Matter.Body.setStatic(this.body,false);
  
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
  }