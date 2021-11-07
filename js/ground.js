class Ground{
    constructor(x,y,w,h){
        var ground_property={
            isStatic:true
        }
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.body = Bodies.rectangle(x, y, w, h,ground_property);
        World.add(world, this.body);
    }

    display(){
        fill("yellow");
        rect(this.x, this.y,this.w , this.h);
    }
}