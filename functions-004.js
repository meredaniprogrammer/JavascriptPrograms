//Functions
function examFunction(name, score){
    let passUni = 80
    let passCol = 70
    if (score >= passUni){
        console.log('Congratulations! ' + name + ' you have just been enrolled into our university with ' + score + ' points')
    }else if(score >= passCol && score <= 79){
        console.log('Congrats! ' + name +  ' you have been enrolled into our college with ' + score + ' points')
    }else{
        console.log('Sorry!, ' + name + ' you can\'t be offered admission into any school with ' + score + ' points')
    }
}

function calcScore(quizScore, essayScore){
    let score = quizScore + essayScore
    return score
}
examFunction('Mere Daniel', calcScore(50, 45))
examFunction('Eze BErnardine', 76)
examFunction('Nnochiri Ezekiel', 95)
