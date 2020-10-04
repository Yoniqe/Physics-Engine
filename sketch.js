const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var ball, ground, engine, world;
var ball1;

function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;

  var ground_options = {
    isStatic: true
  }

  var ball_options = {
    restitution: 1.0
  }

  var ball1_options = {
    restitution: 0.8
  }

  ground = Bodies.rectangle(250,390,400,20, ground_options);
  World.add(world, ground);

  ball = Bodies.circle(400,100,20, ball_options);
  World.add(world, ball);

  ball1 = Bodies.circle(300,100,20, ball1_options);
  World.add(world, ball1);
}

function draw() {
  background(255,255,255);
  
  Engine.update(engine);

  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, 400,20);
  circle(ball.position.x, ball.position.y,20);
  circle(ball1.position.x, ball1.position.y,20);


  drawSprites();
}