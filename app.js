var intialPrice = document.querySelector('#intial-price');
var stockQuantity = document.querySelector('#stocks-quantity');
var currentPrice = document.querySelector('#current-price');
var submitBtn = document.querySelector('#submit-btn');

var outputBox = document.querySelector('#output-box');

submitBtn.addEventListener('click', submitHandler)

function submitHandler() {
    var ip = Number(intialPrice.value)
    var qty = Number(stockQuantity.value);
    var curr = Number(currentPrice.value);
    calculateProfitAndLoss(ip,qty,curr);
}

function calculateProfitAndLoss(initial, quantity, current){
    if(initial > current){
        // loss logic here
        var loss = (initial - current) * quantity;
        var lossPercentage = (loss/initial)*100;

        showOutput(`Hey the loss is ${loss} and the percent is ${lossPercentage}%`);
    }

    else if(current > initial){
        // profit logic here
        var profit = (current - initial)* quantity;
        var profitPercentage = (profit / initial)*100;

        showOutput(`Hey the profit is ${profit} and the percent is ${profitPercentage}%`);
    }

    else{

        //the rest of logic
        showOutput('No Pain no gain and no gain no pain');
    }
}

function showOutput(message){

    outputBox.innerHTML = message

}

// calculateProfitAndLoss(100, 10, 10)