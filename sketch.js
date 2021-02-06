
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup;
var ground
var survivalTime=0;

function preload(){
  
  
  monkey_running =loadAnimation ("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")             
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400)
  
  monkey=createSprite(100,325,20,20);
  monkey.addAnimation("jf",monkey_running);
  monkey.scale=0.1
  
  ground=createSprite(450,350,900,10);
  ground.velocityX=-4

  
  
  
}


function draw() {
   background("light blue")
   
   stroke("white")
  textSize(20)
   fill("black");
 
    survivalTime=survivalTime+Math.round(getFrameRate()/65);
   text("SURVIVAL TIME: "+survivalTime,200,30);
 
  
  
  
  if(ground.x<0){
    ground.x=ground.width/2
  }
    
  
    if(keyDown("space")&&monkey.y >= 235) {
      monkey.velocityY = -13;
       
    }
  
  monkey.velocityY = monkey.velocityY + 0.8
  
  monkey.collide(ground);
  
  bananas();
  
  obstacles();

  drawSprites();
  
 
    
  
}


function bananas(){
  if (frameCount%80 === 0){
    
    banana = createSprite(400,150, 50, 50 )
    banana.addAnimation("banana", bananaImage);
    banana.scale = 0.1; 
    banana.velocityX =-3           
    banana.lifetime = 220;
   


  }
  
  }

function obstacles(){
  if (frameCount%200 === 0){
    
    obstacle = createSprite(620,320,50,50);
    obstacle.addAnimation("sdk", obstaceImage);
    obstacle.setCollider("circle", 0, 0, 180);
    obstacle.scale = 0.13 ;
    obstacle.velocityX = -3
    obstacle.lifetime = 220;
 
    
  }
  
  
}


