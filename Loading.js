// Game start screen
let canvas = document.getElementById('GameLoading')
canvas.style.border = '3px solid black'
let ctx = canvas.getContext('2d')
  
let intervalId = 0;

let bgImg = new Image();
bgImg.src = 'bg.png'

let letteringImg = new Image();
letteringImg.src = 'lettering.png'

let coconutImg = new Image();
coconutImg.src = '0.png'

let letteringY = 130
let coconutY = 400

function draw(){
     ctx.drawImage(bgImg, 0, 0)
     ctx.drawImage(letteringImg,50,letteringY)
     ctx.drawImage(coconutImg,150,coconutY)
     if (letteringY % 2 == 0){
     letteringY = letteringY+3}
     else{letteringY = letteringY-3
     }
}

intervalId = setInterval(() => {
     requestAnimationFrame(draw)
 }, 16.6)