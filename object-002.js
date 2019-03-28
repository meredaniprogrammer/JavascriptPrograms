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

//Object with functions
let myBook = {
    title: 'My Transition Hours',
    author: 'Goodluck Jonathan',
    pageCount: 562
}

let myOtherBook = {
    title: 'The Elevated Man',
    author: 'Mere Daniel',
    pageCount: 564
}
let getBookSummary = function(book){
    console.log(`${book.title} by ${book.author}`)
}
getBookSummary(myBook)
getBookSummary(myOtherBook)

//Displays: Transition Hours by Goodluck Jonathan and The Elevated Man by Mere Daniel

//Oject built with expense tracking

let myAccount = {
    name: 'Mere Daniel',
    expenses: 0,
    income: 0
}

let addAccount = function(account, amount){
    account.expenses = account.expenses + amount
}
addAccount(myAccount, 2500)
console.log(myAccount)
