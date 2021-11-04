class Bone{
    constructor(x,y,w,h){
        var options = {
            isStatic:false
        }
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.image = loadImage("./Drone_stuff/bone.png");
        this.body = Bodies.rectangle(x, y, w, h,options);
        World.add(world, this.body);
    }

    display(){
        push();
        translate(this.x, this.y);
        imageMode(CENTER);
        image(this.image, 0, 0, this.w, this.h);
        pop();
    }

}