const Engine= Matter.Engine;
const Bodies= Matter.Bodies;
const World= Matter.World;

var world,engine,ground,ball;

function setup() {

engine= Engine.create();
world= engine.world;

  createCanvas(800,400);
  var ground_options={
    isStatic:true
  }
  var ball_options={
   friction:5,
    restitution:1.2
  }
  ground = Bodies.rectangle(400,380,800,20,ground_options);
  World.add(world,ground);
  ball = Bodies.circle(400,50,50,ball_options);
  World.add(world,ball);
console.log(ball);
}

function draw() {

  background(255,255,255);  
  Engine.update(engine);
  rectMode(CENTER);
  ellipseMode(RADIUS);
  rect(ground.position.x,ground.position.y,800,20);
  ellipse(ball.position.x,ball.position.y,50,50);
}