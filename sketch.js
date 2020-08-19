
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var tree,mango,boy1,stone,sling;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	tree = new Tree(360,200,220,220)
	mango = new Mango(500,270,30,30)
	boy1 = new Boy1(100,300,100,180)
	stone = new Stone(110,330,20,20)


 
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  tree.display()
  mango.display()
  boy1.display()
   stone.display()
   detectCollision(stone,mango)


  drawSprites();
 
}

function keyPressed() {
	if(keyCode ===  32) {
		Matter.Body.setPosition(stone.body, {x:235, y:420})
		sling.attach(stone.body)
	}
}

function detectCollision(lstone,lmango) {
	   mangoBodyPostion = lmango.body.position
	   stoneBodyPosition = lstone.body.position

	   var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPostion.x, mangoBodyPostion.y)
	   if(distance<=lmango.r+lstone.r) {
		   Matter.body.setStatic(lmango.body,false)
	   }
}



