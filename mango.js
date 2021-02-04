class Mango{
constructor(x,y,radius){
    var options ={
        isStatic:true,
        restitution:0,
        frcition:1,
    }
    this.body=Bodies.circle(x,y,radius,options)
    this.radius=radius
    this.image2=loadImage("mango.png")
    World.add(world,this.body)
    
   }
    display(){
    imageMode(CENTER)
   image(this.image2,this.body.position.x,this.body.position.y,this.radius,this.radius)
    }
   
   }


