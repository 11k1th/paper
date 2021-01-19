class Paper extends PaperBaseClass {

    constructor(x, radius) {

        var options = {
            'isStatic':false,
            'restitution':0.2,
            'friction':0.5,
            'density':1.2
        }
        super(x, 100, radius, options);
    }
}