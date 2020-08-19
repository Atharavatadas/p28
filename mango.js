class Mango {
    constructor(x,y,width,height) {
        var options = {
            isStatic: true,
        }
        this.image = loadImage("Plucking mangoes/mango.png")
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.height = height;
        this.width = width;
        World.add(world, this.body)
    }
    display() {
        image(this.image,this.body.position.x,this.body.position.y,this.width,this.height)
    }
}
