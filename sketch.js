function preload(){
    loadImages();
}

function setup(){
    createCanvas(1200,750);
    
    createSprites();
    createGroups();
}

function draw(){
    if(gameState === "start"){
        gameStart();
    }
    else if(gameState === "level"){
        gameLevel(); 
    }
    else if(gameState === "level1"){
        level1();     
    } 
    else if(gameState === "level2"){
        level2()
    }
    else if(gameState === "level3"){
        level3();
    }
    else if(gameState === "level4"){
        level4();       
    }
    else if(gameState === "victory"){
        victory();
    }
    drawSprites();
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

function Potion(){
    if(frameCount % 250 === 0){
        var potion = createSprite(0,camera.position.y + 475,10,10);
        potion.addImage(potionImg);
        potion.scale = 0.3;
        potion.x = random(200,500);
        potionGroup.add(potion);
    }
}
