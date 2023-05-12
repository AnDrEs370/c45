var bg,bgImg;
var player, shooterImg, shooter_shooting;
var zombie,zombieImg,zombieGrup;


function preload(){
  
  shooterImg = loadImage("assets/shooter_2.png")
  shooter_shooting = loadImage("assets/shooter_3.png")
  zombieImg=loadImage("assets/zombie.png")
  bgImg = loadImage("assets/bg.jpeg")

}

function setup() {

  
  createCanvas(windowWidth,windowHeight);

  //adding the background image
  bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
bg.addImage(bgImg)
bg.scale = 1.1
  

//creating the player sprite
player = createSprite(displayWidth-1150, displayHeight-300, 50, 50);
 player.addImage(shooterImg)
   player.scale = 0.3
   player.debug = true
   player.setCollider("rectangle",0,0,300,300)

   zombieGrup=new Group()
   zGrup();
}

function draw() {
  background(0); 




  //moving the player up and down and making the game mobile compatible using touches
if(keyDown("UP_ARROW")||touches.length>0){
  player.y = player.y-30
}
if(keyDown("DOWN_ARROW")||touches.length>0){
 player.y = player.y+30
}


//release bullets and change the image of shooter to shooting position when space is pressed
if(keyWentDown("space")){
 
  player.addImage(shooter_shooting)
 
}

//player goes back to original standing image once we stop pressing the space bar
else if(keyWentUp("space")){
  player.addImage(shooterImg)
}

if (player.y<300){
player.y=300;
}
if (player.y>575){
  player.y=575;
}
drawSprites();

}
 
function zGrup(){
  for(var i=0;i < zombieGrup.length; i++ ){
    zombie=createSprite(200,random(300,575),20,20);
    zombie.addImage("zombie",zombieImg);
    zombie.scale=2.1;
    zombie.velocityX=-11
    zombieGrup.add(zombie);
    
  }
}