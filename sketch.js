const Engine=Matter.Engine
const Bodies= Matter.Bodies
const World= Matter.World
var ground;
var manImage;
var thunder;
var thunder1;
var thunder2;
var thunder3;
var thunder4;
var bat;
var man;
var rand;
var engine,world;
var drops=[]
var maxDrops=100
var thunderCreatedFrame=0

function preload(){
manImage=loadAnimation("Images/Walking Frame/walking_1.png","Images/Walking Frame/walking_2.png","Images/Walking Frame/walking_3.png","Images/Walking Frame/walking_4.png","Images/Walking Frame/walking_5.png","Images/Walking Frame/walking_6.png","Images/Walking Frame/walking_7.png","Images/Walking Frame/walking_8.png")
thunder1=loadImage("Images/thunderbolt/1.png")
thunder2=loadImage("Images/thunderbolt/2.png")
thunder3=loadImage("Images/thunderbolt/3.png")
thunder4=loadImage("Images/thunderbolt/4.png")
}

function setup(){

engine=Engine.create()
world=engine.world;
createCanvas(600,700)

umbrella=new Umbrella(200,500)
if(frameCount%150==0){
for(var i=0; i<maxDrops;i++){
drops.push(new Drop(random(0,400),random(0,400)))
}
}

}

function draw(){
Engine.update(engine)
background(0);
rand=Math.round(random(1,4))
if(frameCount%80===0){
thunderCreatedFrame=frameCount;
thunder=createSprite(random(10,370),random(10,30),10,10)
switch(rand){
case 1: thunder.addImage(thunder1)
break;
case 2: thunder.addImage(thunder2)
break;
case 3: thunder.addImage(thunder3)
break;
case 4: thunder.addImage(thunder4)
break;
default:break;

}
thunder.scale=random(0.3,0.6)
}
if(thunderCreatedFrame+10===frameCount && thunder){
thunder.destroy();
}
umbrella.display();
for(var i=0; i<maxDrops; i++){
drops[i].showDrop();
drops[i].update();
}
drawSprites()
}  

