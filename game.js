
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
let bananaSpeed = 1;
let nutSpeed = 1;
let monkeySpeed = 2;
let boatX = 0;
let seagullX = canvas.width
let seagullY = 10
let levelUp = false;
let speedInc = 0;
let aud = document.getElementById("audio");
aud.volume = 0.2;

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
        let scores = JSON.parse(localStorage.getItem('scores'))
        let currentUser = JSON.parse(localStorage.getItem('user'))
        scores.forEach((obj) => {
            console.log(obj.name == currentUser)
            if (obj.name == currentUser){
                console.log('Score is', score)
                obj.score = score
            }
        })
        localStorage.setItem('scores', JSON.stringify(scores) )
        location.href = 'replay.html'
    } 
}    

function printScore(){
    ctx.font = '35px Courier'
    ctx.fillStyle = '#e5ff00'    
    ctx.fillText("Banana's: "+score, 325, 30)
}

let bananaArray = [{x: canvas.width, y:  Math.floor(Math.random()*300) + canvas.height/4 }]
 function drawBanana(){
     
    for (let i=0;i<bananaArray.length;i++){
        ctx.drawImage(bananaImg, bananaArray[i].x, bananaArray[i].y );    
        if(bananaArray[i].x == 300  ){

            bananaArray.push({
                x: canvas.width+200,
                y: Math.floor(Math.random()*300) + canvas.height/4 
            })
       
        }
        bananaArray[i].x -= (bananaSpeed + speedInc);
        if (monkeyX == bananaArray[i].x-60 && monkeyY > bananaArray[i].y-120 && monkeyY < bananaArray[i].y+60 ){
            score++;
            bananaArray[i].x=-100;
            bananaArray[i].y=-100;
    }   
    }
 }

 let nutArray = [{x: canvas.width+300, y:  Math.floor(Math.random()*300) + canvas.height/4 }]
function drawNut(){

    for (let i=0;i<nutArray.length;i++){
    ctx.drawImage(coconutImg, nutArray[i].x, nutArray[i].y );
    if(nutArray[i].x === 300){
        
        nutArray.push({
            x: canvas.width+200,
            y: Math.floor(Math.random()*300) + canvas.height/4 
        })
    }
    nutArray[i].x -= (nutSpeed+ speedInc);
    colisionCheckCoconuts(nutArray[i].x, nutArray[i].y)
}
}

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
    if (isArrowUp && seagullArray[i].y <150 ){
        seagullArray[i].y += 0.5 
    }
    else if (isArrowDown && seagullArray[i].y >0){
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

function drawMonkey(){
    ctx.drawImage(monkeyImg, monkeyX, monkeyY);
}

function drawPalmTree(){
    ctx.drawImage(palmTreeImg, palmTreeX, palmTreeY);
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
    boatX +=0.3
    seagullX -=0.5
    if(score>10 && score<20){
        speedInc=1}
    else if(score>19 && score<30){
        speedInc=4
    }
    else if(score>30){
        speedInc=9;
        monkeySpeed =4;
    }
 }

intervalId = setInterval(() => {
     requestAnimationFrame(gameRun)
}, 16.6)





