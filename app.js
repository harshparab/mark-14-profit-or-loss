const initialPrice = document.querySelector("#initial-price")
const stocksQuantity = document.querySelector("#stocks-quantity")
const currentPrice = document.querySelector("#current-price")
const submitBtn = document.querySelector("#submit-btn")
const outputBox = document.querySelector("#output-box")

submitBtn.addEventListener("click", submitHandler)

function submitHandler() {
    var ip = Number(initialPrice.value)
    var qty = Number(stocksQuantity.value)
    var curr = Number(currentPrice.value)

    calculateProfitAndLoss(ip, qty, curr)
}


function showOutput(message) {
    outputBox.innerHTML = message
}

function alertMessage() {
    if (initialPrice.value = " "){
        alert("Please enter the Initial Value")
    }
}


function calculateProfitAndLoss(initial, quantity, current){
    if (initial > current){
        const loss = (initial - current)* quantity 
        const lossPercentage = (loss/initial)*100

        showOutput(`The loss is ${loss} and the loss percentage is ${lossPercentage.toFixed(2)}%.`)

    }else if(initial < current){
        const profit = (current - initial)* quantity
        const profitPercentage = (profit/initial)*100

        showOutput(`The profit is ${profit} and the profit percentage is ${profitPercentage.toFixed(2)}%.`)
    }
    else if(initial === current){
        showOutput(`No profit, No loss.`)
    }
    
    else if(initial === current === 0){
        showOutput(`Please enter the values.`)
    }

    
}


