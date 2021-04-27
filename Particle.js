class Particle{
    constructor(x, y, radius){
        var options={
            isStatic:false,
            restitution:0.5
        }
        this.radius=radius;
        this.body=Bodies.circle(x, y, radius, options);
        this.color=color(random(0,255), random(0,255), random(0,255));
        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;

        push();
        translate(pos.x, pos.y);
        rotate(this.body.angle);
        fill(this.color);
        ellipseMode(RADIUS)
        ellipse(0, 0, this.radius, this.radius);
        pop();
    }
}