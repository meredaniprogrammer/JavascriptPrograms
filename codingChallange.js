//Coding Challange

let students = [
    {
        name: 'John',
        score1: 47,
        score2: 46
    },
    {
        name: 'Bob',
        score1: 23,
        score2: 24
    },
    {
        name: 'Nick',
        score1: 40,
        score2: 35
    },
    {
        name: 'Alex',
        score1: 44,
        score2: 45
    }
]

let scores = [91, 81, 71, 61, 51]
let degrees = ['A', 'B', 'C', 'D', 'E']

function calcSum( score1, score2){
    let sum = score1 + score2
    return sum
}

function calcFinal(){
    for(let i = 0; i < students.length; i++){
        students[i].sum = calcSum(students[i].score1, students[i].score2)
        if(students[i].sum >= 51){
            
            console.log('.....................')

            for(let x = 0; x < scores.length; x++){
                if(students[i].sum >= scores[x]){
                    console.log(students[i].name + ' has passed the exam with ' + students[i].sum + ' points and has ' + degrees[x])
                    console.log('.......................')
                    break
                }

            }
        }else {
            console.log(students[i].name + ' has failed the exam with ' + students[i].sum + ' points')
        }
    }
}
calcFinal()

/*
.....................
John has passed the exam with 93 points and has A
.......................
Bob has failed the exam with 47 points
.....................
Nick has passed the exam with 75 points and has C
.......................
.....................
Alex has passed the exam with 89 points and has B
.......................
*/
