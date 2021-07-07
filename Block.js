class Block{
  constructor(x, y, width, height) {
      var options = {
          restitution :0.4,
          friction :0.0,
      }
      this.visiblity = 255; //added
     
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      this.image=loadImage("block.png")
      World.add(world, this.body);
    }
    display(){
      console.log(this.body.speed)
      var pos= this.body.position;
      rectMode(CENTER);
      rect(pos.x,pos.y,this.width, this.height);
      
      if(this.body.speed < 3) {
        imageMode(CENTER);
        image(this.image, pos.x,pos.y,this.width, this.height);

      }
      
      else {
        World.remove(world, this.body);

        push();
        this.Visibility = this.Visibility - 5;
        tint(255, this.Visibility)
        image(this.image, this.body.position.x, this.body.position.y, 50, 50)
        pop();
      }
    }
}