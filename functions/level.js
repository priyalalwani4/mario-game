function gameLevel(){
    background(levelImg);
        
    if(!mousePressedl1){
        textSize(20);
        fill("black");
        text("Click on level 1 to start",500,50);
    }

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
    //////////////////////////////////////////
    // Created a function for the big code
        createWalls();
    }

    if(mousePressedOver(l3) && level === 3){
        gameState = "level3";
        distance = 0
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
        
}