class Rope {

    constructor(body1, body2, offsetX, offsetY){
        this.offsetX = offsetX;
        this.offsetY=offsetY;
        var options={
        bodyA: body1, 
        bodyB: body2, 
        pointB:{x:this.offsetX, y:this.offsetY}
    }


        this.rope = Matter.Constraint.create(options);
        World.add (world, this.rope);
    }

    display(){
       
        
        var pointA = this.rope.bodyA.position;
        var pointB = this.rope.bodyB.position;
       
        strokeWeight(4)
        var ancor1X = pointA.x;
        var ancor1Y = pointA.y

        var ancor2X = pointB.x+this.offsetX;
        var ancor2Y = pointB.y+this.offsetY;

        line(ancor1X, ancor1Y, ancor2X, ancor2Y );
    }

}