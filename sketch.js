var posX = 300;
var posY = 300;
var x = 100;
var y = 0;
var posObstacleX = 300;
var posObstacleY = 300;
var vitesse = 3;
var distance = 3;
var d = 100;
var direction = 1; 


var timer;

function setup() {
    createCanvas(640, 480);
    createCanvas(640, 480);
    background(150);
ellipseMode(CENTER);
}

function draw() {
    background(150);
    updatePositionEllipse();
    testOutOfScreen();
    fill(255)
    ellipse(posX, posY, 50, 50);
    fill(255, 0, 0)
    deplacementObstacle();
    
     
}

function updatePositionEllipse() {

    if (keyIsDown(LEFT_ARROW)) {
        posX = posX - 5;
    }

    if (keyIsDown(RIGHT_ARROW)) {
        posX = posX + 5;
    }

    if (keyIsDown(UP_ARROW)) {
        posY = posY - 5;
    }

    if (keyIsDown(DOWN_ARROW)) {

        posY = posY + 5;
    }

    // clear();
    //ellipse(x, y, 50, 50);
}

function testOutOfScreen() {
    if (posX < 25) {
        posX = 25;
        strokeWeight(2)
        stroke(255, 0, 0)
        line(0, 0, 0, 480)

    }
    if (posX > 615) {
        posX = 615;
        strokeWeight(2)
        stroke(255, 0, 0)
        line(640, 480, 640, 0)
    }
    if (posY < 25) {
        posY = 25;
        strokeWeight(2)
        stroke(255, 0, 0)
        line(0, 0, 640, 0)
    }
    if (posY > 455) {
        posY = 455;
        strokeWeight(2)
        stroke(255, 0, 0)
        line(0, 480, 640, 480)

    }
}

function deplacementObstacle() {
    
    posObstacleX = posObstacleX + 5*direction;

    if( posObstacleX < 10 || posObstacleX > 630 ){
        direction = - direction; 
    }
        
    ellipse(posObstacleX, posObstacleY, 20, 20)

   
}
function testDistancePlayer(){
    
    distanceX = Math.pow(posX - posObstacleX, 2);
    distanceY = Math.pow(posY - posObstacleY, 2);
    distance = Math.sqrt(distanceX + distanceY);
}


















