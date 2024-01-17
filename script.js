
const buttonsCont = document.querySelector('#buttons-container');
const mainNums = document.querySelector('#main-nums');
const firstNum = document.querySelector('#first-num');
const lastNum = document.querySelector('#last-num');
const operator = document.querySelector('#operator');
const operatorsArr = ['*', '/', '+', '-'];
const result = document.querySelector('#result');



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