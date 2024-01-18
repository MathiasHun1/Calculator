
const buttonsCont = document.querySelector('#buttons-container');
const numberButton = document.querySelectorAll('.button.number');
const mainNums = document.querySelector('#main-nums');
const mainNumText = document.querySelector('#main-nums>p');
const operator = document.querySelector('#operator');
const operatorButton = document.querySelectorAll('.button.operator');
const operatorsArr = ['*', '/', '+', '-'];
const resultButton = document.querySelector('.button.result');

let firstNumber;
let firstArr = [];
let lastNumber;
let lastArr = [];
let op;
let firstNumberFlag = false;
let lastNumberflag = false;
let opFlag = false;
let result;
let resultFlag = false;

function add (a, b) {
    return a + b;    
}

function subtract (a, b) {
    return a - b;
}

function multiply (a, b) {
    return a * b;
}

function divide (a, b) {
    return a / b;
}

function operate(a, b, c, ) {
    if (b === '+') return add(a, c);
    if (b === '-') return subtract(a, c);
    if (b === '*') return multiply(a, c);
    if (b === '/') return divide(a, c);
}

numberButton.forEach(element => {
    element.addEventListener('click', (e) => {
        if (firstNumberFlag === false &&
            resultFlag === false) {
            firstArr.push(e.target.outerText);
            mainNumText.textContent = firstArr.join('');
            console.log('first number: ' + firstArr);
        } else if (firstNumberFlag === true && 
            opFlag === true &&
            resultFlag === false) {
            lastArr.push(e.target.outerText);
            mainNumText.textContent = lastArr.join('');
            console.log('last number: ' + lastArr);
        }
    });
});

operatorButton.forEach(element => {
    element.addEventListener('click', (e) => {
        if (opFlag === false) {
            firstNumberFlag = true;
            op = e.target.outerText
            opFlag = true;
            mainNumText.textContent = op;
            console.log(op)
        }
    })
})

resultButton.addEventListener('click', () => {
    if (firstNumberFlag === true && 
        opFlag === true && 
        lastArr.length !== 0) {
            lastNumberflag = true;
            resultFlag = true;
            firstNumber = parseInt(firstArr.join(''));
            lastNumber = parseInt(lastArr.join(''));
            result = operate(firstNumber, op, lastNumber);
            mainNumText.textContent = result;
            console.log(result)
    }
})

