class Boy{
    constructor(){
      var options={
isStatic:true
      }  
      this.body=Bodies.rectangle(200,600,150,250,options)
        World.add(world,this.body)
        this.image2 =loadImage("boy.png")
}
display(){
    imageMode(CENTER)
    image(this.image2,this.body.position.x,this.body.position.y,150,250)

}
}