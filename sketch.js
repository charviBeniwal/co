const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, pig1;
var backgroundImg,platform;



function setup(){
    
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    
    
    log1 = new Log(790,300,70,50, PI/2);

    
    

    

    
    

   // bird = new Bird(100,100);
    log4 = new Log(760,240,200,30, -PI/4);
    log5 = new Log(1700,260,30,20, PI/2);
}

function draw(){
    background(0);
    Engine.update(engine);
    
    log1.display();

   
    log4.display();
    log5.display();

    
}
