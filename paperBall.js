class paperBall{
consturctor(x,y,w,h){
  
  var options={
    'isStatic':false,
    'restitution':0.3,
    'friction':0.5,
    'density':1.2
    }



Matter.Bodies.circle(100,350,20,options)






function keyPressed () {
    if (keyCode === UP_ARROW) {		   
     Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85}); 
     
        }
      
      
      }
    }
    }
