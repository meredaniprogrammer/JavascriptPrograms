
//Javascript Code

function getHistory(){
    return document.getElementById("history-value").innerText
}
function printHistory(num){
    document.getElementById("history-value").innerText=num
}
function getOutput(){
    return document.getElementById("output-value").innerText
}
function printOutput(num){
    if(num==""){
        document.getElementById("output-value").innerText=num
    }else{
        document.getElementById("output-value").innerText=getFormattedNumber(num)
    }
    
}
function getFormattedNumber(num){
    let n = Number(num)
    let value = n.toLocaleString("en")
    return value
}
//printOutput('999999')
function reverseNumberFormat(num){
    return Number(num.replace(/,/g,''))
}

let operator = document.getElementsByClassName("operator")
for(let i = 0; i < operator.length; i++){
    operator[i].addEventListener('click',function(){
        if(this.id =="clear"){
            printHistory("")
            printOutput("")
        }
    })
}
let number = document.getElementsByClassName("number")
for(let i = 0; i < number.length; i++){
    number[i].addEventListener('click',function(){
        let output = reverseNumberFormat(getOutput())
        if(output!=NaN){
            output = output+this.id
            printOutput(output)
        }
    })
}

