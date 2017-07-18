function setup() {
    createCanvas(300, 300);
    background(225);

stroke("white");
strokeWeight(6);
fill("purple");

arc(width / 2, height / 2, 200, 200, 0, PI, CHORD);
fill("black");
arc(width / 2, height / 2, 200, 200, PI, 0, CHORD);

fill("white");
ellipse( width / 2, height / 2, 50, 50);

fill("white")
ellipse(width / 2, height / 2, 25, 25);

}
