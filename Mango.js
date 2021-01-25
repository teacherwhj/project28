class Mango {
    constructor(x,y) {
      var options = {
          isStatic: true,
          restitution:0,
          friction:1
      }
      this.body = Bodies.circle(x,y,10,options);
      this.radius=10;
      World.add(world, this.body);
      this.image = loadImage("Pluckingmangoes/mango.png");
    }
    display(){
      var pos =this.body.position;
      imageMode(CENTER);
        image(this.image, pos.x,pos.y,60,80);
    }
  };
