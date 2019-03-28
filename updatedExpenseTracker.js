let myAccount = {
    name: 'Mere Daniel',
    expenses: 0,
    income: 0
}

let addExpenses = function(account, amount){
    account.expenses = account.expenses + amount
}
let addIncome = function(account, income){
    account.income = account.income + income
}
let resetAccount = function(account){
    account.expenses = 0
    account.income= 0
}
let getSummary = function(account){
    let balance = account.income - account.expenses
    return `Account for ${account.name} has $${balance}. His income is $${account.income} and his expenses is $${account.expenses}`
}
addIncome(myAccount, 22000)
addExpenses(myAccount, 4600)
addExpenses(myAccount, 7000)
console.log(getSummary(myAccount))
resetAccount(myAccount)
console.log(getSummary(myAccount))

//Account for Mere Daniel has $10400. His income is $22000 and his expenses is $11600
//Account for Mere Daniel has $0. His income is $0 and his expenses is $0

