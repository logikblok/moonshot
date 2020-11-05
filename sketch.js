//Moving sprites
var earth, circle;
var direction = 90; //circle initial direction moving down

function setup() {
  createCanvas(windowWidth, windowHeight);
  //create the sprites
  earth = createSprite(600, 200, 50, 100);
  earth.addAnimation('floating', 'assets/earth_0001.png', 'assets/earth_0009.png');

  circle = createSprite(400, 200, 50, 100);
  circle.addAnimation('floating', 'assets/asterisk_circle0006.png', 'assets/asterisk_circle0008.png');
}

function draw() {
  background('#24285B');

  //aside of setting the velocity directly you can move a sprite
  //by providing a speed and an angle
  direction += 2;
  //speed, angle
  circle.setSpeed(3, direction);

  //you can rotate the sprite according the direction it is moving
  //uncomment this
  //circle.rotateToDirection = true;

  //or by applying a force toward a point
  //force (acceleration), pointx, pointy
  earth.attractionPoint(0.2, mouseX, mouseY);
  //since the force keeps incrementing the speed you can
  //set a limit to it with maxSpeed
  earth.maxSpeed = 5;

  //draw the sprite
  drawSprites();
}
