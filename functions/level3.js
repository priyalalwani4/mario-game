function level3(){
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