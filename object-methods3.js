let father = {
    name: 'Mere Daniel',
    Profession: 'Programmer',
    age: 25,
    daughter: {
        name: 'Bernadine',
        age: 5
    },
    myFunct: function(daughter, fathername, age){
        return daughter + ' is the daughter of ' + fathername + ' . She is ' + age + ' years old.'
    }
}
console.log(father.myFunct(father.daughter.name, father.name, father.daughter.age))

//Bernadine is the daughter of Mere Daniel . She is 5 years old.
