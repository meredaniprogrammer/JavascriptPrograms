let restaurant = {
    name: 'Mr Bigs',
    guestCapacity: 275,
    guestCount: 0,
    checkAvailability: function(partySize){
        if(partySize <= 274){
            console.log('We have seats that can size all')

        }else{
            console.log('We currently do not have seats available')
        }
    }
}
restaurant.checkAvailability(300)
//We currently do not have seats available

//Using the "this" keyword
let restaurant = {
    name: 'Mr Bigs',
    guestCapacity: 275,
    guestCount: 0,
    checkAvailability: function(partSize){
        console.log(this)
        return true
    }
}
let status = restaurant.checkAvailability(4)
console.log(status)

//Updated
let restaurant = {
    name: 'Mr Bigs',
    guestCapacity: 275,
    guestCount: 260,
    checkAvailability: function(partySize){
        let seatsleft = this.guestCapacity - this.guestCount
        if(partySize <= seatsleft){
            return 'Welcome! we have seats available for you'
        }else {
            return 'Sorry, we have got no space for your booking'
        }
    }
}
let status = restaurant.checkAvailability(4)
console.log(status)

