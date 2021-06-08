function level1(){
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