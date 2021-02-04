class Stone{
    constructor(){
   var options={
      
       restitution:0.8,
      
     density:0.5,
    }
   this.body=Bodies.rectangle (100,550,40,40,options)
   World.add(world,this.body) 
   this.image1=loadImage("stone.png")
 


}
display(){
imageMode(CENTER)
push ()
rotate (this.body.angle)
translate(this.body.position.x,this.body.position.y)
image(this.image1,0,0,40,40)
pop ()
}
}