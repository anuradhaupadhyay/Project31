const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render=Matter.Render;
var engine, world;

var div=[];
var plinkos=[];
var particles=[];

function setup() {
  createCanvas(480,600);
  
  engine=Engine.create();
  world=engine.world;

  ground=new Ground(240,620,480,20,true);

  var render = Render.create({ element: document.body, engine: engine, options: { width: 480, height: 600, wireframes: false } });
  Render.run(render);
}

function draw() {
  background(255,255,255);
  
  if(frameCount%60==0){
     var particle=new Particle(random(20,460),50,4,false);
     particles.push(particle);
  }
  for(var i = 0;i < particles.length;i++){
    particles[i].display();
  }


  for(var x = 0; x < 100; x=x+10){
    for(var y = 20; y < 100;y=y+10){
    var spacing = 5;
    plinko=new Plinko(x*spacing,y*spacing,4,true);
    plinkos.push(plinko);
    }
  }
  
  for(var i = 0; i<plinkos.length;i++){
    plinkos[i].display();
  }

  for(x=0;x<100;x=x+20){
    var spacing = 5;
    bucket=new Ground(x*spacing,550,10,100);
    div.push(bucket);
  }
  for(var i = 0; i<div.length;i++){
    div[i].display();
  }
  Engine.update(engine);


}