class Tree {
    constructor(x,y,width,height) {
        var options = {
            isStatic: true
        }
        this.image = loadImage("Plucking mangoes/tree.png")
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world,this.body)
    }
    display() {
          image(this.image,this.body.position.x,this.body.position.y,this.width,this.height)
          
    
    }
}