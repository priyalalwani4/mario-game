function createWalls(){
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