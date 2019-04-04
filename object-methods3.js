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

let profilePerson = {
    name: 'Mere Daniel',
    prof: 'Student',
    regNo: 'MOUAU/CME/14/12542',
    dept: 'Computer Engineering',
    son: {
        name: 'Mere Wonder',
        age: 5,
        city: 'New York',
        interest: 'Football',
    },
    myFunct: function(father, school, number, boy, age, sport){
        return 'father,' + ' a ' + school + ' with reg no ' + number + ' has a son named ' + boy + ' who plays ' + sport 
    }
}
let summary = profilePerson.myFunct(profilePerson.name, profilePerson.dept, profilePerson.regNo, profilePerson.son.name, profilePerson.son.interest)
console.log(summary)
