class Bone{
    constructor(x,y,w,h){
        var options = {
            //isStatic:false,
            restitution:0,
            frictionAir:0,
        }
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.image = loadImage("./material/Drone_stuff/bone.png");
        this.body = Bodies.rectangle(x, y, w, h,options);
        World.add(world, this.body);
    }

    display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.image, 0, 0, this.w, this.h);
        pop();
    }

}