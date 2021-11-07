class Drone{
    constructor(){
        this.drone = createSprite(width-590,100,1,1);
        this.drone.addImage(droneImg);
        this.drone.scale = 0.25;
        this.drone.depth = invisibleWall.depth - 1;
        //this.drone.lifetime = 250;
        drones.push(this.drone);

    }

    fly(){
        this.drone.velocityX = -5;
    }
}