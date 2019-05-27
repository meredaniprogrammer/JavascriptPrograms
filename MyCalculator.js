
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

//CSS Code

body {
    font-family: 'Open Sans';
    background-color: black;
} 
#container {
    widows: 1000px;
    height: 550px;
    background-image: linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(bgImg.jpg);
    margin: 20px auto;
}
#calculator{
    width: 320px;
    height:520px;
    background-color: #eaedef;
    margin: 0 auto;
    top: 20px;
    position: relative;
    border-radius: 5px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19); 
}
#result{
    height: 120px;
}
#history{
    text-align: right;
    height: 20px;
    margin: 0 20px;
    padding-top: 20px;
    font-size: 15px;
    color: #919191;
}
#output{
    text-align: right;
    height: 60px;
    margin: 10px 20px;
    font-size: 30px;
}
#keyboard{
    height: 400px;
}
.operator, .number, .empty{
    width: 50px;
    height: 50px;
    margin: 15px;
    float: left;
    border-radius: 50%;
    border-width: 0;
    font-weight: bold;
    font-size:15px;
}
.number, .empty{
    background-color: #eaedef;
}
.number, .operator{
    cursor: pointer;
}
.operator:active, .number:active{
    font-size: 13px;
}
.operator:focus, .number:focus, .empty:focus{
    outline: 0;
}
button:nth-child(4){
    font-size: 20px;
    background-color: #20b2aa;
}
button:nth-child(8){
    font-size: 20px;
    background-color: #ffa500;
}
button:nth-child(12){
    font-size: 20px;
    background-color: #f08080;
}
button:nth-child(16){
    font-size: 20px;
    background-color: #7d93e0;
}
button:nth-child(20){
    font-size: 20px;
    background-color: #9477af;
}

