
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var paper1 ,ground1,box1,box2;
var world,box3;
function preload()
{
	
}

function setup() {
	createCanvas(1600, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	paper1=new paper(200,400,40)
	box3 = new Box2(1100,440,200,80);
	box1=new Box(1020,430,15,70);
	box2=new Box(1180,430,15,70);
    ground1=new ground(width/2,470,width,20);
	
	Engine.run(engine);
   var render = Render.create({
	   element:document.body,
	   engine:engine,
	   options:{
		   width:1200,
		   height:700,
		   wireframes:false
	   }
   })
   
	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background("lavender");
  paper1.display();
  box1.display();
  box2.display();
  box3.display();
  ground1.display();
//  keyPressed();
//   drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){

		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:85,y:-85});
	}
}

