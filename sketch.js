
var score=0 
var sanitizerGroups
var virusGroups
var array=[]
var player
var life1, life2,life3
var lives=3
function preload(){
bgImage=loadImage("images/background.jpg")
playerIm=loadAnimation("images/Runner-1.png","images/Runner-2.png")
lifeIm=loadImage("images/life1.png")
life2Im=loadImage("images/life2.png")
life3Im=loadImage("images/life3.png")
}
function setup(){
 createCanvas(800,1000)
bg=createSprite(400,500,800,2000)
bg.addImage(bgImage)
bg.scale=1.5
player=createSprite(400,850,10,10)
player.shapeColor="red"
player.addAnimation("boy",playerIm)
player.scale=0.1
ground=createSprite(700,900,1400,20)
ground.visible=false;
life1=createSprite(100,300,20,20)
life1.addImage(lifeIm)
life1.scale=0.05
life2=createSprite(150,300,20,20)
life2.addImage(life2Im)
life2.scale=0.05
life3=createSprite(200,300,20,20)
life3.addImage(life3Im)
life3.scale=0.05

virusGroups=new Group()
sanitizerGroups=new Group()
}

function draw(){
background("lightblue")
 var r=Math.round(random(1,2))
if(r==1){
  if(frameCount%100==0){
    virus1=new Virus(random(100,700),0)
  }
  
}
else{


if(frameCount%150==0){
  sanitizer=new Sanitizer(random(100,700),0)
  
}
}
player.velocityY=player.velocityY+0.5
player.collide(ground)
bg.velocityY=2;
if(keyDown("LEFT_ARROW")){
  player.x=player.x-2
}
if(keyDown("RIGHT_ARROW")){
  player.x=player.x+2
}
if(bg.y>=700){
  bg.y=500
}
Sanitizer.display()
Virus.display()
drawSprites()
stroke(2)
fill("black")
text("Score:",600,300)
text(score,640,300)

}