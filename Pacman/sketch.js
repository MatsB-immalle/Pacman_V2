var xstart = 35;
var ystart = 35;


var gameMode = 'StartScreen';

var startScreen;
var gameOver;
var level1;
var level2;
var theEnd;
var animation;
var cherry

var points = 0;

var speed = 2.5;

var pacman;
var finishsprite;
var level1sprite;
var level2sprite;


function preload() {
  bg1 = loadImage('assets/Pacman/assets/background1.jpg');
  bg2 = loadImage('assets/Pacman/assets/background2.png');
  startScreen = loadImage('assets/Pacman/assets/Pacman-startScreen.jpg');
  gameOver = loadImage('assets/Pacman/assets/gameover.png');
  theEnd = loadImage('assets/Pacman/assets/TheEnd.png');
  level1 = loadImage('assets/Pacman/assets/intro.png');
  level2 = loadImage('assets/Pacman/assets/level2.png');
  finish = loadImage('assets/Pacman/assets/finish.png');
  cherry = loadImage('assets/Pacman/assets/Cherry.png');
  animation = loadAnimation('assets/Pacman/sprites/1.png', 'assets/Pacman/sprites/2.png', 'assets/Pacman/sprites/3.png', 'assets/Pacman/sprites/4.png', 'assets/Pacman/sprites/5.png', 'assets/Pacman/sprites/6.png', 'assets/Pacman/sprites/7.png', 'assets/Pacman/sprites/8.png', 'assets/Pacman/sprites/9.png', 'assets/Pacman/sprites/10.png', 'assets/Pacman/sprites/11.png', 'assets/Pacman/sprites/12.png', 'assets/Pacman/sprites/13.png', 'assets/Pacman/sprites/14.png', 'assets/Pacman/sprites/15.png', 'assets/Pacman/sprites/16.png', 'assets/Pacman/sprites/17.png', 'assets/Pacman/sprites/18.png', 'assets/Pacman/sprites/19.png', 'assets/Pacman/sprites/20.png', 'assets/Pacman/sprites/21.png');
}

function setup() {
  createCanvas(900, 700);
  frameRate(120);

  pacman = createSprite(500, 500);
  pacman.setCollider("circle",0,0,25)
  pacman.addAnimation('circle', animation);
  

  finishsprite = createSprite(450, 350);
  finishsprite.addImage(finish);

  level1sprite = createSprite(450, 350);
  level1sprite.addImage(level1);

  level2sprite = createSprite(450, 350);
  level2sprite.addImage(level2);

  cherrysprite = createSprite(400, 50);
  cherrysprite.addImage(cherry);

  

}


//richtingen
function draw() {
  pacman.rotateToDirection = true;
  pacman.animation.play();
  drawSprites();

  if (keyIsPressed) {
    if (key == 's') {
      pacman.setSpeed(speed, 90);
    }
    if (key == 'z') {
      pacman.setSpeed(speed, 270);
    }
    if (key == 'd') {
      pacman.setSpeed(speed, 0);
    }
    if (key == 'q') {
      pacman.setSpeed(speed, 180);
    }
    //testing
    if (key == 'p') {
      pacman.setSpeed(0);
    }
  }

  //gamestate
  switch (gameMode) {
    //startscherm
    case 'StartScreen':
      clear();
      background(0);
      image(startScreen, 0, 0);

      if (mouseIsPressed == true && mouseX >= 304 && mouseX <= 588 && mouseY >= 535 && mouseY <= 617) {
        gameMode = 'Level1';
        pacman.position.x = xstart;
        pacman.position.y = ystart;
        pacman.setSpeed(0);
      }
      break;

    //level1 map
    case 'Level1':
      clear();
      background(0);
      background(bg1);
      textSize(50);
      text(points, 750, 50);
      drawSprite(level1sprite);
      drawSprite(finishsprite);
      drawSprite(pacman);
      points = 0;
      speed = 2.5;

      //pixel collision
      if (level1sprite.overlapPixel(pacman.position.x - 24, pacman.position.y + 24) || level1sprite.overlapPixel(pacman.position.x + 24, pacman.position.y - 24)|| level1sprite.overlapPixel(pacman.position.x + 24, pacman.position.y + 24) || level1sprite.overlapPixel(pacman.position.x - 24, pacman.position.y - 24)== true) {
        gameMode = 'GameOver'
      }
      if (finishsprite.overlapPixel(pacman.position.x - 24, pacman.position.y + 24) || finishsprite.overlapPixel(pacman.position.x + 24, pacman.position.y - 24) || finishsprite.overlapPixel(pacman.position.x + 24, pacman.position.y + 24) || finishsprite.overlapPixel(pacman.position.x - 24, pacman.position.y - 24) == true) {
        gameMode = 'Level2';
        pacman.position.x = xstart;
        pacman.position.y = ystart;
        pacman.setSpeed(0);
        points = points + 20;
      }
      break;

    //level2 map
    case 'Level2':
      clear();
      background(0);
      background(bg2);
      textSize(50);
      text(points, 750, 50);
      drawSprite(cherrysprite);
      drawSprite(level2sprite);
      drawSprite(finishsprite);
      drawSprite(pacman);

      //pixel collision
      if (cherrysprite.overlapPixel(pacman.position.x - 24, pacman.position.y + 24) || cherrysprite.overlapPixel(pacman.position.x + 24, pacman.position.y - 24) || cherrysprite.overlapPixel(pacman.position.x + 24, pacman.position.y + 24) || cherrysprite.overlapPixel(pacman.position.x - 24, pacman.position.y - 24) == true) {
        speed = 6;
      }
      if (level2sprite.overlapPixel(pacman.position.x - 24, pacman.position.y + 24) || level2sprite.overlapPixel(pacman.position.x + 24, pacman.position.y - 24) || level2sprite.overlapPixel(pacman.position.x + 24, pacman.position.y + 24) || level2sprite.overlapPixel(pacman.position.x - 24, pacman.position.y - 24) == true) {
        gameMode = 'GameOver'
      }
      if (finishsprite.overlapPixel(pacman.position.x - 24, pacman.position.y + 24) || finishsprite.overlapPixel(pacman.position.x + 24, pacman.position.y - 24) || finishsprite.overlapPixel(pacman.position.x + 24, pacman.position.y + 24) || finishsprite.overlapPixel(pacman.position.x - 24, pacman.position.y - 24) == true) {
        points = points + 20;
        gameMode = 'TheEnd';
      }
      break;

    //gameoverscherm
    case 'GameOver':
      clear();
      background(0);
      image(gameOver, 0, 0);

      if (mouseIsPressed == true && mouseX >= 126 && mouseX <= 410 && mouseY >= 522 && mouseY <= 602) {
        gameMode = 'Level1';
        pacman.position.x = xstart;
        pacman.position.y = ystart;
        pacman.setSpeed(0);
      }

      if (mouseIsPressed == true && mouseX >= 526 && mouseX <= 810 && mouseY >= 522 && mouseY <= 602) {
        gameMode = 'TheEnd';
      }
      break;

    //eindscherm
    case 'TheEnd':
      clear();
      background(0);
      image(theEnd, 0, 0);   
      break;
  }

}