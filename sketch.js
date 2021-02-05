var ball;
var white;
var gameState= "start";

function setup() {
  createCanvas(1920,1080);
  //  ball = createSprite(724,360,20,20);
  //  ball.addImage("dot",dot);
  //  ball.scale=0.1;
  //  ball.velocityY= -5;
  //  ball.velocityX= -5;

  //  bouncestrip= createSprite(160,210,517,20);
  //  bouncestrip.rotation=-13.5
  //  bouncestrip2= createSprite(1208,195, 517,20);
  //  bouncestrip2.rotation =13.5;
  //  bouncestrip3= createSprite(695,170,540,20);
  //  out= createSprite(706,83,540,50);
  //  tin=createSprite(698,414,540,30);
  home= createSprite(1016,524);
  home.addImage("s1.png" , pic);
  home.scale=0.3;
  home.visible = false;
  start= createSprite(1720,1012);
    start.addImage("start.png" , s2);
    start.scale=0.5;
    start.visible= false;

    
  



  //  player1= createSprite(200,200,20,20);
  //  computer=createSprite(550,300,20,20);
  //  player1.addImage("comp", comp);   
  //  computer.scale=0.5;
   
//    bouncestrip.visible=true;
//    bouncestrip2.visible=true;
//    bouncestrip3.visible=true;
//    out.visible=true;
//    tin.visible=true;
 }

function preload(){
  white=loadImage("finalcourt.jpg");
  dot=loadImage("squashball.png");
  comp=loadImage("racketcomp.png");
  pic= loadImage("s1.png");
  s2= loadImage("start.png");
  n1= loadImage("nbutton.png");
  male= loadImage("maleinspo.png");
  female= loadImage("femalei.png");
  mb= loadImage("nb.png");
}

function draw() {
  if(gameState==="start"){
    background("skyblue");
  }
  else if(gameState ==="players"){
    background("white");
  }
  else if (gameState==="names"){
  background("black");
  }
  else if (gameState==="game"){
    background("white");
  }
  else{
    background("lightpink");
  }
  
  fill("black"); 
  textSize(20); 
  drawSprites();
  text(mouseX + " : " + mouseY, mouseX, mouseY);
  textSize(15); 

  
  if(gameState==="start"){
    home.visible = true;
    start.visible= true;
    text("THE SQUASH MANIA" , 990, 161);
    if(mousePressedOver(start)){
      gameState="rules"
      home.visible = false;
      start.visible=false;
    }
  }
  if(gameState==="rules"){
    textAlign(CENTER);
    textSize(80);
    text("RULES" , 880, 134 );

    textAlign(CENTER);
    textSize(30);
    text("1- Each game has 11 points." , 250, 300);

    textAlign(CENTER);
    textSize(30);
    text("2- If the ball hits the tin or goes above the last red line, then you lose the point." , 570 , 409);

    // textSize(30);
    // text("")
    
  next= createSprite(1720,900);
  next.addImage("nbutton.png" , n1);
  next.scale=0.5;


   if (mousePressedOver(next)){
    gameState= "names";
  }
   
    //   create a if statement telling gamestate==="names" then what has to be done
  }
  if(gameState==="players"){
    var p1 = createSprite(100,100,100,10);
  }

  

 

  if(gameState ==="names"){
   minspo=createSprite(902,300);
   minspo.addImage("maleinspo.png" , male);
   minspo.scale= 0.5;
  
   finspo= createSprite(902,800);
   finspo.addImage("femalei.png" , female);
   finspo.scale=0.5;

   saurav= createSprite(550, 300);  
   // add the players and their names and put more pics and make them invisible.

   next.destroy();
   move = createSprite(1720 ,900);
  move.addImage("nb.png" , mb);
  move.scale=0.2;

  if(mousePressedOver(move)){
    gameState= "game";
    // move.visible= false;
    // minspo.visible= false;
    // finspo.visible= false;
  }
   
  }

  
    




// player1.y = World.mouseY;
// player1.x = World.mouseX;

// if (keyDown("UP_ARROW")){
//   computer.velocityX = 3;
//   computer.velocityY = -5;
// }
// if (keyDown(DOWN_ARROW)){
//   computer.velocityX = -3;
//   computer.velocityY = 5;
// }
//   if(keyDown(LEFT_ARROW)){
//     computer.velocityX = -5;
//     computer.velocityY = 3;
//   }
//   if(keyDown(RIGHT_ARROW)){
//     computer.velocityX = 5;
//     computer.velocityY = -3;

//   }

// edges = createEdgeSprites();
// ball.bounceOff(edges);

// ball.bounceOff(bouncestrip);
// ball.bounceOff(bouncestrip2);
// ball.bounceOff(bouncestrip3);

// ball.bounceOff(player1);

}