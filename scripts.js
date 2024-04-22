
// Function for number to display

let displayValue = '';

function appendNumber(number){
    displayValue += number;
    updateDisplay();
}



// Clear function

function clearDisplay(){
    displayValue = '';
    updateDisplay();
}

function appendOperator(operator){
    displayValue += operator;
    updateDisplay();
}

function appendDecimal(){
    displayValue += '.';
    updateDisplay();
}

function calculate(){
    displayValue = eval(displayValue);
    updateDisplay();
}

function updateDisplay(){
    document.getElementById('display').value = displayValue;
}