const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;

function preload() {
    //backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    box5 = new Box(810,160,70,70);
    box6 = new Box(810,90,70,70);
    box7 = new Box(700,270,70,70);
    box8 = new Box(810,40,70,70);
    box9 = new Box(920,160,70,70);
    box10 = new Box(700,100,70,70);
    box11 = new Box(700,70,70,70);
    box12 = new Box(700,40,70,70);
    box13 = new Box(700,10,70,70);
    
    ball1 = new ball(200,160,50);

    //log6 = new Log(230,180,80, PI/2);
     chain   = new Slingshot(ball1.body,{x:400,y:175});
}

function draw(){
    background("lightgreen");
    Engine.update(engine);
    strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
   
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    ball1.display();
   chain.display();    
}
function mouseDragged(){
   Matter.Body.setPosition(ball1.body,{x:mouseX,y:mouseY});

}
function mouseReleased(){
    
//make my angry bird fly/launch
  //  chain.fly();

}