//Multiple arguments

let addFunction = function(c, d, e){
    return c + d + e
}
let finalResult = addFunction(30, 42, 63)
console.log(finalResult)

//Default arguments

let myFunction = function(name = 'unknown', textScore = 0){
    console.log(name)
    console.log(textScore)
}
myFunction()
