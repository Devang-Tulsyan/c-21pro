function hasCollided(o1Rect,o2Rect){
    //collision algorithm
    if(Math.abs(o1Rect.x-o2Rect.x)<=(o1Rect.width/2+o2Rect.width/2) && (Math.abs(o1Rect.y-o2Rect.y)<=(o1Rect.height/2+o2Rect.height/2))){
    return true;
    
    }
    else
    {
    return false;
    }
}


function bounce(o1,o2){
    //bouncing algorithm
    if(Math.abs(o1.x-o2.x)<=(o1.width/2+o2.width/2)) {
   
       o1.velocityX= o1.velocityX *-1;
       //fixedRect.velocityX *=-1;
   
   }
   
   if(Math.abs(o1.y-o2.y)<=(o1.height/2+o2.height/2))
   {
    o1.velocityY= o1.velocityY *-1;
    //fixedRect.velocityY *=-1;
   
   }
   }