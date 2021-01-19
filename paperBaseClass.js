class PaperBaseClass{
    constructor(x, y, radius, options) {
        var options = {
            'isStatic':false,
            'restitution':0.2,
            'friction':0.5,
            'density':1.2

        }

        this.body = Bodies.circle(x, y, radius, options);
            this.radius = radius;
            World.add(world, this.body);
       
      }
}