//Looping over Arrays

let notes = ['Eat', 'Jump', 'Run', 'Visit Libry', 'Read', 'Code']

notes.forEach(function(item, index){
    let num = index + 1
    console.log(`${num}.` + ` ${item}`)
})

/*
1. Eat
2. Jump
3. Run
4. Visit Libry
5. Read
6. Code
*/

//looping over arrays with  forloop

let notes = ['Eat', 'Jump', 'Run', 'Visit Libry', 'Read', 'Code']

for(let count = 0; count < notes.length; count ++){
    let num = count + 1
    let note = notes[count]
    console.log(`${num}. ${note}`)
}

/*

1. Eat
2. Jump
3. Run
4. Visit Libry
5. Read
6. Code

*/
