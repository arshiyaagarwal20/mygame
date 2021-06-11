class Sanitizer{
    constructor(x,y){
      this.sanitizer=createSprite(x,y,15,15)
      this.sanitizer.velocityY=2
      this.image=loadImage("images/ab.png")
      this.sanitizer.addImage(this.image)
      this.sanitizer.scale=0.2
      sanitizerGroups.add(this.sanitizer)
    }
  static display(){

    if(player.isTouching(sanitizerGroups)){
      score=score+100;
      sanitizerGroups.destroyEach()
    }
   }
}