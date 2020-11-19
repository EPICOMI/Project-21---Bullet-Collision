

var bullet,wall;


var speed, weight; 


function setup() {
  createCanvas(1600, 400);


	speed=random(30,52)
	weight=random(223,321)
	thickness=random(22,83)


	bullet=createSprite(50, 200, 45, 5);   

	bullet.velocityX = speed;

	bullet.shapeColor=color(255);


  
  	wall=createSprite(1200,200, thickness, height/2)
  	wall.shapeColor=color(80,80,80)
}


function draw() {
  background(0);

  if(wall.x-bullet.x < (bullet.width+wall.width)/2)
  {
  	bullet.velocityX=0;
  	var damage=0.5 * weight * speed* speed/(thickness * thickness * thickness);
	if(damage>10)
	{
		wall.shapeColor=color(255,0,0);
	}

	if(damage<10)
	{
		wall.shapeColor=color(0,255,0);
	}
  }  
  
  drawSprites();
 
}