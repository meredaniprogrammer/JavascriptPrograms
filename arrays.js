let myArray = [
    'Obi',
    'Mark',
    'Vincent',
    function(name){
        return 'Hello ' + name
    }
]
console.log(myArray[3](myArray[0]))

//Hello Obi
