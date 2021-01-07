class ground {
  constructor(x,y,width,height) {
    var options = {
        isStatic: true
    }
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    rectMode(CENTER);
    fill("brown");
    rect(pos.x, pos.y, this.width, this.height);
  }
};
























/*class Ground {
    constructor() {
      var options = {
          isStatic:true
      }
      this.body = Bodies.rectangle(width/2, 650, width, 10 )
      this.width = width
      this.height = height
     // x, y, width, height
     //x, y, width, height, options
      World.add(world, this.body);
    }}*/