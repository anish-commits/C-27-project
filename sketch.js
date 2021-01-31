
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
	roof = new Roof(600,50,500,20);
	bob1 = new Bob (400,600,50);
	bob2 = new Bob (500,600,50);
	bob3 = new Bob (600,600,50);
	bob4 = new Bob (700,600,50);
	bob5 = new Bob (800,600,50);
	rope1 = new Rope (bob1.body,roof.body,-200,0);
	rope2 = new Rope (bob2.body,roof.body,-100,0);
	rope3 = new Rope (bob3.body,roof.body,0,0);
	rope4 = new Rope (bob4.body,roof.body,100,0);
	rope5 = new Rope (bob5.body,roof.body,200,0);
	


	

  
}


function draw() {
  rectMode(CENTER);
  background("blue");
  roof.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
 
  drawSprites();
 
}

function keyPressed() {
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-200,y:-80});
	}
	if(keyCode===DOWN_ARROW){
		Matter.Body.applyForce(bob5.body,bob5.body.position,{x:200,y:-80});
	}
 }

