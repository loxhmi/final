// Where is the image
let x, y;
var img1;
var img2; 
let bg;
var bub1;
var bub2;
var bub3;
var bub4;

function preload() {
  img1 = loadImage("shaman.png"); 
  bg = loadImage("space.jpg");
  img2 = loadImage("brain.png");
  bub1 = loadImage("dirtext.png");
  bub2 = loadImage("hightext.png");
  bub3 = loadImage("inntext.png");
  bub4 = loadImage("timtext.png");
}

function setup() {
  createCanvas(1500,1200);
  noCursor();
  // Starts in the middle
  x = width / 4;
  y = 100;
}

function draw() {
  background(bg);
  image(img2,mouseX,mouseY);
  
  // Draw an image
 image(img1, x, y);
  
  // Jiggling randomly on the horizontal axis
  x = x + random(-1, 1);
  // Moving up at a constant speed
  image(bub3, mouseX, 16,);   // Top circle
  image(bub4, mouseX/2, 275,); // Middle circle
  image(bub1, mouseX*1.25, 920); // Bottom circle
  image(bub2, mouseX/1.3, 580); 
  }


