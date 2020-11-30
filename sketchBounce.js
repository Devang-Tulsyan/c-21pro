//Program to make algorithm for bouncing sprites
var movingRect, fixedRect;
var wall
function setup()
{
    createCanvas(1000,600)

    movingRect=createSprite(200,100,50,50);
    fixedRect=createSprite(800,200,60,300)
    movingRect.shapeColor=fixedRect.shapeColor="yellow"
    movingRect.velocityX=20;
     wall=createSprite(500,200,70,500)

}

function draw()
{
    background(0);
     //console.log("Width Gap " + (movingRect.x-fixedRect.x )+ " "+(movingRect.width/2+fixedRect.width/2))
     //console.log("Height Gap "+ (movingRect.y-fixedRect.y )+ " " +(movingRect.height/2+fixedRect.height/2))
     bounce(movingRect,wall);
   

    drawSprites();
}
