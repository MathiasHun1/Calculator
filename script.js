
const buttonsCont = document.querySelector('#buttons-container');
const mainNums = document.querySelector('#main-nums');
const firstNum = document.querySelector('#first-num');
const lastNum = document.querySelector('#last-num');
const operator = document.querySelector('#operator');
const operatorsArr = ['*', '/', '+', '-'];
const result = document.querySelector('#result');

let firstNumber;
let lastNumber;
let op;
let firstNumberFlag = false;
let lastNumberflag = false;
let opFlag = false;
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

document.addEventListener('click', (e) => {

    if (firstNumberFlag === false &&
        lastNumberflag === false &&
        opFlag === false) {
            firstNumber = e.target.outerText;       
        }
})