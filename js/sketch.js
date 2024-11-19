let robot, timer=3333, x=20, y=20, xchange=1, ychange=0, roboSnd, soundLoaded=false;
let checkbox, header;
function preload(){
 roboSnd=loadSound('/assets/snd/robo.mp3')
}
function setup(){
  noCanvas();
  frameRate(10)

  checkbox = createCheckbox(' Robot Audio?');
  header = select('footer')
  header.child(checkbox)

  robot = select("#robot")
  x=random(screen.width)
  y=random(screen.height)
  robot.style('left',x+'px')
  robot.style('top',y+'px')
}
function draw(){
  move()
  animation()
  changeDirection()
  keepOnScreen()

 if (checkbox.checked() && !(soundLoaded)) {
   soundLoaded=true;
  }
}
function move(){
  x+=xchange;
  y+=ychange;
  robot.style('left',x+'px')
  robot.style('top',y+'px')
}
function animation(){
  if (robot.attribute('src')=='/assets/img/walkleft.png'){
    robot.attribute('src','/assets/img/walkright.png')
  } else {
    robot.attribute('src','/assets/img/walkleft.png')
  }
}
function changeDirection(){
  if (millis()>timer){
    timer+=random(6000,20000)
    if (xchange==0){
      xchange=1;
      ychange=0;
      if (soundLoaded)(roboSnd.play())
    } else {
      xchange=0;
      ychange=1;
      if (soundLoaded)(roboSnd.play())
    }
  } 
}
function keepOnScreen(){
  if (x>screen.width){
    x=0
    y=random(screen.height)
  }
  if (y>screen.height){
    x=0;
    y=random(screen.height)
  }
}
function mousePressed(){
  soundLoaded=true;
}
