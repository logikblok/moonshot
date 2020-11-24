//Our key sprites for the game
var rocket, ground, debris, moon,frame,boxSprite, bg;
var thrust = 2;
var JUMP = 15;
//the scene is space
var SCENE_W = 600;
var SCENE_H = 2000;
var canvasWidth = 400;
var canvasHeight = 650;

function preload() {
  //create an animation from a sequence of numbered images
  rocket = loadAnimation('assets/rocket_0001.png', 'assets/rocket_0004.png');
}

function setup() {
  createCanvas(canvasWidth, canvasHeight);
  //create a sprite and add the 3 animations
  //debris = createSprite(10, 20, 5, 5);
  moon = createSprite(170,-SCENE_H,1000,400);
  ground = createSprite(170, 525,1000,400);
  ground.shapeColor = color(127, 140, 141);
  ground.setCollider('rectangle',0,100,1000,400);
  //compact way to add an image
  rocket = createSprite(canvasWidth/2,canvasHeight/2);
  rocket.addAnimation('normal', 'assets/rocket_0001.png');
  rocket.addAnimation('push', 'assets/rocket_0001.png', 'assets/rocket_0004.png');
  //frame = loadImage('assets/frame.png');
  bg = new Group();
  for (var i = 0; i < 100; i++) {
    var stars1 = createSprite(random(-width, SCENE_W+width), random(-height, SCENE_H+height));
  }
}

function draw() {
  background('#24285B');
  noStroke();
  fill(0, 0, 0, 20);
  //set the camera position to the rocket position
  //camera.position.x = rocket.position.x;
  camera.position.y = rocket.position.y;
  //draw the scene
  //drawSprites(bg);
  //character on the top
  //debris.attractionPoint(0.2, rocket.position.x, rocket.position.y);
  drawSprites(bg);
  if (keyIsPressed === true) {
    rocket.changeAnimation('push');
    rocket.velocity.y = -JUMP;
  } else {
    rocket.changeAnimation('normal');
    rocket.velocity.y = +JUMP;
  }
  rocket.collide(ground);
  rocket.debug = mouseIsPressed;
  //I can turn on and off the camera at any point to restore
  //the normal drawing coordinates, the frame will be drawn at
  //the absolute 0,0 (try to see what happens if you don't turn it off
  //image(frame, 0, 0);
  drawSprites();
  //ellipse(rocket.position.x, rocket.position.y+70, 80, 30);
  camera.off();
}
