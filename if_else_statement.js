// IF ELSE STATEMENT
let scoreDaniel = 87
let scoreEmmanuel = 45
let passExamScore = 52

if(scoreDaniel >= passExamScore && scoreEmmanuel >= passExamScore){
    console.log('Both students passed the exam')
}else if(scoreDaniel >= passExamScore || scoreEmmanuel >= passExamScore){
    console.log('One of them only passed the exam:')
    if(scoreDaniel > scoreEmmanuel){
        console.log('and Daniel passed the exam with ' + scoreDaniel + ' points')
    }else{
        console.log('and Emmanuel passed the exam with' + scoreEmmanuel + ' points')
    }

}else{
    console.log('Both failed the exam')
}
/*
One of them only passed the exam:
and Daniel passed the exam with 87 points
*/
