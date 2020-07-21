
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
let nutSpeed = 2;
let monkeySpeed = 2;
let boatX = 0;
let seagullX = canvas.width
let seagullY = 10
let levelUp = false;


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
    if (monkeyX == coconutx && monkeyY > coconuty-100 && monkeyY < coconuty+60 ){
        clearInterval(intervalId)
        alert('YOU WENT NUTS')
    } 
}

function colisionCheckBanana(bananax, bananay){
    if (monkeyX == bananax && monkeyY > bananay-120 && monkeyY < bananay+60 ){
        score++  
}       
}
function printScore(){
    ctx.font = '35px Courier'
    ctx.fillText('Score: '+score, 325, 30)
}

let bananaArray = [{x: canvas.width+200, y:  Math.floor(Math.random()*300) + canvas.height/4 }]
 function drawBanana(){
     
    for (let i=0;i<bananaArray.length;i++){
        ctx.drawImage(bananaImg, bananaArray[i].x, bananaArray[i].y );    
        if(bananaArray[i].x == 300  ){

            bananaArray.push({
                x: canvas.width+200,
                y: Math.floor(Math.random()*300) + canvas.height/4 
            })
       
        }
        bananaArray[i].x -= bananaSpeed;
        colisionCheckBanana(bananaArray[i].x, bananaArray[i].y)
    }
 }

 let nutArray = [{x: canvas.width, y:  Math.floor(Math.random()*300) + canvas.height/4 }]
function drawNut(){for (let i=0;i<nutArray.length;i++){
    ctx.drawImage(coconutImg, nutArray[i].x, nutArray[i].y );
    nutArray[i].x -= nutSpeed;
    if(nutArray[i].x === 200){
        
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

function drawBoat(){
    ctx.drawImage(boatImg, boatX, 300);
}

function drawSeagull(){
    ctx.drawImage(seagullImg, seagullX, seagullY);
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
    seagullX -=0.3
 }

intervalId = setInterval(() => {
     requestAnimationFrame(gameRun)
}, 16.6)





