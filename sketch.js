
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var ground,tree,stone,boy;
var mango1,mango2,mango3,mango4,mango5,elastic;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var options={
		isStatic:true
	}
	ground=Bodies.rectangle(400,688,800,60,options)
	World.add(world,ground)
	
	tree=new Tree()
	stone=new Stone()
	boy= new Boy()
	
	mango1= new Mango(720,300,60,60)
	mango2= new Mango(586,180,60,60)
	mango3= new Mango(610,350,60,60)
	mango4= new Mango(500,300,60,60)
	mango5= new Mango(650,250,60,60)

	elastic= new Elastic(stone.body,{x:150, y:550});
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
 rect(ground.position.x,ground.position.y,800,60)
  
  tree.display()
  stone.display()
  boy.display()
 mango1.display()
  mango2.display()
  mango3.display()
  mango4.display()
  mango5.display()
elastic.display()

 
drawSprites();
detectollision(stone,mango1)
detectollision(stone,mango2)
detectollision(stone,mango3)
detectollision(stone,mango4)
detectollision(stone,mango5)
}
function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
   elastic.fly();
}

function detectollision(lstone,lmango){
mangoBodyPosition=lmango.body.position
stoneBodyPosition=lstone.body.position

var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
if(distance<-lmango.r+lstone.r)
{
Matter.Body.setStatic(lmango.body,false)
}
}

function keyPressed(){
	if(keyCode===32){
		Matter.Body.setPosition(stone.body,{x:150,y:550})
	    launcherObject.attach(stone.body)
	}
}