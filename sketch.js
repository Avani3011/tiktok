var hr,mn,sc;
var hrAngle,mnAngle,scAngle;




function setup() {
  createCanvas(displayWidth,displayHeight);
 //to use angle in degrees
 angleMode(DEGREES);
}

function draw() {
  background(0); 
  
  //translation and rotation
  translate (displayWidth/2,displayHeight/2);
  rotate (-90)

  //calculate time 
  hr = hour();
    mn = minute();
    sc = second();

    //To create ab iterative rotation
    scAngle = map(sc, 0, 60, 0, 360);
    mnAngle = map(mn,0,60,0,360)
    hrAngle = map(hr % 12,0,12,0,360)
//drawing seconds hand
push();
rotate(scAngle); //rotate the hand based on angle calculated
stroke(255,0,0);
strokeWeight(7);
line(0,0,150,0);
pop()

//drawing mins hand
push();
rotate(mnAngle);
stroke(0,255,0);
strokeWeight(7);
line(0,0,125,0);
pop()

//drawing hr hand
push();
rotate(hrAngle);
stroke(0,0,255);
strokeWeight(7);
line(0,0,100,0);
pop()

stroke(255,0,255);
    point(0,0)

    //drawing the arcs
    strokeWeight(10);
    noFill();
    //Seconds
    stroke(255,0,0);
    arc(0,0,400,400,0,scAngle);
    //Minutes
    stroke(0,255,0);
    arc(0,0,380,380,0,mnAngle);
    //Hour
    stroke(0,0,255);
    arc(0,0,360,360,0,hrAngle);




  drawSprites();
}