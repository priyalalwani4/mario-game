function victory(){
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