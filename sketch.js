
var rocket;
var bg;
var frame;
var thrust = 2;
var debris;

//the scene is space
var SCENE_W = 1600;
var SCENE_H = 800;


function setup() {
  createCanvas(800, 400);
  //create a sprite and add the 3 animations
  rocket = createSprite(400, 200, 50, 50);
  debris = createSprite(10, 20, 5, 5);

  bg = new Group();
  for (var i = 0; i < 100; i++) {
    //create a sprite and add the 3 animations
    var rock = createSprite(random(-width, SCENE_W + width), random(-height, SCENE_H + height));
    //cycles through rocks 0 1 2
    rock.addAnimation('normal', 'assets/favicon.png');
    bg.add(rock);
  }

  //frame = loadImage('assets/frame.png');
}

function draw() {
  background('#24285B');

    if (keyWentDown(LEFT_ARROW)) {
      rocket.velocity.x = -thrust;
      rocket.setSpeed(10);
    }
    if (keyWentDown(RIGHT_ARROW)) {
      rocket.velocity.x = +thrust;
      rocket.setSpeed(10);
    }
    if (keyWentDown(UP_ARROW)) {
      rocket.velocity.y = -thrust;
      rocket.setSpeed(10);
    }
    if (keyWentDown(DOWN_ARROW)) {
      rocket.velocity.y = +thrust;
      rocket.setSpeed(10);
    }

    //.5 zoom is zooming out (50% of the normal size)
    if (mouseIsPressed)
      camera.zoom = 0.5;
    else
      camera.zoom = 1;

    //set the camera position to the rocket position
    camera.position.x = rocket.position.x;
    camera.position.y = rocket.position.y;

    //draw the scene
    //rocks first
    drawSprites(bg);

    //shadow using p5 drawing
    noStroke();
    fill(0, 0, 0, 20);
    //shadow
    ellipse(rocket.position.x, rocket.position.y + 90, 80, 30);
    //character on the top
    drawSprite(rocket);
    drawSprite(debris);
    debris.attractionPoint(0.2, rocket.position.x, rocket.position.y);
    //I can turn on and off the camera at any point to restore
    //the normal drawing coordinates, the frame will be drawn at
    //the absolute 0,0 (try to see what happens if you don't turn it off
    camera.off();
    //image(frame, 0, 0);
  }
