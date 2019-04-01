let upgradedArray = new Array(
    'Chioma',
    'Emmanuel',
    false,
    'John',
    function(name){
        return 'Hello ' + name + ' we are here for you'
    }
)
console.log(upgradedArray[4](upgradedArray[1]))

//Hello Emmanuel we are here for you
