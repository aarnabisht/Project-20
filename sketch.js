var background, backImage;
var cat, mouse;
var catImage, catImage2, catImage3;
var mouseImage, mouseImage2, mouseImage3;
function preload() {
    //load the images here
catImage = loadImage("tomOne.png");
catImage2 = loadImage("tomTwo.png");
catImage3 = loadImage("tomThree.png");
mouseImage = loadImage("jerryOne.png");
mouseImage2 = loadImage("jerryTwo.png");
mouseImage3 = loadImage("jerryThree.png");
backImage = loadImage("garden.png");
}

function setup(){
    createCanvas(400,600);
    //create tom and jerry sprites here
    cat=createSprite(40,100,20,20);
    cat.addImage(catImage);

    mouse=createSprite(40,300,20,20);
  mouse.addImage(mouseImage);

    background=createSprite(400,0,900,900);
    background.addImage("background",backImage);
    background.velocityX=-4;
    background.x=ground.width/2;
    
}

function draw() {

    background(255);
    if(background.x<0) {
        background.x=background.width/2;
      }
      keyPressed()
    //Write condition here to evalute if tom and jerry collide
    if (cat.x-mouse.x<(cat.width-mouse.width)/2) {
        cat.addAnimation("catLastImage",catImage3);
        cat.changeAnimation("catLastImage");
        mouse.addAnimation("mouseLastImage",mouseImage3);
    mouse.changeAnimation("mouseLastImage");
    }
    
    if (isTouchin(cat,mouse)){
        cat.velocityX=0;
    }

    
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode===LEFT_ARROW){
    cat.velocityX=-5;
    cat.addAnimation("catRunning",catImage2);
    cat.changeAnimation("catRunning");
    mouse.addAnimation("mouseRunning",mouseImage2);
    mouse.changeAnimation("mouseRunning");
}
}


