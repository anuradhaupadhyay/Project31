class Plinko{
    constructor(x,y,radius,isStatic){
        var options={
            isStatic:isStatic,
            restitution:0.8
        }
        this.body=Bodies.circle(x,y,radius,options);
        World.add(world,this.body);
        this.radius=radius;
    }
    display(){
        var position=this.body.position;
        var angle = this.body.angle;
        fill(0,255,0);
        push();
        translate(position.x,position.y);
        rotate(angle)
        ellipse(0,0,this.radius*2);
        pop();
    }
}