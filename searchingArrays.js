let notes =[{
    title: 'The dark century days',
    body: 'Ecosystem of love, the want in need'
},{
    title: 'The giant of the East',
    body: 'Checking for accelerations of codies'
},{
    title: 'The man behind the Iron mask',
    body: 'The foundation of newbies'
}]

const findNote = function(notes, noteTitle){
    const index = notes.findIndex(function(notes, index){
        return notes.title === noteTitle
    })
    return notes[index]
}
let note = findNote(notes, 'The man behind the Iron mask')
console.log(note)

//{ title: 'The man behind the Iron mask',
  body: 'The foundation of newbies' }
