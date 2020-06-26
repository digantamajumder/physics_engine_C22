const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var ball,ball2;
function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }
    var ball_options = {
        restitution: 1.0
    }
    var ball2_options = {
        restitution: 3.0
    }

    ground = Bodies.rectangle(200,390,200,20,ground_options);
    World.add(world,ground);
    ball = Bodies.circle(200,200,30,ball_options);
    World.add(world,ball);
    ball2 = Bodies.circle(200,50,20,ball2_options);
    World.add(world,ball2);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);
    ellipseMode(RADIUS);
    ellipse(ball.position.x,ball.position.y,30,30);
    ellipse(ball2.position.x,ball2.position.y,20,20)
}