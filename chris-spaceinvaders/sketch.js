function setup() {
  createCanvas(600, 600);
  background(50);


}
var x = 250;
var y = 500;
var i = 0;
var wifth = 50;
var lenf = 50;
var cx = 50;
var cy = 500;
function draw() {
  background(50);
  
  fill("red");
  ellipse(100, 100, 50, 50);

  fill("red");
  ellipse(200, 100, 50, 50);

  fill("red");
  ellipse(300, 100, 50, 50);

fill("red");
  ellipse(400, 100, 50, 50);


fill("red");
  ellipse(500, 100, 50, 50);

  



  if (keyIsDown(LEFT_ARROW))
    x -= 5;

  if (keyIsDown(RIGHT_ARROW))
   x+=5;


  if (keyIsDown(RIGHT_ARROW))
    y == 500;

  if((keyIsDown)(ENTER))
  fill("black");
  rect(x, y, 40, 100); 
   

    

  if ((keyIsDown)(SHIFT)){
    fill("red");
  rect(x, cy-=5, 10, 50);
    if(cy < 0){

    }
}


}
