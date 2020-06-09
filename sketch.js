const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var engine, world;


function setup() {
  createCanvas(700,500);
    engine = Engine.create();
    world = engine.world;

  box1=new Box (100,300,10,200);
  box2=new Box (200,300,10,200);
  box3=new Box (300,300,10,200);
  box4=new Box (400,300,10,200);
  box5=new Box (500,300,10,200);
  box6=new Box (600,300,10,200);
  box7=new Box (0,300,10,200);
  box8=new Box (700,300,10,200);
   cricle1=new Circle(100,100,20);
  cricle2=new Circle(200,100,20);
  cricle3=new Circle(300,100,20);
  cricle4=new Circle(400,100,20);
  cricle5=new Circle(500,100,20);
  cricle6=new Circle(600,100,20);
  cricle7=new Circle(150,200,20);
  cricle8=new Circle(250,200,20);
  cricle9=new Circle(350,200,20);
  cricle10=new Circle(450,200,20);
  cricle11=new Circle(550,200,20);
  
  c1=new Ball(120,50,20);
  c2=new Ball(220,50,20);
  c3=new Ball(320,50,20);
  c4=new Ball(420,50,20);
  c5=new Ball(520,50,20);
  c6=new Ball(80,50,20);
  c7=new Ball(650,50,20);
  c8=new Ball(240,50,20);
  c9=new Ball(110,50,20);
c10=new Ball(350,50,20);
  
   ground=new Ground (200,500,1200,30);
   
   }

function draw() {
  background("black");  
  Engine.update(engine);
  box1.display();
 box2.display();
 box3.display();
 box4.display();
 box5.display();
 box6.display();
 box7.display();
 box8.display();
 cricle1.display();
 cricle2.display();
 cricle3.display();
 cricle4.display();
 cricle5.display();
 cricle6.display();
 cricle7.display();
 cricle8.display();
 cricle9.display();
 cricle10.display();
 cricle11.display();

 c1.display();
 c2.display();
 c3.display();
 c4.display();
 c5.display();
 c6.display();
 c7.display();
 c8.display();
 c9.display();
 c10.display();
  ground.display();
}