class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.02,
            length: 20
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);

        this.image1 = loadImage("sprites/sling1.png");
        this.image2 = loadImage("sprites/sling2.png");
        this.image3 = loadImage("sprites/sling3.png");
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        image(this.image1,260,20);
        image(this.image2,230,20);
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            if(pointA.x<260){
                line(pointA.x-25, pointA.y+10, pointB.x-25, pointB.y+15);
                line(pointA.x+25, pointA.y-5, pointB.x+25, pointB.y+15);
                image(this.image3,pointA.x-30,pointA.y-5,15,25);
            }
            else if(pointA.x>265){
                line(pointA.x-18, pointA.y+10, pointB.x-25, pointB.y+15);
                if (pointA.x>285){
                    line(pointA.x+18, pointA.y-1, pointB.x+25, pointB.y+15);
                }
                image(this.image3,pointA.x+25,pointA.y-5,15,25); 
            }
        }
    }
    
}