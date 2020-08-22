class Particle{
    constructor(x,y,radius,isStatic){
        var options={
            isStatic:isStatic,
            restitution:0.8
        }
        this.body=Bodies.circle(x,y,radius,options);
        World.add(world,this.body);
        this.radius=radius;
        this.colour1=random(0,200);
        this.colour2=random(0,200);
        this.colour3=random(0,200);
    }
    display(){
        var position=this.body.position;
        var angle = this.body.angle;
        fill(this.colour1,this.colour2,this.colour3);
        push();
        translate(position.x,position.y);
        rotate(angle)
        ellipse(0,0,this.radius*2);
        pop()
    }
}