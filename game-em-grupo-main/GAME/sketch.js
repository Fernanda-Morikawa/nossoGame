var backgroundImg, background;
var purpleGuyImg, purpleGuy;
var gameState = "play";

function preload(){

}

function setup(){
 createCanvas(1000, 1000);

 purpleGuy = createSprite(60, 200, 90, 70);
 //purpleGuy.scale = ;
 //purpleGuy.addImage();
}

function draw(){
 background(500);
 if(background.x > 500){
    background.x = 300;
 }
}