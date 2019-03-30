//Functions
function examFunction(name, score){
    let passUni = 80
    let passCol = 70
    if (score >= passUni){
        console.log('Congratulations!' + name + ' you have just been enrolled into our university')
    }else if(score >= passCol && score <= 79){
        console.log('Congrats! ' + name +  ' you have been enrolled into our college')
    }else{
        console.log('Sorry, you can\'t be offered admission into any school')
    }
}
examFunction('Mere Daniel', 95)
