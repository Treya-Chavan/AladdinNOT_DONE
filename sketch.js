var aladdin, carpet, aladdinIMG, carpetIMG;
var edges; 
var invisble_ground;
var rock, rockIMG, rockGroup;
var coin, coinIMG, coinGroup;
var gameState = "START"

function preload(){
    aladdinIMG = loadImage("images/Aladdin.png")
    carpetIMG = loadImage("images/Carpet.png")
    rockIMG = loadImage("images/Rock.png")
    coinIMG = loadImage("images/Coin.png")
}

function setup(){
    createCanvas(windowWidth, windowHeight)
    edges = createEdgeSprites()

    aladdin = createSprite(windowWidth/2-250, height-195)
    aladdin.addImage(aladdinIMG)
    aladdin.scale = 0.5

    carpet = createSprite(windowWidth/2-250, height-150)
    carpet.addImage(carpetIMG)
    carpet.scale = 0.6
    carpet.debug = true;
    carpet.setCollider("rectangle", 0, -30, carpet.width-100, carpet.height-300)

    rockGroup = new Group()
    coinGroup = new Group()
}

function draw(){
    background("black");

    invisble_ground = createSprite(width/2, height-30, width, 30)

    if(keyDown(UP_ARROW)){ 
        aladdin.velocityY = -10; 
        // carpet.velocityY = -10;
    }
    if(keyDown(LEFT_ARROW)){ 
        aladdin.x -= 5; 
        carpet.x -= 5;
    }
    if(keyDown(RIGHT_ARROW)){ 
        aladdin.x += 5; 
        carpet.x += 5;
    }

    // if(keyDown(DOWN_ARROW)){ 
    //     aladdin.y = 5; 
    //     // carpet.y = 5;
    // }

    aladdin.velocityY += 0.8
    aladdin.collide(carpet)
    carpet.collide(edges)
    aladdin.collide(edges)

    coins()
    rocks()

    drawSprites()
}

function rocks(){
    if (frameCount%150===0){
        rock = createSprite(width, Math.round(random(50, height-350)), 20, 20)
        rock.velocityX = -5
        rock.addImage(rockIMG)
        rock.scale = 0.2
        rockGroup.add(rock)
    }
}

function coins(){
    if (frameCount%150===0){
        coin = createSprite(Math.round(random(50, width-100)), -50, 20, 20)
        coin.velocityY = 5
        coin.addImage(coinIMG)
        coin.scale = 0.1
        coinGroup.add(coin)
    }
}

function START(){
    text("Help Aladdin get all his coins so he can help the poor! \nUse the arrow keys \n'LEFT' \n'RIGHT \n'UP' \nUse the Up arrow to jump and the left and right")
}