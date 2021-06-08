function createSprites(){
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
}