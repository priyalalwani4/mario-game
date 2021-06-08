function level4(){
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
