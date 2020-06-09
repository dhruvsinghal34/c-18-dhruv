class Ball{
    constructor (x,y,radius){
       
       this.body=Bodies.circle (x,y,radius);
        this.radius=radius;
        
      World.add(world,this.body);
     
    }
     display () {
         var posi=this.body.position;
        
          fill ("blue");
          circle (posi.x,posi.y,this.radius);
         
         
        
     }



}