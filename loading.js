let name = document.querySelector('.name')

name.addEventListener('change', (event) => {
    console.log(event.target.value)
    let obj = {
        score: 0, 
        name: event.target.value
    }
    console.log(obj)
    let scores = ''
    if(localStorage.getItem('scores')) {
        scores = JSON.parse(localStorage.getItem('scores'))
        scores.push(obj)
    } 
    else {
        scores = []
        scores.push(obj)
    }
    console.log(scores)
    localStorage.setItem('scores', JSON.stringify(scores) )
    localStorage.setItem('user', JSON.stringify(event.target.value))
   
})
let aud = document.getElementById("audio");
aud.volume = 0.1;