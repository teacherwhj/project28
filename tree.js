class Tree {
    constructor(x,y) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,10,10,options);
      World.add(world, this.body);
      this.image = loadImage("Pluckingmangoes/tree.png");
    }
    display(){
      var pos =this.body.position;
      imageMode(CENTER);
      image(this.image, pos.x,pos.y,400,600);
    }
  };
