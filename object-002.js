//Object with template strings
let myProfile = {
    surname: 'Charles',
    firstname: 'Soludo',
    age: 27,
    city: 'Abuja'
}

//console.log(`His name is ${myProfile.surname} and his other name is ${myProfile.firstname}. He is ${myProfile.age} years old, he stays in ${myProfile.city}`)
//We could use the dot notation the change the values

myProfile.surname = 'Mere'
myProfile.firstname = 'Daniel'
myProfile.age = 23
console.log(`His name is ${myProfile.surname} and his other name is ${myProfile.firstname}. He is ${myProfile.age} years old, he stays in ${myProfile.city}`)
