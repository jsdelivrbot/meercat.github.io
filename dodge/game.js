var player;
var isGameOver;
var enemy;
var enemyImage;
var backgroundImage;




function preload() {
    enemyImage = loadImage("https://surrogate.hackedu.us/i.imgur.com/OdL0XPt.png");
    backgroundImage = loadImage("https://surrogate.hackedu.us/i.imgur.com/aKQOg3G.png");
    playerImage = loadImage("https://surrogate.hackedu.us/i.imgur.com/N5uCbDu.png");
    player.addImage(playerImage);
    enemyImage = loadImage("https://surrogate.hackedu.us/i.imgur.com/OdL0XPt.png");
    enemy.addImage(enemyImage);
    background(backgroundImage);

}
function setup() {
    isGameOver = false;
    createCanvas(256, 256);
    player = createSprite(width/2, height-25, 50, 50);
    enemy = createSprite(width/2, 0, 10, 30);
    
     player = createSprite(width/2, height-25, 0, 0);
     enemy = createSprite(width/2, 0, 0, 0);
     player = createSprite(width/2, height-(playerImage.height/2), 0, 0)
     enemy.addImage(enemyImage);
     enemy.rotationSpeed = 4.0;
}


function draw() {
   if (isGameOver) {
        gameOver();
    } else {
        if (enemy.overlap(player)) {
            isGameOver = true;
    
        }

    background(107,198,178);
    
    if (keyDown(RIGHT_ARROW) && player.position.x < width-25) {
  player.position.x = player.position.x + 1;
    if(keyDown(RIGHT_ARROW) && player.position.x < (width - (playerImage.width/2))){
  player.position.x += 2;
    }
    if (keyDown(LEFT_ARROW) && player.position.x > 25) {
  player.position.x = player.position.x - 1;
    if(keyDown(LEFT_ARROW) && player.position.x > (playerImage.width/2)){
  player.position.x -= 2;
    enemy.position.y = enemy.position.y + 3;
    
    if (enemy.position.y > height) {
     enemy.position.y = 0;
     enemy.position.x = random(5, width-5);
   
  
    }
   
    drawSprites();

}
    
function gameOver() {
  background(0);
  textAlign(CENTER);
  fill("white");
  text("Game Over!", width/2, height/2);
  text("Click anywhere to try again", width/2, 3*height/4);
    
    }
   function mouseClicked() {
    if (isGameOver) {
    isGameOver = false;
    player.position.x = width/2;
    player.position.y = height-25;
    enemy.position.x = width/2;
    enemy.position.y = 0;
    player.position.y = height-(playerImage.height/2);
    
  }
}



