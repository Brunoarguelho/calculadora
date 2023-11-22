
let resultField = document.getElementById('result');
let currentNumber = '';
let currentOperator = '';
let currentResult = '';

function appendNumber(number) {
    currentNumber += number;
    resultField.value = currentNumber;
}

function appendOperator(operator) {
    if (currentOperator !== '') calculateResult();
    currentResult = currentNumber;
    currentNumber = '';
    currentOperator = operator;
}

function calculateResult() {
    if (currentOperator !== '') {
        currentResult = eval(currentResult + currentOperator + currentNumber);
        currentNumber = '';
        currentOperator = '';
        resultField.value = currentResult;
    }
}

function clearResult() {
    currentNumber = '';
    currentOperator = '';
    currentResult = '';
    resultField.value = '';
}