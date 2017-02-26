var mic;
var song;
var background;
var note;
var selector = 0;
var dimensionx_eye = [150,150];
var dimensiony_eye = [150,100];
var fimension_iris = [50,];
var colorback = ['#2B3173','#099e42','#8c0827'];

function preload(){
	note = loadImage('assets/note.png')	
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  mic = new p5.AudioIn();
  mic.start();
}

function draw() {
	background(colorback[selector]);
	var vol = mic.getLevel();
	println(vol);
	fill('white')
	noStroke();
	ellipse(width/3, 200,  dimensionx_eye[selector],  dimensiony_eye[selector]);
	ellipse((width/3)*2, 200, dimensionx_eye[selector],  dimensiony_eye[selector]);
	fill('black')
	ellipse(width/3, 200, 50, 50);
	ellipse((width/3)*2, 200, 50, 50);
	fill('#FFC0CB')
	ellipse(width/2, (height/4)*3, 200, vol * 200);
}

function mousePressed () {
  selector++;
  if(selector > 2){
   selector = 0; 
  }
	redraw();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}