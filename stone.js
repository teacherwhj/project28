class Stone {
    constructor(x,y) {
      var options = {
          isStatic: false,
          restitution:0,
          friction:1,
          density:1.2
      }
      this.body = Bodies.circle(x,y,10,options);
      this.radius=10;
      World.add(world, this.body);
      this.image = loadImage("Pluckingmangoes/stone.png");
    }
    display(){
      var pos =this.body.position;
      imageMode(CENTER);
        image(this.image,pos.x,pos.y,50,50);
    }
  };
