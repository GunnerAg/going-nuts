
let canvas = document.getElementById('GameScreen')

// @ts-check

let ctx = canvas.getContext('2d')

let intervalId = 0;

let bgImg = new Image();
bgImg.src = 'bg2.png'

let palmTreeImg = new Image();
palmTreeImg.src = 'palm2.png'

let monkeyImg = new Image();
monkeyImg.src = 'monkey.png'

let coconutImg = new Image();
coconutImg.src = '6.png'

let bananaImg = new Image();
bananaImg.src = 'banana.png'

let boatImg = new Image();
boatImg.src = 'Ironboat.png'

let seagullImg = new Image();
seagullImg.src = 'Seagull.png'

let palmTreeX = 0
let palmTreeY =  20;
let monkeyX = 140
let monkeyY = 200
let coconutX = canvas.width
let coconutY = Math.floor(Math.random()*300) + canvas.height/4 
let bananaX = coconutX + 150
let bananaY =  Math.floor(Math.random()*300) + canvas.height/4 
let isArrowUp = false;
let isArrowDown = false;
let score =0;
let bananaSpeed = 2;
let bananaBorder = 300;
let nutSpeed = 4;
let monkeySpeed = 2;
let boatX = 0;
let seagullX = canvas.width
let seagullY = 10
let levelUp = true;


document.addEventListener('keydown', function(event){
    if (event.key === 'ArrowUp'){
        isArrowUp = true;
        isArrowDown = false
    } 
    else if (event.key === 'ArrowDown'){
        isArrowDown= true; 
        isArrowUp= false;
    } 
})

document.addEventListener('keyup', function(event){
    isArrowUp = false;
    isArrowDown = false;
})


function monkeyMovement(){
    if (isArrowDown && monkeyY < canvas.height - monkeyImg.height){
        monkeyY = monkeyY + monkeySpeed
    }
    else if (isArrowUp && monkeyY > 150){
        monkeyY = monkeyY - monkeySpeed
    }
}

function colisionCheckCoconuts(coconutx, coconuty){
    if ( (monkeyX +100 < coconutx + coconutImg.width && monkeyX + monkeyImg.width-100 > coconutx) && (monkeyY > coconuty-100 && monkeyY < coconuty+60 )){
        clearInterval(intervalId)
        location.href = 'replay.html'
    } 
}    

function addBanana(){
    bananaArray.push({
        x: canvas.width+10,
        y: Math.floor(Math.random()*300) + canvas.height/4 
    })
}

function printScore(){
    ctx.font = '35px Courier'
    ctx.fillText('Score: '+score, 325, 30)
}

const advanceLevel = () => {
    bananaSpeed = bananaSpeed + 1;
    nutSpeed = nutSpeed + 1;
    monkeySpeed = monkeySpeed + 1;
    addBanana()
    nutArray = nutArray.concat([{x: canvas.width+300, y:  Math.floor(Math.random()*300) + canvas.height/4 }])
}


let bananaArray = [{x: canvas.width+200, y:  Math.floor(Math.random()*300) + canvas.height/4 }]
 function drawBanana(){
     

    for (let i=0;i<bananaArray.length;i++){
        console.log(bananaArray.length)
        ctx.drawImage(bananaImg, bananaArray[i].x, bananaArray[i].y );    
        if(bananaArray[i].x < 0 && bananaArray[i].x > -20){
            addBanana()
            bananaArray[i].x = -100
        }
        bananaArray[i].x -= bananaSpeed;
        //console.log(bananaArray[i].x > 0 && monkeyX == bananaArray[i].x && monkeyY > bananaArray[i].y-120 && monkeyY < bananaArray[i].y+60)
            if (bananaArray[i].x > 0 && (monkeyX +100 < bananaArray[i].x + bananaImg.width && monkeyX + monkeyImg.width-100 > bananaArray[i].x) 
            && monkeyY > bananaArray[i].y-120 && monkeyY < bananaArray[i].y+60 ){
                score++
                bananaArray[i].x = -100
                bananaArray[i].y = -100
               if (score >0 && score % 10 == 0){
                    advanceLevel()
               }
               else {
                addBanana()
               }
            } 
    }
 }

 let nutArray = [{x: canvas.width, y:  Math.floor(Math.random()*300) + canvas.height/4 }]
function drawNut(){for (let i=0;i<nutArray.length;i++){
    ctx.drawImage(coconutImg, nutArray[i].x, nutArray[i].y );
    nutArray[i].x -= nutSpeed;
    if(nutArray[i].x === 200 ){
        
        nutArray.push({
            x: canvas.width,
            y: Math.floor(Math.random()*300) + canvas.height/4 
        })
    }
    colisionCheckCoconuts(nutArray[i].x, nutArray[i].y)
}
}
function drawMonkey(){
    ctx.drawImage(monkeyImg, monkeyX, monkeyY);
}

function drawPalmTree(){
    ctx.drawImage(palmTreeImg, palmTreeX, palmTreeY);
}

// function drawBoat(){
//     ctx.drawImage(boatImg, boatX, 300);
// }


let seagullArray = [{x: canvas.width, y:  0 }]
function drawSeagull(){for (let i=0;i<seagullArray.length;i++){
    ctx.drawImage(seagullImg, seagullArray[i].x, seagullArray[i].y );
    seagullArray[i].x -= 0.5;
    if(seagullArray[i].x === 200){
        seagullArray.push({
            x: canvas.width,
            y: 0
        })
    }
    if (isArrowDown && seagullArray[i].y <150 ){
        seagullArray[i].y += 0.5 
    }
    else if (isArrowUp && seagullArray[i].y >0){
        seagullArray[i].y -= 0.5
    }
}
}

let boatArray = [{x: -200, y:300   }]
function drawBoat(){for (let i=0;i<boatArray.length;i++){
    ctx.drawImage(boatImg, boatArray[i].x, boatArray[i].y );
    boatArray[i].x += 0.5;
    if(boatArray[i].x === 600){
        boatArray.push({
            x: -200,
            y: 300
        })
    }
}
}

function gameRun(){
    ctx.drawImage(bgImg, 0, 0);
    drawBoat();
    drawSeagull();
    drawPalmTree();
    drawMonkey();
    drawNut();
    drawBanana();
    monkeyMovement();
    printScore();
    boatX +=0.1
    
 }

intervalId = setInterval(() => {
     requestAnimationFrame(gameRun)
}, 16.6)
