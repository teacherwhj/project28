
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var boy, boyImage,tree,stone,ground;
var mango1,mango2,mango3,mang04,mang05,mango6,mango7,mango8,mango9;
var elastic;
function preload()
{
	boyImage=loadImage("Pluckingmangoes/boy.png");
	
}

function setup() {
	createCanvas(800, 600);


	engine = Engine.create();
	world = engine.world;
   
	ground= new Ground(400,590,800,15);

	boy=createSprite(100,520);
	boy.addImage(boyImage);
	boy.scale= 0.1;
	
	tree = new Tree(600,300);
	tree.scale=0.1;
	
	stone = new Stone(45,460);

	mango1 = new Mango(520,100);
	mango2 = new Mango(450,180);
	mango3 = new Mango(550,150);
	mango4 = new Mango(650,100);
	mango5 = new Mango(680,150);
	mango6 = new Mango(650,250);
	mango7 = new Mango(550,250);
	mango8 = new Mango(750,220);
	mango9 = new Mango(450,250);

	elastic = new Elastic(stone.body,{x:45,y:460});
	Engine.run(engine);
  
}


function draw() {
background(220);
  rectMode(CENTER);
  tree.display();
  ground.display();
  stone.display();
  
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();

detectCollision(stone,mango1);
detectCollision(stone,mango2);
detectCollision(stone,mango3);
detectCollision(stone,mango4);
detectCollision(stone,mango5);
detectCollision(stone,mango6);
detectCollision(stone,mango7);
detectCollision(stone,mango8);
detectCollision(stone,mango9);

  drawSprites();
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
    elastic.fly();
}

function detectCollision(hitstone,hitmango){
	mangoBodyPosition = hitmango.body.position;
	stoneBodyPosition = hitstone.body.position;

	var distance= dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
	if(distance <= hitmango.radius + hitstone.radius) {
		Matter.Body.setStatic(hitmango.body,false);
	}
}
function keyPressed(){
 if(keyCode===32){
	 Matter.Body.setPosition(stone.body,{x:45,y:460});
	 elastic.attach(stone.body);
 }

}