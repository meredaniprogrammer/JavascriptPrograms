//Exploring Arrays Methods

let colors = ['Green', 'Blue', 'Yellow', 'White', 'Black','Gray']

if(colors.indexOf('Green') === 3){
    colors.shift()
}else{
    colors.unshift('Red')
}

console.log(colors)



//[ 'Red', 'Green', 'Blue', 'Yellow', 'White', 'Black', 'Gray' ]
