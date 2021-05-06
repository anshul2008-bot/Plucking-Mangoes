const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var boy, boyImage;
var ground, stone, tree;
var mango1, mango2, mango3, mango4, mango5;
var slingObj;

function preload() {

	boyImage = loadImage("images/boy.png");
}

function setup() {
	createCanvas(2000, 1000);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	boy = createSprite(350, 820, 150, 150);
	boy.addImage(boyImage);
	boy.scale = 0.18;

	ground = new Ground(1000, 950, 2000, 50);
	stone = new Stone(110, 710, 100, 100);
	tree = new Tree(1500, 495, 950, 950);

	mango1 = new Mango(1700,250,80,80);	
	mango2 = new Mango(1500,450,80,80);
	mango3 = new Mango(1900,360,80,80);
	mango4 = new Mango(1450,200,80,80);
	mango5 = new Mango(1300,400,80,80);

	slingObj = new SlingShot(stone.body,{x:260,y:720});
	
	Engine.run(engine);

}

function draw() {
//rectMode(CENTER);
	background("lightblue");

	boy.display();
	ground.display();
	stone.display();
	tree.display();
	mango1.display();
	mango2.display();
	mango3.display();
	mango4.display();
	mango5.display();
	slingObj.display();
}

function mouseDragged(){
    //if (gameState!=="launched"){
        Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
    //}
}

function mouseReleased(){
    slingObj.fly();
    // gameState = "launched";
}

function keyPressed(){
    //console.log(bird.body.speed )
    if(keyCode === 32 && stone.body.speed <1){
        //bird.trajectory = [];
        Matter.Body.setPosition(stone.body, {x:220,y:500});

       slingObj.attach(stone.body);
    }
}