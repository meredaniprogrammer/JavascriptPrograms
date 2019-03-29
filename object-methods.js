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

