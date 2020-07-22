let scoresDOM = document.querySelector('.scores')

let scores = JSON.parse(localStorage.getItem('scores'))

let sortedScores = scores.sort((a,b) => {
    return (b.score - a.score)
})

let highest = sortedScores.slice(0,3)
 let currentUser = localStorage.getItem('user')
 highest.forEach((obj) => {
            let li = document.createElement('li')
            li.innerHTML = `<p>${obj.name}: ${obj.score}`
         
            scoresDOM.appendChild(li)
        
        })