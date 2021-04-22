class SlingShot{

   constructor(bodyA , bodyB){
     var options = {
        
        bodyA : bodyA,
        bodyB : bodyB,
        stiffness : 0.04,
        length : 10

      }

     this.slingShot = Constraint.create(options);
     World.add(world , this.slingShot)

   }


}