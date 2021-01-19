
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;

var paper, dustbin, ground;

function preload() {
	
}

function setup() {

	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	paper = new Paper(100, 5);
	ground = Bodies.rectangle(400, 675, 800, 5);
	World.add(world, ground);

	Engine.run(engine);
}

function draw() {

	rectMode(CENTER)

	Engine.update(engine);
	background(0);

	paper.display();

	rect(100,100,100,100);

    drawSprites();
}



