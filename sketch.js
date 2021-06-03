var bgStart;
var gameState = "start";
var girlImg,boyImg,cloudImg, cloudImg1;
var countButton = 1;
var next,nextImg;
var start,startImg;
var levelImg;
var l1,l2,l3,l4,l1Img,l2Img,l3Img,l4Img;
var lock1,lock2,lock3;
var mario,marioAni,marioStanding,marioBack,marioPower,mariodead,mariostar,marioSpace,marioSpaceProtected;
var distance = 0;
var skybg,ground1,ground2;
var mousePressedl1 = false;
var mousePressedl2 = false;
var mousePressedl3 = false;
var g1Img,g2Img,g1Group;
var key1,key1Img,key2,key3;
var restart,nextLevel2,restartImg,nextLevel2Img,restart2;
var mushroom1Ani,mushroom2Ani,mushroom1Stand,mushroom2Stand;
var mushroom1Group;
var cherryImg,cherryGroup;
var coinImg,coinG1,coinG2,coinG3;
var score = 0;
var invisiGround1,invisiGround2Group;
var time = 0;
var forestbg,wall1,wall2,wall3,wall4,wall5,wall6,wall7,wall8,wall9,wall10,wall11,wall12,wall13,wall14,wall15,wall16,wall17,wall18,wall19;
var crow,crowImg1,crowImg2,gorilla,gorillaImg1,gorillaImg2,dino,dinoImg1,dinoImg2,flamingo,flamingoImg1,flamingoImg2,bat,batImg,potion,potionImg,potionGroup;
var line1,line2,line3,line4;
var levelup,nextLevel3,nextLevel4;
var spacebg,laserGroup,enemyLaserGroup1,enemyLaserGroup2,enemy1Img,enemy2Img,enemy1Group,enemy2Group;
var laser1,laser2,laser3;
var waterbg,marioWater1,marioWater2,fish1Img,fish2Img,crabImg,octopusImg,fish1Group,fish2Group,crabGroup,octopusGroup;
var treasure1,treasure2,treasure3,key4,key5,key6,treasure1Img,treasure2Img,treasure3Img,opent1,opent2,opent3;
var marioDance,camXl4,camYl4;
var level1State = true;
var level2State = true;
var level = 1;





function preload(){
    bgStart = loadImage("IMAGES/bg start.png")
    girlImg = loadImage("IMAGES/person1.png");
    boyImg = loadImage("IMAGES/person2.png");
    cloudImg = loadImage("IMAGES/cloud.png");
    nextImg = loadImage("IMAGES/next level.png");
    cloudImg1 = loadImage("IMAGES/cloud1.png");
    startImg = loadImage("IMAGES/start_button.png");
    levelImg = loadImage("IMAGES/levet bg.png");
    l1Img = loadImage("IMAGES/level1.png");
    l2Img = loadImage("IMAGES/level2.png");
    l3Img = loadImage("IMAGES/level3.png");
    l4Img = loadImage("IMAGES/level4.png");
    marioBack = loadAnimation("IMAGES/MARIO/m4.png","IMAGES/MARIO/m5.png","IMAGES/MARIO/m6.png")
    marioAni = loadAnimation("IMAGES/MARIO/m1.png","IMAGES/MARIO/m2.png","IMAGES/MARIO/m3.png")
    marioStanding = loadAnimation("IMAGES/MARIO/m1.png");

    skybg = loadImage("IMAGES/sky bg.jpg");
    // groundImg = loadImage("IMAGES/ground.png");
    g1Img = loadImage("IMAGES/sky/g1.png");
    key1Img = loadImage("IMAGES/TEASURE/display key.png");
    restartImg = loadImage("IMAGES/restart.png");
    nextLevel2Img = loadImage("IMAGES/next level.png");
    // restartPoster = loadImage("IMAGES/restart poster.png");
    mushroom1Ani = loadAnimation("IMAGES/sky/m1.png","IMAGES/sky/m2.png","IMAGES/sky/m3.png");
    //mushroom2Ani = loadAnimation("IMAGES/sky/m4.png","IMAGES/sky/m5.png","IMAGES/sky/m6.png")
   // mushroom2Stand = loadAnimation("IMAGES/sky/m4.png");
    mushroom1Stand = loadAnimation("IMAGES/sky/m1.png");
    cherryImg = loadImage("IMAGES/cherry.png");
    coinImg = loadImage("IMAGES/coin1.png")
    forestbg = loadImage("IMAGES/forest bg.jpg");
    marioPower = loadAnimation("IMAGES/MARIO/marioPower.png");
    crowImg1 = loadAnimation("IMAGES/forest/crow1.png");
    crowImg2 = loadAnimation("IMAGES/forest/crow2.png");
    gorillaImg1 = loadAnimation("IMAGES/forest/gorilla1.png","IMAGES/forest/gorilla2.png");
    gorillaImg2 = loadAnimation("IMAGES/forest/gorilla3.png","IMAGES/forest/gorilla4.png");
    dinoImg1 = loadAnimation("IMAGES/forest/dino1.png","IMAGES/forest/dino2.png","IMAGES/forest/dino3.png");
    dinoImg2 = loadAnimation("IMAGES/forest/dino4.png","IMAGES/forest/dino5.png","IMAGES/forest/dino6.png");
    flamingoImg1 = loadAnimation("IMAGES/forest/flamingo1.png","IMAGES/forest/flamingo2.png","IMAGES/forest/flamingo3.png");
    flamingoImg2 = loadAnimation("IMAGES/forest/flamingo4.png","IMAGES/forest/flamingo5.png","IMAGES/forest/flamingo6.png")
    batImg = loadAnimation("IMAGES/forest/bat1.png","IMAGES/forest/bat2.png");
    potionImg = loadImage("IMAGES/potion.png");
    levelup = loadImage("IMAGES/levelup.png");
    mariodead = loadAnimation("IMAGES/MARIO/mariodie.png");
    mariostar = loadAnimation("IMAGES/MARIO/marioStar.png");
    spacebg = loadImage("IMAGES/space bg.jpg");
    marioSpace = loadAnimation("IMAGES/space/space ship.png");
    laser3 = loadImage("IMAGES/space/laser3.png");
    laser2 = loadImage("IMAGES/space/laser2.png");
    laser1 = loadImage("IMAGES/space/laser1.png");
    enemy1Img = loadImage("IMAGES/space/enemy ship.png");
    enemy2Img = loadImage("IMAGES/space/enemyship2.png");
    marioSpaceProtected = loadAnimation("IMAGES/space/protected ship.png");
    waterbg = loadImage("IMAGES/water bg.jpg");
    marioWater1 = loadAnimation("IMAGES/MARIO/marioWater1.png");
    marioWater2 = loadAnimation("IMAGES/MARIO/marioWater2.png");
    fish1Img = loadAnimation("IMAGES/water/fish1.png","IMAGES/water/fish2.png","IMAGES/water/fish3.png");
    fish2Img = loadAnimation("IMAGES/water/fish4.png","IMAGES/water/fish5.png","IMAGES/water/fish6.png")
    crabImg = loadImage("IMAGES/water/crab.png");
    octopusImg = loadAnimation("IMAGES/water/octopus1.png","IMAGES/water/octopus2.png");
    treasure1Img = loadAnimation("IMAGES/TEASURE/t1.png");
    treasure2Img = loadAnimation("IMAGES/TEASURE/t2.png");
    treasure3Img = loadAnimation("IMAGES/TEASURE/t3.png");
    opent1 = loadAnimation("IMAGES/TEASURE/open t1.png");
    opent2 = loadAnimation("IMAGES/TEASURE/open t2.png");
    opent3 = loadAnimation("IMAGES/TEASURE/open t3.png");
    marioDance = loadAnimation("IMAGES/MARIO/marioDancing1.png","IMAGES/MARIO/marioDancing2.png")

}

function setup(){
    createCanvas(1200,750);
    
    next = createSprite(1100,50);
    next.addImage(nextImg);
    next.scale = 0.2;

    start = createSprite(540,650);
    start.addImage(startImg);
    start.scale = 1.5;

    restart = createSprite(camera.position.x,camera.position.y);
    restart.addImage(restartImg);
    restart.visible = false;

    mario = createSprite(138,600);
    mario.addAnimation("standing",marioStanding);
    mario.addAnimation("running",marioAni);
    mario.addAnimation("back",marioBack);
    mario.addAnimation("power",marioPower);
    mario.addAnimation("dead",mariodead);
    mario.addAnimation("power",mariostar);
    mario.addAnimation("space",marioSpace);
    mario.addAnimation("protected",marioSpaceProtected);
    mario.addAnimation("floating_right",marioWater1);
    mario.addAnimation("floating_left",marioWater2);
    mario.addAnimation("dancing",marioDance);
    mario.scale = 1.8;
    
    l1 = createSprite(147,186);
    l1.addImage(l1Img);
    l1.scale = 0.4;

    l2 = createSprite(465,185);
    //l2.addImage(lock1);
    l2.addImage(l2Img);
    l2.scale = 0.4;

    
    l3 = createSprite(748,191);
    l3.addImage(l3Img);
    l3.scale = 0.4;

    
    l4 = createSprite(1030,186);
    l4.addImage(l4Img);
    l4.scale = 0.3;

    g1Group = new Group();
    mushroom1Group = new Group();
    cherryGroup = new Group();
    coinG1 = new Group();
    coinG2 = new Group();
    coinG3 = new Group();
    invisiGround2Group = new Group();
    laserGroup = new Group();
    enemyLaserGroup1 = new Group();
    enemyLaserGroup2 = new Group();
    enemy1Group = new Group();
    enemy2Group = new Group();
    potionGroup = new Group();
    fish1Group = new Group();
    fish2Group = new Group();
    crabGroup = new Group();
    octopusGroup = new Group();

}

function draw(){
    //console.log();
    
    if(gameState === "start"){
        background(bgStart);
        fill("maroon");
        textSize(50);
        strokeWeight(7);
        stroke("pink");
        text("Mario : The Runner",400,50);
        text("__________________",365,60);

        image(girlImg,100,550,150,200);
        image(boyImg,1000,550,150,200);
        
        if(countButton === 1){
            image(cloudImg,230,200,760,550);
            textSize(25);
            text("Use the arrow keys to play the game",380,350);
            text("Eat the fruits to  destroy or kill the obstacles",350,400);
            text("The power of killing will only be there for sometime.",350,440);
            text("After that you have to protect your self.",380,480);

            start.visible = false;
            mario.visible = false;
            l1.visible = false;
            l2.visible = false;
            l3.visible = false;
            l4.visible = false;


        }
        if(mousePressedOver(next)){
            countButton=2;
        }
        if(countButton === 2){
            image(cloudImg1,280,200,760,550);
            textSize(25);
            text("Collect all the key from the first three levels",400,350);
            text("Reach to the treasure boxes in the last level",380,400);
            text("Open those boxes to win the whole game",380,450);
            fill("black");
            text("Click on 'start' button to play",380,600);
            start.visible = true;
            mario.visible = false;
            l1.visible = false;
            l2.visible = false;
            l3.visible = false;
            l4.visible = false;

        }

        if(mousePressedOver(start)){
            gameState = "level";
        }
    }else if(gameState === "level"){
        background(levelImg);
        
        if(!mousePressedl1){
            textSize(20);
            fill("black");
            text("Click on level 1 to start",500,50);
        }

        //start.hide();
        start.destroy();
        next.destroy();

        l1.visible = true;
        l2.visible = true;
        l3.visible = true;
        l4.visible = true;

        l1.x = camera.position.x - 453;
        l2.x = camera.position.x - 135;
        l3.x = camera.position.x + 148;
        l4.x = camera.position.x + 430;
        mario.y = camera.position.y + 225;
        l1.y = camera.position.y - 189;
        l2.y = camera.position.y - 190;
        l3.y = camera.position.y - 184;
        l4.y = camera.position.y -189;
        


        
        mario.visible = true;

        if(mousePressedOver(l1) && level === 1){
            mario.changeAnimation("running",marioAni);
            mario.velocityX = 8;
            mousePressedl1 = true;
            
            
            
        }
        if(!mousePressedl2 && level === 2){
            textSize(20);
            fill("black");
            text("Click on level 2 to start",camera.position.x - 100,50);
        }

        if(mousePressedOver(l2) && level === 2){
           // mario.changeAnimation("running",marioAni);
            //mario.velocityX = 8;
            mousePressedl2 = true;
            
            gameState = "level2";
            mario.x = camera.position.x -500;
            mario.y = camera.position.y -305;
            l1.visible = false;
            l2.visible = false;
            l3.visible = false;
            l4.visible = false;

            wall1 = createSprite(camera.position.x -500,150,30,10);
            wall1.shapeColor = "yellow";
            wall1.visible =  false;
            mario.scale = 0.7;
     
            wall2 = createSprite(camera.position.x +60,50,880,10);
            wall2.shapeColor = "yellow";
     
            wall3 = createSprite(camera.position.x +500,350,10,610);
            wall3.shapeColor = "yellow";
     
            wall4 = createSprite(camera.position.x +500,650,10,150);
            wall4.shapeColor = "yellow";
     
            wall5 = createSprite(camera.position.x +55,720,900,10);
            wall5.shapeColor = "yellow";
     
            wall6 = createSprite(camera.position.x -400,475,10,500);
            wall6.shapeColor = "yellow";
     
            wall7 = createSprite(camera.position.x -330,421,10,450);
            wall7.shapeColor = "yellow";
     
            wall8 = createSprite(camera.position.x +420,420,10,450);
            wall8.shapeColor = "blue";
     
            wall9 = createSprite(camera.position.x +75,110,700,10);
            wall9.shapeColor = "blue";
     
            wall10 = createSprite(camera.position.x +50,650,769,10);
            wall10.shapeColor = "blue";
     
            wall11 = createSprite(camera.position.x -150,310,10,400);
            wall11.shapeColor = "blue";
     
            wall12 = createSprite(camera.position.x -250,450,10,400);
            wall12.shapeColor = "blue";
     
            wall13 = createSprite(camera.position.x +55,200,400,10);
            wall13.shapeColor = "blue";
     
            wall14 = createSprite(camera.position.x +200,300,10,200);
            wall14.shapeColor = "red";
     
            wall15 = createSprite(camera.position.x -5,400,280,10);
            wall15.shapeColor = "red";
     
            wall16 = createSprite(camera.position.x +50,350,10,100);
            wall16.shapeColor = "red";
     
            wall17 = createSprite(camera.position.x -50,475,10,160);
            wall17.shapeColor = "red";
     
            wall18 = createSprite(camera.position.x +140,500,380,10);
            wall18.shapeColor = "red";
     
            wall19 = createSprite(camera.position.x +330,400,10,350);
            wall19.shapeColor = "red";
     
            line1 = createSprite(camera.position.x - 200,80,10,50);
            line1.shapeColor = "red";
            line1.visible = false;
     
            line2 = createSprite(camera.position.x + 450,80,10,50);
            line2.shapeColor = "red";
            line2.visible = false;

            line3 = createSprite(camera.position.x + 460,680,60,10);
            line3.shapeColor = "red";
            line3.visible = false;

            line4 = createSprite(camera.position.x + 460,100,60,10);
            line4.shapeColor = "red";
            line4.visible = false;
     
            crow = createSprite(camera.position.x - 50,80,10,10);
            crow.shapeColor = "white";
            crow.velocityX = 4;
            crow.addAnimation("right",crowImg1);
            crow.addAnimation("left",crowImg2);
            crow.scale = 0.2;

            gorilla = createSprite(camera.position.x + 460,150,10,10);
            gorilla.velocityY = 5;
            gorilla.addAnimation("down",gorillaImg1);
            gorilla.addAnimation("up",gorillaImg2);
            gorilla.scale = 0.2;

            dino = createSprite(camera.position.x +300,620,10,10);
            dino.velocityX = 5;
            dino.addAnimation("left",dinoImg1);
            dino.addAnimation("right",dinoImg2);
            dino.scale = 0.3;

            flamingo = createSprite(camera.position.x + 200,455,10,10);
            flamingo.velocityX = 4;
            flamingo.addAnimation("right",flamingoImg1);
            flamingo.addAnimation("left",flamingoImg2);
            flamingo.scale = 0.2;

            bat = createSprite(camera.position.x - 370,400,10,10);
            bat.addAnimation("flying",batImg);
            bat.scale = 0.3;
            bat .velocityY = -4;

           

            key2 = createSprite(camera.position.x - 50,300,10,10);
            key2.addImage(key1Img);
            key2.scale = 0.3;

            nextLevel3 = createSprite(camera.position.x,375,10,10 );
            nextLevel3.shapeColor = "white";
            nextLevel3.addImage(nextLevel2Img);
            nextLevel3.scale = 0.3;
            nextLevel3.visible = false;
       
        }

        if(mousePressedOver(l3) && level === 3){
            gameState = "level3";

            mario.x = camera.position.x ;
            mario.y = camera.position.y -205;
            l1.visible = false;
            l2.visible = false;
            l3.visible = false;
            l4.visible = false;
            mario.changeAnimation("space",marioSpace);
            mario.scale= 0.5;

            key3 = createSprite(camera.position.x,camera.position.y + 3100,10,10);
            key3.shapeColor = "orange";
            key3.addImage(key1Img);
            key3.scale = 0.3;

            nextLevel4 = createSprite(camera.position.x,camera.position.y +2900,10,10 );
            nextLevel4.shapeColor = "white";
            nextLevel4.addImage(nextLevel2Img);
            nextLevel4.scale = 0.3;
            nextLevel4.visible = false;
           
        }

       

        if(mousePressedOver(l4) && level === 4){
            gameState = "level4";
            camXl4 = camera.position.x;
            camYl4 = camera.position.y;
            l1.visible = false;
            l2.visible = false;
            l3.visible = false;
            l4.visible = false;

            treasure1 = createSprite(camera.position.x +4900,camera.position.y+125,10,10);
            treasure1.addAnimation("tresure",treasure1Img);
            treasure1.addAnimation("open",opent1);
            treasure1.scale = 0.5;
            treasure2 = createSprite(camera.position.x +5050,camera.position.y+125,10,10);
            treasure2.addAnimation("tresure",treasure2Img);
            treasure2.addAnimation("open",opent2);
            treasure2.scale = 0.5;
            treasure3 = createSprite(camera.position.x +5200,camera.position.y+125,10,10);
            treasure3.addAnimation("tresure",treasure3Img);
            treasure3.addAnimation("open",opent3);
            treasure3.scale = 0.5;
            key4 = createSprite(camera.position.x +4900,camera.position.y +10,10,10);
            key4.addImage(key1Img);
            key4.scale = 0.3;
            key4.visible = false;
            key5 = createSprite(camera.position.x +5050,camera.position.y +10,10,10);
            key5.addImage(key1Img);
            key5.scale = 0.3;
            key5.visible = false;
            key6 = createSprite(camera.position.x +5200,camera.position.y +10,10,10);
            key6.addImage(key1Img);
            key6.scale = 0.3;
            key6.visible = false;

        }

        

        if(mario.x === 1210){
            gameState = "level1"
            mario.x = 138;
            mario.y = 500;
            mario.changeAnimation("standing",marioStanding);
            ground2 = createSprite(camera.position.x,600,width,70);
            ground2.shapeColor = "brown";
            ground1 = createSprite(camera.position.x,570,width,30);
            ground1.shapeColor = "green";
            invisiGround1 = createSprite(camera.position.x,570,width,20);
            invisiGround1.visible = false;
            mario.velocityX = 0;
            
            key1 = createSprite(400,-40,10,10);
            key1.addImage(key1Img);
            key1.scale = 0.4;
            key1.visible = false;
            //image(restartPoster,50,300,50,50);
            restart = createSprite(50,50);
            restart.addImage(restartImg);
            restart.scale = .5;
            restart.visible = false;

            nextLevel2 = createSprite(50,50);
            nextLevel2.addImage(nextLevel2Img);
            nextLevel2.scale = 0.2;
            nextLevel2.visible = false;
            
        }
    }else   if(gameState === "level1"){
            

        if(level1State){
            background(0);
            time++;
            image(skybg,0,0,width*5,height);
            l1.visible = false;
            l2.visible = false;
            l3.visible = false;
            l4.visible = false;

            ground1.x = camera.position.x;
            ground2.x = camera.position.x;
            invisiGround1.x = camera.position.x;


            mario.collide(invisiGround1);
            fill("white")
            textSize(20);
        // text("Distance : " + distance,camera.position.x,50);
        mario.velocityY+=0.9;
        if(keyDown("right")){
            mario.x+=8;
            if(distance >= 60 && distance <= 650){
                camera.position.x+=8;
            }
            distance++;
            mario.changeAnimation("running",marioAni);
        }else if(keyDown("left")){
            mario.x-=8;
            if(distance >= 60){
                camera.position.x-=8;
            }
            distance--;
            mario.changeAnimation("back",marioBack);
        }else if(keyDown("up")){
            mario.velocityY = -9;
            mario.x+=3;
            if(distance >= 60){
                camera.position.x+=3;
            }
            distance++;
        }else{
            mario.changeAnimation("standing",marioStanding);
        }
        if(distance === 500){
            key1.x = camera.position.x + 1500;
            key1.y = 400;
            key1.visible =true;
            restart.x= camera.position.x + 1000;
            restart.y = 300;
            nextLevel2.x= camera.position.x + 1300;
            nextLevel2.y = 300;
            
            

        }
        fill("black");
        textSize(20);
        text("Score : " + score,camera.position.x - 100 , 50);

        if(mario.isTouching(g1Group)){
            mario.velocityX = 0
            mario.velocityY = 0;
        }

        if(mario.isTouching(invisiGround2Group)){
            mario.bounceOff(invisiGround2Group);
        }

        if(mario.isTouching(coinG1)){
            coinG1.destroyEach();
            score++;
        }else if(mario.isTouching(coinG2)){
            coinG2.destroyEach();
            score++;
        }else if(mario.isTouching(coinG3)){
            coinG3.destroyEach();
            score++;
        }

        if(mario.isTouching(cherryGroup)){
            cherryGroup.destroyEach();
            time = 0;
        }else if(mario.isTouching(mushroom1Group) && time > 100 ){
            mario.velocityY = 6;
            mario.velocityX = 0;
            mushroom1Group.setVelocityXEach(0);
            cherryGroup.setVelocityXEach(0);
            g1Group.setVelocityXEach(0);
            coinG1.setVelocityXEach(0);
            coinG2.setVelocityXEach(0);
            coinG3.setVelocityXEach(0);
            invisiGround2Group.setVelocityXEach(0);
            invisiGround2Group.setLifetimeEach(-1);
            mushroom1Group.setLifetimeEach(-1);
            cherryGroup.setLifetimeEach(-1);
            g1Group.setLifetimeEach(-1);
            coinG3.setLifetimeEach(-1);
            coinG1.setLifetimeEach(-1);
            coinG2.setLifetimeEach(-1);
            invisiGround1.destroy();
            level1State = false;
            restart.visible = true;
                      

        }
        if(time < 100){
            mario.changeAnimation("power",marioPower);
        }

    if(distance<=600){
        G1();
        M1();
        Cherry();
        Coin();
        Coin2();
        Coin3();
        Invisible();
    }
    if(mario.isTouching(key1)){
            //gameState = "level";
            //l2.scale = 0.8;
            g1Group.destroyEach();
            fill("yellow");
            textSize(30);
            stroke("black");
            strokeWeight(3);
            text("You have earned first key",camera.position.x - 70,100);
            text("___________________________",camera.position.x - 120,130);
            text("Restart",restart.x -40,380);
            text("Next level",nextLevel2.x -50,380);
        // mario.velocityX=5;
            //key1.visible = false;
            //mario.changeAnimation("running",marioAni);            
            restart.visible = true;
            nextLevel2.visible = true;
            g1Group.destroyEach();
            cherryGroup.destroyEach();
            mushroom1Group.destroyEach();

    }

    if(mousePressedOver(nextLevel2)){
            gameState="level";
            ground1.destroy();
            ground2.destroy();
            key1.destroy();
            restart.destroy();
            nextLevel2.destroy();
            mario.x = camera.position.x - 462;
            l2.scale = 1;
            l1.scale=0.2;
            level = 2;
            
                                
        }
    
    }else{
        background(skybg);
        restart.visible = true;
        restart.x = camera.position.x;
        if(mousePressedOver(restart)){
            gameState = "level";
            restart.visible = false;
            l1.visible = true;
            l2.visible = true;
            l3.visible = true;
            l4.visible = true;
            level1State = true;
        }
    }
       
       
        
    } if(gameState === "level2"){
        if(level2State){
            background(forestbg);
        //image(forestbg,0,0,width*5,height);
        time++;
        mario.collide(wall1);
        
        if(crow.isTouching(line2)){
            crow.bounceOff(line2);
            crow.changeAnimation("left",crowImg2);
            crow.velocityX = -4;
        }
        if(crow.isTouching(line1)){
            crow.bounceOff(line1);
            crow.changeAnimation("right",crowImg1);
            crow.velocityX = 4;
        }
        if(gorilla.isTouching(line3)){
        gorilla.bounceOff(line3);
        gorilla.changeAnimation("up",gorillaImg2);
        gorilla.velocityY = -5;
    }

        if(gorilla.isTouching(line4)){
            gorilla.bounceOff(line4);
            gorilla.changeAnimation("down",gorillaImg1);
            gorilla.velocityY = 5;
        }

        if(dino.isTouching(wall12)){
            dino.bounceOff(wall12);
            dino.changeAnimation("left",dinoImg1);
            dino.velocityX = 5;
        }
       
        if(dino.isTouching(wall8)){
            dino.bounceOff(wall8);
            dino.changeAnimation("right",dinoImg2);
            dino.velocityX = -5;
        }

        if(flamingo.isTouching(wall17)){
            flamingo.bounceOff(wall17);
            flamingo.changeAnimation("right",flamingoImg1);
            flamingo.velocityX = 4;
        }

        if(flamingo.isTouching(wall19)){
            flamingo.bounceOff(wall19);
            flamingo.changeAnimation("left",flamingoImg2);
            flamingo.velocityX = -4;
        }
       
        if(bat.isTouching(wall5)){
            bat.bounceOff(wall5);
            //bat.changeAnimation("left",flamingoImg2);
            bat.velocityY = -4;
        }

        if(bat.isTouching(wall2)){
            bat.bounceOff(wall2);
            //bat.changeAnimation("left",flamingoImg2);
            bat.velocityY = 4;
        }

        if(keyDown("right")){
            wall1.x+=5;
            mario.x+=5;
        }

        if(keyDown("left")){
            wall1.x-=5;
            mario.x-=5;
        }

        if(keyDown("down")){
            wall1.y+=5;
            mario.y+=5;
        }

        if(keyDown("up")){
            wall1.y-=5;
            mario.y-=5;
        }

        if(mario.isTouching(wall2) || mario.isTouching(wall3) || mario.isTouching(wall4) || mario.isTouching(wall5) || mario.isTouching(wall6) || mario.isTouching(wall7) || mario.isTouching(wall8) || mario.isTouching(wall9) || mario.isTouching(wall10) || mario.isTouching(wall11) || mario.isTouching(wall12) || mario.isTouching(wall13) || mario.isTouching(wall14) || mario.isTouching(wall15) || mario.isTouching(wall16) || mario.isTouching(wall17) || mario.isTouching(wall18) || mario.isTouching(wall19)){
            mario.bounceOff(wall2);
            mario.bounceOff(wall3);
            mario.bounceOff(wall4);
            mario.bounceOff(wall5);
            mario.bounceOff(wall6);
            mario.bounceOff(wall7);
            mario.bounceOff(wall8);
            mario.bounceOff(wall9);
            mario.bounceOff(wall10);
            mario.bounceOff(wall11);
            mario.bounceOff(wall12);
            mario.bounceOff(wall13);
            mario.bounceOff(wall14);
            mario.bounceOff(wall15);
            mario.bounceOff(wall16);
            mario.bounceOff(wall17);
            mario.bounceOff(wall18);
            mario.bounceOff(wall19);
            
        }

        if(wall1.isTouching(wall2) || wall1.isTouching(wall3) || wall1.isTouching(wall4) || wall1.isTouching(wall5) || wall1.isTouching(wall6) || wall1.isTouching(wall7) || wall1.isTouching(wall8) || wall1.isTouching(wall9) || wall1.isTouching(wall10) || wall1.isTouching(wall11) || wall1.isTouching(wall12) || wall1.isTouching(wall13) || wall1.isTouching(wall14) || wall1.isTouching(wall15) || wall1.isTouching(wall16) || wall1.isTouching(wall17) || wall1.isTouching(wall18) || wall1.isTouching(wall19)){
            wall1.bounceOff(wall2);
            wall1.bounceOff(wall3);
            wall1.bounceOff(wall4);
            wall1.bounceOff(wall5);
            wall1.bounceOff(wall6);
            wall1.bounceOff(wall7);
            wall1.bounceOff(wall8);
            wall1.bounceOff(wall9);
            wall1.bounceOff(wall10);
            wall1.bounceOff(wall11);
            wall1.bounceOff(wall12);
            wall1.bounceOff(wall13);
            wall1.bounceOff(wall14);
            wall1.bounceOff(wall15);
            wall1.bounceOff(wall16);
            wall1.bounceOff(wall17);
            wall1.bounceOff(wall18);
            wall1.bounceOff(wall19);
            
        }

        if(mario.isTouching(key2)){
            dino.velocityX = 0;
            dino.velocityY = 0;
            flamingo.velocityY =0;
            flamingo.velocityX = 0;
            gorilla.velocityX = 0;
            gorilla.velocityY = 0;
            bat.velocityY= 0;
            bat.velocityX = 0;
            crow.velocityY = 0;
            crow.velocityX = 0;
            image(levelup,camera.position.x -100,200);
            mario.x+=0
            mario.x-=0
            mario.y+=0
            mario.y-=0
           nextLevel3.visible = true;

        }
        if(mousePressedOver(nextLevel3)){
            gameState = "level";
            wall1.destroy();
            wall2.destroy();
            wall3.destroy();
            wall4.destroy();
            wall5.destroy();
            wall6.destroy();
            wall7.destroy();
            wall8.destroy();
            wall9.destroy();
            wall10.destroy();
            wall11.destroy();
            wall12.destroy();
            wall13.destroy();
            wall14.destroy();
            wall15.destroy();
            wall16.destroy();
            wall17.destroy();
            wall18.destroy();
            wall19.destroy();
            nextLevel3.visible = false;
            key2.destroy();
            flamingo.destroy();
            crow.destroy();
            gorilla.destroy();
            bat.destroy();
            dino.destroy();
            mario.scale = 1.5;
            mario.x = camera.position.x - 462;
            l1.scale = 0.2;
            l3.scale = 1;
            level = 3;
            
        }

       



        
         if(mario.isTouching(dino) || mario.isTouching(crow) || mario.isTouching(flamingo) || mario.isTouching(gorilla) || mario.isTouching(bat)){
            mario.changeAnimation("dead",mariodead);
            mario.scale = 0.2;
            dino.velocityX = 0;
            dino.velocityY = 0;
            flamingo.velocityY =0;
            flamingo.velocityX = 0;
            gorilla.velocityX = 0;
            gorilla.velocityY = 0;
            bat.velocityY= 0;
            bat.velocityX = 0;
            crow.velocityY = 0;
            crow.velocityX = 0
            level2State = false;
            restart.visible = true;
        }

        /*if(time<100){
            mario.changeAnimation("power",mariostar);
        }*/

        //dino.debug = true;
        dino.setCollider("rectangle",4,5,98,67);
       // bat.debug = true;
        bat.setCollider("rectangle",4,35,88,67);
       // flamingo.debug = true;
        flamingo.setCollider("rectangle",4,35,88,67);
       // gorilla.debug = true;
        gorilla.setCollider("rectangle",4,35,88,67);

        
        
        }else{
            background(forestbg);
            restart.visible = true;
            restart.x = camera.position.x+50;
            if(mousePressedOver(restart)){
                gameState = "level";
                restart.visible = false;
                l1.visible = true;
                l2.visible = true;
                l3.visible = true;
                l4.visible = true;
                level1State = true;
            }
        }
        
    }

    if(gameState === "level3"){
        background(255);
        time++;
        image(spacebg,camera.position.x - 600,0,width,height*5);
        //distance++;
       // text("distance : " + distance,camera.position.x - 50,camera.position.y);
        if(keyDown("right")){
            mario.x+=8;
           // camera.position.x+=8;
            //distance++;
        }else if(keyDown("left")){
            mario.x-=8;
           // camera.position.x-=8;
            //distance--;
        }else if(keyDown("up")){
            mario.y-=8;
            if(distance > 0){
                camera.position.y-=8;
            }
            distance--;
        }else if(keyDown("down")){
            mario.y+=8;
            if(distance>=0 && distance<375){
                camera.position.y+=8
            }
            distance++;
        }
        if(keyWentDown("space")){
            spawnLaser();
        }
        if(distance < 360){
            spawnEnemy1();
            spawnEnemy2();
           //Potion();
        }

        if(laserGroup.isTouching(enemy1Group)){
            enemy2Group.destroyEach();
            enemy1Group.destroyEach();
            enemyLaserGroup1.destroyEach();
            enemyLaserGroup2.destroyEach();
        }

        if(laserGroup.isTouching(enemy2Group)){
            enemy2Group.destroyEach();
            enemy1Group.destroyEach();
            enemyLaserGroup1.destroyEach();
            enemyLaserGroup2.destroyEach();
        }

        if(laserGroup.isTouching(enemyLaserGroup1)){
            enemyLaserGroup2.destroyEach();
            enemyLaserGroup1.destroyEach();
        }
        if(laserGroup.isTouching(enemyLaserGroup2)){
            enemyLaserGroup2.destroyEach();
            enemyLaserGroup1.destroyEach();
        }   

        if(mario.isTouching(enemy2Group) || mario.isTouching(enemy1Group) || mario.isTouching(enemyLaserGroup1) || mario.isTouching(enemyLaserGroup2)){
            mario.velocityY = 0;
            mario.velocityX = 0;
            mario.changeAnimation("dead",mariodead)
            mario.scale = 0.3;

            enemy1Group.setVelocityYEach(0);
            enemy1Group.setLifetimeEach(-1);
            enemy2Group.setVelocityYEach(0);
            enemy2Group.setLifetimeEach(-1);
            enemyLaserGroup1.setVelocityYEach(0);
            enemyLaserGroup1.setLifetimeEach(-1);
            enemyLaserGroup2.setVelocityYEach(-1);
            enemyLaserGroup2.setLifetimeEach(-1);
            
            
        }
       
        if(mario.isTouching(key3)){
            enemy1Group.destroyEach();
            enemy2Group.destroyEach();
            enemyLaserGroup1.destroyEach();
            enemyLaserGroup2.destroyEach();
            nextLevel4.visible = true;
        }
        if(mousePressedOver(nextLevel4)){
            gameState = "level";
            nextLevel4.destroy();
            l1.visible = true;
            l2.visible = true;
            l3.visible = true;
            l4.visible = true;
            l1.scale = 0.2;
            l4.scale = 1;
            mario.changeAnimation("standing",marioStanding);
            key3.destroy();
            mario.x = camera.position.x - 462;
            mario.scale = 1.5
            level = 4;
            

        }


        
    }else if(gameState === "level4"){
        background(225);
        //time++;
        image(waterbg,camXl4 - 600,camYl4 - 375,width*5,height);
        mario.changeAnimation("floating_right",marioWater1);
        fill("white");
        //text("distance : " + distance,camera.position.x - 50,camera.position.y);
        if(keyDown("right")){
            mario.x+=8;
            if(distance >= 60 && distance <= 650){
                camera.position.x+=8;
            }
            distance++;
        }else if(keyDown("left")){
            mario.x-=8;
            if(distance >= 60){
                camera.position.x-=8;
            }
           distance--;
            mario.changeAnimation("floating_left",marioWater2);
        }else if(keyDown("down")){
            mario.y+=8;
        }else if(keyDown("up")){
            mario.y-=8
        }
        
        if(distance<600){
            Fish1();
            Fish2();
            Crab();
            Octopus();
        }

        if(mario.isTouching(treasure1)){
            key4.visible = true;
            key5.visible = true;
            key6.visible = true;
            mario.changeAnimation("standing",marioStanding);
            fill("yellow");
            textSize(25);
            text("Click on keys to open the treasure boxes",camera.position.x + 5000,camera.position.y+125);
            fish1Group.destroyEach();
            fish2Group.destroyEach();
            octopusGroup.destroyEach();
            crabGroup.destroyEach();
            

        }

        if(mousePressedOver(key4)){
            treasure1.changeAnimation("open",opent1);
            key4.destroy();
        }
        if(mousePressedOver(key5)){
            treasure2.changeAnimation("open",opent2);
            key5.destroy();
        }
        if(mousePressedOver(key6)){
            treasure3.changeAnimation("open",opent3);
            key6.destroy();
            mousePressedl3 = true;
        }
        if(mousePressedl3 === true){
           gameState ="victory";
         
        }

        if(mario.isTouching(fish1Group) || mario.isTouching(fish2Group) || mario.isTouching(octopusGroup) || mario.isTouching(crabGroup)){
            fish1Group.setLifetimeEach(-1);
            fish1Group.setVelocityXEach(0);
            fish2Group.setVelocityXEach(0);
            fish2Group.setLifetimeEach(-1);
            crabGroup.setLifetimeEach(-1);
            crabGroup.setVelocityXEach(0);
            octopusGroup.setVelocityXEach(0);
            octopusGroup.setLifetimeEach(-1);
            mario.changeAnimation("dead",mariodead)
           // mario.scale = 0.3;

        }

       
}else if(gameState === "victory"){
    background(bgStart);
    fill("maroon");
    textSize(30);
    text("CONGRATULATIONS",camera.position.x-130,camera.position.y-300);
    text("_________________________",camera.position.x -190,camera.position.y - 300);
    textSize(60);
    text("BRAVO! YOU WON THE GAME",camera.position.x-400,camera.position.y-200);
    mario.changeAnimation("dancing",marioDance);
    treasure1.destroy();
    treasure2.destroy();
    treasure3.destroy();
}
    drawSprites();

}

function G1(){
    if(frameCount % 120 === 0){
        var g1  = createSprite(camera.position.x +  650,0,10,10);
        g1.shapeColor = "black";
        g1.velocityX = -4;
        g1.addImage(g1Img);
        g1.scale = 0.5;
        g1.lifetime = 350;
      //  c1.debug = true;
        g1.y = 350;
        g1Group.add(g1);

    }
}

function Invisible(){
    if(frameCount % 120 === 0){
        var invisiGround2 = createSprite(camera.position.x + 650,0,160,10);
        invisiGround2.shapeColor = "black";
        invisiGround2.velocityX = -4;
        //invisiGround2.addImage(coinImg);
       // coin.scale = 0.1/2;
        invisiGround2.y = 370;
       // mario.bounceoff(invisiGround2);
       invisiGround2.visible = false;
        invisiGround2Group.add(invisiGround2);
        
    }
}
function M1(){
    if(frameCount % 200 === 0){
        var mushroom1  = createSprite(camera.position.x +  650,0,10,10);
        mushroom1.shapeColor = "black";
        mushroom1.velocityX = -4;
        mushroom1.addAnimation("running",mushroom1Ani);
        mushroom1.addAnimation("standing",mushroom1Stand);
        mushroom1.scale = 0.6;
        mushroom1.lifetime = 350;
      //  c1.debug = true;
        mushroom1.y = 530;
        mushroom1Group.add(mushroom1);

    }
}
function Cherry(){
    if(frameCount % 500 === 0){
        var cherry  = createSprite(camera.position.x +  650,0,10,10);
        cherry.shapeColor = "black";
        cherry.addImage(cherryImg);
        cherry.scale = 0.3;
        cherry.y = 530;
        cherryGroup.add(cherry);

    }
}
function Coin(){
    if(frameCount % 120 === 0){
        var coin  = createSprite(camera.position.x +  650,0,10,10);
        coin.shapeColor = "black";
        coin.velocityX = -4;
        coin.addImage(coinImg);
        coin.scale = 0.1/2;
        coin.y = 320;
        coinG1.add(coin);

    }
}
function Coin2(){
    if(frameCount % 120 === 0){
        var coin2  = createSprite(camera.position.x +  680,0,10,10);
        coin2.shapeColor = "black";
        coin2.velocityX = -4;
        coin2.addImage(coinImg);
        coin2.scale = 0.1/2;
        //coin2.x = g1Group.x - 30;
        coin2.y = 320;
        coinG2.add(coin2);

    }
}
function Coin3(){
    if(frameCount % 120 === 0){
        var coin3  = createSprite(camera.position.x +  620,0,10,10);
        coin3.shapeColor = "black";
        coin3.velocityX = -4;
        coin3.addImage(coinImg);
        coin3.scale = 0.1/2;
        //coin2.x = g1Group.x - 30;
        coin3.y = 320;
        coinG3.add(coin3);

    }
}

function Restart(){
    g1Group.destroyEach();
    invisiGround2Group.destroyEach();
    mushroom1Group.destroyEach();
    coinG1.destroyEach();
    coinG2.destroyEach();
    coinG3.destroyEach();
    cherryGroup.destroyEach();
    distance = 0;
    score = 0;
    ground1.destroy();
    ground2.destroy();
    invisiGround1.destroy();
    gameState = "level";
}

function spawnLaser(){
    var laser = createSprite(mario.x+10,mario.y +100,10,10);
    laser.shapeColor = "white";
    laser.velocityY = 6;
    laser.addImage(laser3);
    laser.scale = 1.5;
    laser.lifetime = 200;
    //laser.debug = true;
    laser.setCollider("rectangle",-10,2,8,7);
    laserGroup.add(laser);
}

function spawnEnemy1(){
    if(frameCount % 150 === 0){
        var enemy1  = createSprite(0,camera.position.y+475,10,10);
        enemy1.shapeColor = "white";
        enemy1.velocityY = -4;
        enemy1.addImage(enemy1Img);
        enemy1.scale = 0.5;
        enemy1.lifetime = 350;
        //enemy1.debug = true;
        enemy1.setCollider("rectangle",3,-50,78,98);
        enemy1.x = random(200,800);
        enemy1Group.add(enemy1);

        var enemylaser = createSprite(enemy1.x,enemy1.y-100,10,10);
        enemylaser.velocityY = -6;
        enemylaser.addImage(laser1);
        enemylaser.scale = 1;
        enemylaser.lifetime = 350;
        //enemylaser.debug = true;
        enemylaser.setCollider("rectangle",-10,-30,10,7);
        enemyLaserGroup1.add(enemylaser);

    }
}

function spawnEnemy2(){
    if(frameCount % 200 === 0){
        var enemy2  = createSprite(0,camera.position.y+475,10,10);
        enemy2.shapeColor = "white";
        enemy2.velocityY = -4;
        enemy2.addImage(enemy2Img);
        enemy2.scale = 0.5;
        enemy2.lifetime = 350;
        enemy2.x = random(300,700);
        //enemy2.debug = true;
        enemy2.setCollider("rectangle",3,-50,78,98);
        enemy2Group.add(enemy2);

        var enemylaser2 = createSprite(enemy2.x,enemy2.y-100,10,10);
        enemylaser2.velocityY = -6;
        enemylaser2.addImage(laser2);
        enemylaser2.scale = 1;
        enemylaser2.lifetime = 350;
        //enemylaser2.debug = true;
        enemylaser2.setCollider("rectangle",-10,-30,10,7);
        enemyLaserGroup2.add(enemylaser2);
    }
 
}
function Potion(){
    if(frameCount % 250 === 0){
        var potion = createSprite(0,camera.position.y + 475,10,10);
        potion.addImage(potionImg);
        potion.scale = 0.3;
        potion.x = random(200,500);
        potionGroup.add(potion);
    }
}

function Fish1(){
    if(frameCount %100 === 0){
        var fish1 = createSprite(camera.position.x +650,0,10,10);
        fish1.shapeColor = "white";
        fish1.addAnimation("floating",fish1Img);
        fish1.scale = 0.3;
        fish1.velocityX = -5;
        fish1.y = random(camera.position.y +430,camera.position.y -50);
        fish1Group.add(fish1);
    }
}
function Fish2(){
    if(frameCount % 150 === 0){
        var fish2 = createSprite(camera.position.x +650,0,10,10);
        fish2.shapeColor = "white";
        fish2.addAnimation("float",fish2Img);
        fish2.scale = 0.3;
        fish2.velocityX = -5;
        fish2.y = random(camera.position.y -275,camera.position.y +125);
        fish2Group.add(fish2);
    }
}

function Crab(){
    if(frameCount % 190 === 0){
        var crab = createSprite(camera.position.x +650,0,10,10);
        crab.shapeColor = "white";
        crab.addAnimation("float",crabImg);
        crab.scale = 0.3;
        crab.velocityX = -5;
        crab.y = random(camera.position.y -275,camera.position.y +125);
        crabGroup.add(crab);
    }
}

function Octopus(){
    if(frameCount % 250 === 0){
        var octopus = createSprite(camera.position.x +650,0,10,10);
        octopus.shapeColor = "white";
        octopus.addAnimation("float",octopusImg);
        octopus.scale = 0.3;
        octopus.velocityX = -5;
        octopus.y = random(camera.position.y -275,camera.position.y +125);
        octopusGroup.add(octopus);
    }
}




