function gameStart(){
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
}