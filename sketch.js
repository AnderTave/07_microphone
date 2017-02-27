var mic;
var song1;
var song2;
var note;
var selector = 0;
var dimensionx_eye = [150, 150, null];
var dimensiony_eye = [150, 100, null];
var fimension_iris = [50, 50, 50];
var colorback = ['#2B3173', '#099e42', '#8c0827'];

function preload() {
	note = loadImage('assets/note.png');
	song1 = loadSound('assets/singing_in_the_rain.mp3');
	song2 = loadSound('assets/underpressure.mp3');
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	mic = new p5.AudioIn();
	mic.start();
}

function draw() {
	
	background(colorback[selector]);
	var vol = mic.getLevel();

//	If the volume is not enought, re-map it (set a higher newMax).
//	var newMax = 5;
//  volume = map(volume,0,1,0,newMax);
	
	//eyes
	fill('white');
	noStroke();
	ellipse(width/3, 200,  dimensionx_eye[selector],  dimensiony_eye[selector]);
	ellipse((width/3)*2, 200, dimensionx_eye[selector],  dimensiony_eye[selector]);
	//iris
	fill('black');
	ellipse(width/3, 200, 50, 50);
	ellipse((width/3) * 2, 200, 50, 50);
	
	//mounth
	fill('#FFC0CB');
	ellipse(width/2, (height/4) * 3, 200, vol * 300);
	
	
	if (vol>0.15){
		image(note,(width/2)+60,((height/4) * 3)-100);
	}

	if (vol>0.18){
		image(note,(width/2)+85,((height/4) * 3)-75);
	}
	
	if (vol>0.2){
		image(note,(width/2)+110,((height/4) * 3)-125);
	}	
	
	}


function mousePressed () {
	selector++;
  
	if(selector > 2) {
			selector = 0; }
	redraw();

	if (selector == 0) {
		textSize(12);
		text('I am a bit shy, if you sing I will follow you, but if you are also shy just press the mouse');
		
		song2.pause();
		song1.pause();
	}
	
	else if (selector == 1) {
		song2.pause();
		song1.play();
	}
	else if (selector == 2) {
		song1.pause();
		song2.play();
	}
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}