var x = 25;
var y = 25;

var xstart = 35;
var ystart = 35;


var fx1 = 748;
var fx2 = 820;
var fy1 = 604;
var fy2 = 628;

var richting = 0;
var direction = "static";

var gameMode = 'StartScreen';

var startScreen;
var level1;
var level2;
var animation

var speed = 2.5;

var pacman;

var maze;

function preload() {
  bg1 = loadImage('assets/background1.jpg');
  bg2 = loadImage('assets/background2.png');
  startScreen = loadImage('assets/Pacman-startScreen.jpg');
  level1 = loadImage('assets/intro.png');
  level2 = loadImage('assets/level2.jpg');
  finish1 = loadImage('assets/finish.png');
  animation = loadAnimation('sprites/1.png','sprites/2.png','sprites/3.png','sprites/4.png','sprites/5.png','sprites/6.png','sprites/7.png','sprites/8.png','sprites/9.png','sprites/10.png','sprites/11.png','sprites/12.png','sprites/13.png','sprites/14.png','sprites/15.png','sprites/16.png','sprites/17.png','sprites/18.png','sprites/19.png','sprites/20.png','sprites/21.png',);
}

function setup() {
  createCanvas(900, 700);
  frameRate(60);
  

  pacman = createSprite(x, y,0,0);
  pacman.addAnimation('round', animation);

  finish1sprite = createSprite(450,350);
  finish1sprite.addImage(finish1);

  level1sprite = createSprite(450,350);
  level1sprite.addImage(level1);
 
}

function draw()
{
  pacman.rotateToDirection = true;
  pacman.animation.play();
  pacman.getBoundingBox();

  if (keyIsPressed)
  {
    if (key == 's')
    {
      pacman.setSpeed(speed,90);
    }
    if (key == 'z')
    {
      pacman.setSpeed(speed,270);
    }
    if (key == 'd')
    {
        pacman.setSpeed(speed,0);
    }
    if (key == 'q') 
    {
      pacman.setSpeed(speed,180);
    }
    //testing
    if (key == 'p') 
    {
     pacman.setSpeed(0);
    }
  }

  switch (gameMode) {
      case 'StartScreen':
        clear();
        background(0);
        image(startScreen, 0, 0);

             if(mouseIsPressed == true && mouseX >= 304 && mouseX <= 588 &&mouseY >= 535 && mouseY <= 617)
              {
                gameMode = 'Level1';

                pacman.position.x = xstart;
                pacman.position.y = ystart;
                pacman.setSpeed(0);

              }
      	break;

        case 'Level1':
          clear();
          background(0);
          background(bg1);
          drawSprite(pacman);
          drawSprite(level1sprite);
          drawSprite(finish1sprite);

          
          if (level1sprite.overlapPixel(pacman.position.x-24 ,pacman.position.y + 24) || level1sprite.overlapPixel(pacman.position.x +24,pacman.position.y -24) == true)
          {
            gameMode = 'StartScreen';
          }
          if (finish1sprite.overlapPixel(pacman.position.x-24 ,pacman.position.y + 24) || finish1sprite.overlapPixel(pacman.position.x +24,pacman.position.y -24) == true) 
          {
            gameMode = 'StartScreen';   
          }
        break;


    }

}
