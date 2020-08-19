class Boy1 {
    constructor(x,y,width,height) {
        var options = {
            isStatic: true
        }
        this.body = Bodies.rectangle(x,y,width,height,options)
        this.width = width;
        this.height = height;
        this.image= loadImage("Plucking mangoes/boy.png")
        World.add(world,this.body)
    }
    display() {
        image(this.image, this.body.position.x,this.body.position.y,this.width,this.height)
    }
}