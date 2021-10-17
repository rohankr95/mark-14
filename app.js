var intialPrice = document.querySelector('#intial-price');
var stockQuantity = document.querySelector('#stocks-quantity');
var currentPrice = document.querySelector('#current-price');
var submitBtn = document.querySelector('#submit-btn');

var outputBox = document.querySelector('#output-box');

function checkNegatives() {
    if (Number(intialPrice.value) == 0 || Number(stockQuantity.value) == 0){
        intialPrice.placeholder = 0
        stockQuantity.placeholder = 0
        currentPrice.placeholder = 0
        outputBox.innerHTML="Please fill all the fields (non-zero)"
    }else{
        if(Number(intialPrice.value)<=0){
            outputBox.innerHTML="Initial price should be positive and non-zero"
        }else if(Number(stockQuantity.value)<=0){
            outputBox.innerHTML="No of Stocks should be positive and non-zero"
        }else if(Number(currentPrice.value) < 0 ){
            outputBox.innerHTML="Current price can't be negative"
        }else{
            if (Number(currentPrice.value)==0){
                currentPrice.placeholder = 0
                return "Positive"
            }else{
                return "Positive"
            }
            
        }
    }
}

submitBtn.addEventListener('click', submitHandler)

function submitHandler() {
    var ip = Number(intialPrice.value)
    var qty = Number(stockQuantity.value);
    var curr = Number(currentPrice.value);
    calculateProfitAndLoss(ip,qty,curr);
}

function calculateProfitAndLoss(initial, quantity, current){
    const checker = checkNegatives();
    if (checker === 'Positive') {

    
    if(initial > current){
        // loss logic here
        var loss = (initial - current) * quantity;
        var lossPercentage = (loss/(initial*quantity))*100;

        showOutput(`Hey the loss is ${loss} and the percent is ${lossPercentage}%`);
    }

    else if(current > initial){
        // profit logic here
        var profit = (current - initial)* quantity;
        var profitPercentage = (profit / (initial *quantity))*100;

        showOutput(`Hey the profit is ${profit} and the percent is ${profitPercentage}%`);
    }

    else{

        //the rest of logic
        showOutput('No Pain no gain and no gain no pain');
    }

    }
}

function showOutput(message){

    outputBox.innerHTML = message

}

// calculateProfitAndLoss(100, 10, 10)