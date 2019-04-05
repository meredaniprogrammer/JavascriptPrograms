function digitalClock(){
    let date = new Date()
    let hours = date.getHours() + ''
    let minutes = date.getMinutes() + ''
    let seconds = date.getSeconds() + ''
    let day = date.getDay()
    let year = date.getFullYear()
    let month = date.getMonth()
    if(hours < 2){
        hours = '0' + hours
    }
    if(minutes < 2){
        minutes = '0' + minutes
    }
    if(seconds < 10){
       seconds =  '0' + seconds
    }
    let weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat']
    let months = ['Jan', 'Feb', 'Mar', 'April', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov','Dec']

    let clock = weekDays[day] + ' ' + hours + ':' + minutes + ':' + seconds + ' ' + ' ' + months[month] + ' ' + year 
    document.getElementById('clock').innerHTML = clock
    
    
}
digitalClock()
setInterval(digitalClock, 1000)

