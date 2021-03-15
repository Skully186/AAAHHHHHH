
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	

	engine = Engine.create();
	world = engine.world;

	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);

	Lside=createSprite(300,620,20,100)
    Bside=createSprite(width/2,650,200,20)
    Rside=createSprite(500,620,20,100)

	Rside.shapeColor=("red")
    Bside.shapeColor=("red")
    Lside.shapeColor=("red")

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)





	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
 
  drawSprites();
 
}





