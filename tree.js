class Tree{
    constructor(){
    var options={
       isStatic:true 
    }
    this.body=Bodies.rectangle(600,389,400,600,options)
    World.add(world,this.body)
    this.image =loadImage("tree.png")
}

display(){
    imageMode(CENTER)
    image(this.image,this.body.position.x,this.body.position.y,400,600)
}
}