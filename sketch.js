function setup() {
// Artboard size
	createCanvas(1000,1000)
// Background color
	background(240);

}

function draw() {

// Body
// Gray circle
  stroke(130);
  strokeWeight(10);
  noFill();
  ellipse(609,600,62,62);
// Orange rectangle
  rectMode(CENTER);
  noStroke();
  fill(250,210,140);
  rect(500,500,280,220);
// Black rectangle
	noStroke();
	fill(130);
	rect(535,570,40,11);
// Red circle
	noStroke();
	fill(250,160,150);
	ellipse(580,570,20,20);
// Control panel
	noStroke();
	fill(160);
	rect(500,400,220,80);
	fill(145);
	rect(500,400,100,80);
	fill(130);
	rect(500,365,240,10);
	// Red button
	fill(250,160,150);
	ellipse(470,420,10,10);
	// Green button
	fill(200,240,160);
	ellipse(500,400,6,6);
	//Green lines
	strokeWeight(3);
	stroke(200,240,160);
	line(510,400,545,400);
	line(510,406,545,406);
	line(510,412,545,412);
	line(510,418,545,418);
	line(510,424,545,424);
	line(510,430,545,430);
	strokeWeight(5);
	line(497,390,545,390);


// Wheels
// Left
	noStroke();
	fill(160);
	rect(640,570,70,170);
	// Lines
	strokeWeight(5);
	stroke(130);
	// Orizontal
	line(608,507,672,507);
	line(608,532,672,532);
	line(608,557,672,557);
	line(608,582,672,582);
	line(608,607,672,607);
	line(608,632,672,632);
	// Vertical
	line(627,495,627,645);
	line(653,495,653,645);
// Right
	noStroke();
	fill(160);
	rect(360,570,70,170);
	// Lines
	strokeWeight(5);
	stroke(130);
	// Orizontal
	line(328,507,392,507);
	line(328,532,392,532);
	line(328,557,392,557);
	line(328,582,392,582);
	line(328,607,392,607);
	line(328,632,392,632);
	// Vertical
	line(347,495,347,645);
	line(373,495,373,645);

// Neck
	noStroke();
	fill(130);
	rect(500,357,32,6);
	fill(250,210,140);
	rect(500,319,22,70);
	fill(220,180,140);
	rect(500,327,32,25);
	fill(130);
	rect(500,270,22,44);

// Hands
// Left
	noStroke();
	fill(200);
	rect(610,455,80,85);
	fill(170);
	rect(610,455,7,85);
	fill(170);
	rect(610,420,28,15);
// Right
	noStroke();
	fill(200);
	rect(390,455,80,85);
	fill(170);
	rect(390,455,7,85);
	fill(170);
	rect(390,420,28,15);

// Eyes
// Left
	noFill();
	strokeWeight(12);
	stroke(160);
	rect(550,230,84,42);
	rect(571,272,42,42);
	ellipse(550,251,84,84);
	ellipse(592,251,84,84);
	noStroke();
	fill(255);
	rect(550,230,84,42);
	rect(571,272,42,42);
	ellipse(550,251,84,84);
	ellipse(592,251,84,84);
	// Iride
	fill(160);
	ellipse(550,251,56,56);
	fill(130);
	ellipse(550,251,46,46);
	fill(160);
	ellipse(550,251,28,28);
	fill(130);
	ellipse(550,251,20,20);
	fill(255);
	ellipse(550,251,6,6);
	fill(255);
	ellipse(542,243,13,13);
// Left
	noFill();
	strokeWeight(12);
	stroke(160);
	rect(450,230,84,42);
	rect(429,272,42,42);
	ellipse(450,251,84,84);
	ellipse(408,251,84,84);
	noStroke();
	fill(255);
	rect(450,230,84,42);
	rect(429,272,42,42);
	ellipse(450,251,84,84);
	ellipse(408,251,84,84);
	// Iride
	fill(160);
	ellipse(450,251,56,56);
	fill(130);
	ellipse(450,251,46,46);
	fill(160);
	ellipse(450,251,28,28);
	fill(130);
	ellipse(450,251,20,20);
	fill(255);
	ellipse(450,251,6,6);
	fill(255);
	ellipse(458,243,13,13);










}
