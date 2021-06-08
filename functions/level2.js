function level2(){
    if(level2State){
        background(forestbg);
        time++;
        mario.collide(wall1);

        bounceAnimals();
        bounceMario();
        bounceWall1();
        arrowMovements();
        setAnimalColliders();

        if(mario.isTouching(dino) || mario.isTouching(crow) || mario.isTouching(flamingo) || mario.isTouching(gorilla) || mario.isTouching(bat)){
            mario.changeAnimation("dead",mariodead);
            mario.scale = 0.2;
////////////////////////////////////////////////
// Use sprite.setVelocity(x, y) here
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
            restart.destroy();
            restart = createSprite(camera.position.x,camera.position.y);
            restart.addImage(restartImg);
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
            destroyWalls();
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
        /*if(time<100){
            mario.changeAnimation("power",mariostar);
        }*/
    }
    else{
        background(forestbg);
        if(mousePressedOver(restart)){
            destroyWalls();
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

function bounceMario(){
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
}

function bounceAnimals(){
    if(crow.isTouching(line2)){
        crow.bounceOff(line2);
        crow.changeAnimation("left",crowImg2);
        crow.velocityX = -4;
    }
    else if(crow.isTouching(line1)){
        crow.bounceOff(line1);
        crow.changeAnimation("right",crowImg1);
        crow.velocityX = 4;
    }

    if(gorilla.isTouching(line3)){
        gorilla.bounceOff(line3);
        gorilla.changeAnimation("up",gorillaImg2);
        gorilla.velocityY = -5;
    }
    else if(gorilla.isTouching(line4)){
        gorilla.bounceOff(line4);
        gorilla.changeAnimation("down",gorillaImg1);
        gorilla.velocityY = 5;
    }

    if(dino.isTouching(wall12)){
        dino.bounceOff(wall12);
        dino.changeAnimation("left",dinoImg1);
        dino.velocityX = 5;
    }
    else if(dino.isTouching(wall8)){
        dino.bounceOff(wall8);
        dino.changeAnimation("right",dinoImg2);
        dino.velocityX = -5;
    }

    if(flamingo.isTouching(wall17)){
        flamingo.bounceOff(wall17);
        flamingo.changeAnimation("right",flamingoImg1);
        flamingo.velocityX = 4;
    }
    else if(flamingo.isTouching(wall19)){
        flamingo.bounceOff(wall19);
        flamingo.changeAnimation("left",flamingoImg2);
        flamingo.velocityX = -4;
    }

    if(bat.isTouching(wall5)){
        bat.bounceOff(wall5);
        //bat.changeAnimation("left",flamingoImg2);
        bat.velocityY = -4;
    }
    else if(bat.isTouching(wall2)){
        bat.bounceOff(wall2);
        //bat.changeAnimation("left",flamingoImg2);
        bat.velocityY = 4;
    }
}

function arrowMovements(){
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
}

function bounceWall1(){
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
}

function destroyWalls(){
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
}

function setAnimalColliders(){
    //dino.debug = true;
    dino.setCollider("rectangle",4,5,98,67);
    // bat.debug = true;
    bat.setCollider("rectangle",4,35,88,67);
    // flamingo.debug = true;
    flamingo.setCollider("rectangle",4,35,88,67);
    // gorilla.debug = true;
    gorilla.setCollider("rectangle",4,35,88,67);
}